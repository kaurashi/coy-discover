import { useEffect, useState } from 'react'
import API from '../api/axios'
import { Heart } from 'lucide-react'

function Matches() {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await API.get('/matches')
        setMatches(response.data)
      } catch (error) {
        setError('Failed to load matches')
      } finally {
        setLoading(false)
      }
    }

    fetchMatches()
  }, [])

  if (loading) {
    return <p className="text-gray-400">Loading matches...</p>
  }

  if (error) {
    return <p className="text-red-400">{error}</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Your Matches</h1>

      <p className="text-gray-400 mb-8">
        People who liked you back.
      </p>

      {matches.length === 0 ? (
        <div className="text-center mt-20">
          <Heart size={45} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold">No matches yet!</h2>
          <p className="text-gray-400 mt-2">
            Keep discovering to find your connection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="w-full h-72 bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src={match.image}
                  alt={match.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {match.name}, {match.age}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {match.city}
                </p>

                <p className="text-gray-300 mt-3">
                  {match.bio}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {match.interests?.map((interest) => (
                    <span
                      key={interest}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-pink-400 mt-5 font-semibold">
                  <Heart size={18} fill="currentColor" />
                  It's a match!
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Matches
