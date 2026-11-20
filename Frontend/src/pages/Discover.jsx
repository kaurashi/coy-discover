import { useState, useRef, useEffect } from 'react'
import API from '../api/axios'
import ProfileCard from '../components/ProfileCard'
import { Heart, X } from 'lucide-react'

const THRESHOLD = 100

function Discover() {
  const [profiles, setProfiles] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [notification, setNotification] = useState(null)
  const [drag, setDrag] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [leaving, setLeaving] = useState(null)
  const [loading, setLoading] = useState(true)
  const [swiping, setSwiping] = useState(false)
  const [error, setError] = useState('')
  const [showMatch, setShowMatch] = useState(null)
  const start = useRef(null)
  const dragRef = useRef({ x: 0, y: 0 })
  const swipeLock = useRef(false)

  const currentProfile = profiles[currentIndex]

      useEffect(() => {
        const fetchProfiles = async () => {
          try {
            const response = await API.get('/feed')
            setProfiles(response.data)
          } catch (error) {
            setError('Failed to load profiles')
          } finally {
            setLoading(false)
          }
        }

        fetchProfiles()
      }, [])

  useEffect(() => {
    if (!notification) return
    const t = setTimeout(() => setNotification(null), 2000)
    return () => clearTimeout(t)
  }, [notification])

  const handleSwipe = async (action) => {
    if (!currentProfile || swipeLock.current || showMatch) return

    swipeLock.current = true

    const profile = currentProfile
    const name = profile.name

    setSwiping(true)
    setLeaving(action)

    try {
      const response = await API.post('/swipe', {
        profileId: profile.id,
        action
      })

      setTimeout(() => {
        if (response.data.matched) {
          setShowMatch(profile)
          setNotification(null)
        } else {
          setNotification({
            type: action,
            text: action === 'like'
              ? `Liked! ${name} ❤️`
              : `Passed! ${name} ✕`
          })
        }

            setCurrentIndex((prev) => prev + 1)
            setLeaving(null)
            setDrag({ x: 0, y: 0 })
            dragRef.current = { x: 0, y: 0 }
            setSwiping(false)
            swipeLock.current = false
          }, 300)
    } catch (error) {
      setLeaving(null)
      setDrag({ x: 0, y: 0 })
      dragRef.current = { x: 0, y: 0 }
      setSwiping(false)
      swipeLock.current = false

          setNotification({
            type: 'error',
            text: error.response?.data?.error || 'Failed to save swipe'
          })
    }
  }

    const onPointerDown = (e) => {
      if (leaving || swiping || showMatch || swipeLock.current) return

      start.current = { x: e.clientX, y: e.clientY }
      e.currentTarget.setPointerCapture(e.pointerId)
      setDragging(true)
    }

      const onPointerMove = (e) => {
        if (!start.current) return

        dragRef.current = {
          x: e.clientX - start.current.x,
          y: (e.clientY - start.current.y) * 0.3
        }

        setDrag(dragRef.current)
      }

    const onPointerUp = () => {
      if (!start.current) return

      const distance = dragRef.current.x

      start.current = null
      setDragging(false)

      if (distance > THRESHOLD) handleSwipe('like')
      else if (distance < -THRESHOLD) handleSwipe('pass')
      else {
        setDrag({ x: 0, y: 0 })
        dragRef.current = { x: 0, y: 0 }
      }
    }

    let transform = `translate(${drag.x}px, ${drag.y}px) rotate(${drag.x / 20}deg)`

    if (leaving) {
      const dir = leaving === 'like' ? 1 : -1
      transform = `translate(${dir * 600}px, 0px) rotate(${dir * 30}deg)`
    }

    const likeOpacity = leaving === 'like' ? 1 : Math.min(Math.max(drag.x / THRESHOLD, 0), 1)
    const passOpacity = leaving === 'pass' ? 1 : Math.min(Math.max(-drag.x / THRESHOLD, 0), 1)

  if (loading) return <p>Loading profiles...</p>

  if (error) return <p className="text-red-400">{error}</p>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Discover</h1>

      <p className="text-gray-400 mb-8">
        Find someone who might be your next connection.
      </p>

      <div className="flex flex-col items-center">
        {currentProfile ? (
          <>
            <div
              key={currentProfile.id}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="relative w-full max-w-sm cursor-grab active:cursor-grabbing select-none"
              style={{
                transform,
                opacity: leaving ? 0 : 1,
                transition: dragging ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
                touchAction: 'none',
                willChange: 'transform'
              }}
            >
              <ProfileCard profile={currentProfile} />

              <div
                className="absolute top-6 left-6 px-3 py-1 rounded-lg border-4 border-green-400 text-green-400 text-2xl font-extrabold -rotate-12 pointer-events-none"
                style={{ opacity: likeOpacity }}
              >
                LIKE
              </div>

              <div
                className="absolute top-6 right-6 px-3 py-1 rounded-lg border-4 border-red-400 text-red-400 text-2xl font-extrabold rotate-12 pointer-events-none"
                style={{ opacity: passOpacity }}
              >
                PASS
              </div>
            </div>

            <div className="flex gap-8 mt-6">
              <button
                onClick={() => handleSwipe('pass')}
                disabled={swiping || !!showMatch}
                aria-label="Pass"
                className="w-16 h-16 rounded-full bg-gray-800 text-red-400 flex items-center justify-center hover:bg-gray-700 disabled:opacity-50"
              >
                <X size={30} />
              </button>

              <button
                onClick={() => handleSwipe('like')}
                disabled={swiping || !!showMatch}
                aria-label="Like"
                className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-500 disabled:opacity-50"
              >
                <Heart size={30} />
              </button>
            </div>
          </>
        ) : (
          <h2 className="text-2xl font-bold mt-20">
            No more profiles!
          </h2>
        )}

        {notification && (
          <div
            className={`mt-6 px-6 py-3 rounded-xl bg-gray-800 border text-white font-semibold ${
              notification.type === 'like'
                ? 'border-green-400'
                : notification.type === 'pass'
                  ? 'border-red-400'
                  : 'border-yellow-400'
            }`}
          >
            {notification.text}
          </div>
        )}
      </div>

      {showMatch && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-pink-500 rounded-3xl p-8 max-w-sm w-full text-center">
            <Heart
              size={60}
              fill="currentColor"
              className="text-pink-500 mx-auto mb-5"
            />

            <h2 className="text-3xl font-bold text-pink-400 mb-3">
              It's a Match!
            </h2>

            <p className="text-gray-300 mb-6">
              You and {showMatch.name} liked each other.
            </p>

            <img
              src={showMatch.image}
              alt={showMatch.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
            />

            <button
              onClick={() => setShowMatch(null)}
              className="w-full bg-pink-600 hover:bg-pink-500 rounded-xl py-3 font-semibold"
            >
              Keep Discovering
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Discover
