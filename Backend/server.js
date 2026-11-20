import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './config/db.js'
import feedRoutes from './routes/feed.js'
import swipeRoutes from './routes/swipe.js'
import matchesRoutes from './routes/matches.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/feed', feedRoutes)
app.use('/swipe', swipeRoutes)
app.use('/matches', matchesRoutes)

app.get('/', (req, res) => {
  res.send('Coy Discover API is running!')
})

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({
      message: 'Neon database connected successfully!',
      time: result.rows[0].now
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
