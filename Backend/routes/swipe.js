import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { profileId, action } = req.body

  if (!profileId || !['like', 'pass'].includes(action)) {
    return res.status(400).json({ error: 'Invalid profileId or action' })
  }

  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    const profile = await client.query('SELECT id, liked_user FROM profiles WHERE id = $1', [profileId])

    if (profile.rows.length === 0) {
      await client.query('ROLLBACK')
      return res.status(404).json({ error: 'Profile not found' })
    }

    const swipe = await client.query(`INSERT INTO swipes (profile_id, action)
                        VALUES ($1, $2)
                        ON CONFLICT (profile_id) DO NOTHING
                        RETURNING id`,
                        [profileId, action]
    )

    if (swipe.rows.length === 0) {
      await client.query('ROLLBACK')
      return res.status(409).json({ error: 'Profile already swiped' })
    }

    let matched = false

    if (action === 'like' && profile.rows[0].liked_user) {
      await client.query('INSERT INTO matches (profile_id) VALUES ($1) ON CONFLICT (profile_id) DO NOTHING',[profileId])
      matched = true
    }

    await client.query('COMMIT')

    res.json({
      message: matched ? "It's a match!" : 'Swipe saved successfully',
      matched
    })
  } catch (error) {
    await client.query('ROLLBACK')
    res.status(500).json({ error: error.message })
  } finally {
    client.release()
  }
})

export default router
