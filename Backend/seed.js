import pool from './config/db.js'
import profiles from '../Frontend/src/data/profiles.js'

const seedProfiles = async () => {
  try {
    for (const profile of profiles) {
      await pool.query(`INSERT INTO profiles
                      (id, name, age, city, college, image, bio, interests, liked_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                      ON CONFLICT (id) DO NOTHING`,
        [profile.id, profile.name, profile.age, profile.city, profile.college, profile.image, profile.bio, profile.interests,
          [3, 8, 12, 19, 26].includes(profile.id)
        ]
      )
    }

    await pool.query(`SELECT setval('profiles_id_seq',COALESCE((SELECT MAX(id) FROM profiles), 1))`)

    console.log('30 profiles inserted successfully!')
  } catch (error) {
    console.error(error.message)
  } finally {
    await pool.end()
  }
}

seedProfiles()
