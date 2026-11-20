import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT id, name, age, city, college, image, bio, interests
                                    FROM profiles
                                  WHERE id NOT IN (
                                    SELECT profile_id FROM swipes
                                    )
                                ORDER BY id ASC
                                `)

    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
