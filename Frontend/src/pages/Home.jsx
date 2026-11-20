import { Heart, Compass, Users, Sparkles, ArrowRight } from 'lucide-react'

function Home({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto">
        <div className="mb-10">
            <p className="text-pink-400 font-semibold mb-2">WELCOME TO COY</p>
            <h1 className="text-4xl font-bold mb-3">
            Discover meaningful connections.
            </h1>
            <p className="text-gray-400 text-lg">
            Meet new people, find common interests and discover your next connection.
            </p>
        </div>

        <div className="bg-gradient-to-r from-pink-700 to-purple-800 rounded-3xl p-8 md:p-12 mb-10">
            <div className="max-w-xl">
            <div className="flex items-center gap-2 text-pink-100 mb-4">
                <Sparkles size={20} />
                <span className="font-semibold">Your next connection starts here</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Someone interesting might be waiting for you.
            </h2>

            <p className="text-pink-100 mb-7">
                Explore profiles, swipe right on people you like and find out when the feeling is mutual.
            </p>

            <button
                onClick={() => onNavigate('Discover')}
                className="bg-white text-pink-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-pink-50 transition"
            >
                Start Discovering
                <ArrowRight size={18} />
            </button>
            </div>
        </div>

        <h2 className="text-2xl font-bold mb-5">Explore Coy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                onClick={() => onNavigate('Discover')}
                className="text-left bg-gray-900 border border-gray-800 hover:border-pink-500 rounded-2xl p-6 transition"
                >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5">
                    <Compass size={25} />
            </div>

            <h3 className="text-xl font-bold mb-2">Discover People</h3>
            <p className="text-gray-400 mb-4">
                Explore profiles and find people who share your interests.
            </p>

            <span className="text-pink-400 font-semibold flex items-center gap-2">
                Explore profiles <ArrowRight size={16} />
            </span>
            </button>

                <button
                onClick={() => onNavigate('Matches')}
                className="text-left bg-gray-900 border border-gray-800 hover:border-pink-500 rounded-2xl p-6 transition"
                >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                    <Users size={25} />
                </div>

            <h3 className="text-xl font-bold mb-2">Your Matches</h3>
            <p className="text-gray-400 mb-4">
                See the people who liked you back and discover your mutual connections.
            </p>

                <span className="text-pink-400 font-semibold flex items-center gap-2">
                        View matches <ArrowRight size={16} />
                </span>
            </button>
        </div>

            <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0">
                <Heart size={24} />
                </div>

                <div>
                <h3 className="font-bold text-lg">Good connections start with a swipe.</h3>
                <p className="text-gray-400 text-sm">
                    Be yourself, explore and let mutual interest do the rest.
                </p>
                </div>
            </div>
    </div>
  )
}

export default Home
