import express from 'express'
import pool from '../config/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT 
        p.id, p.name, p.age, p.city, p.college, p.image, p.bio, p.interests,
        m.created_at
        FROM matches m
        JOIN profiles p ON m.profile_id = p.id
        ORDER BY m.created_at DESC
      `)

    res.json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
