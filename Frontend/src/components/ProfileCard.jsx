function ProfileCard({ profile }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 shadow-xl">
      <div className="relative h-[420px] sm:h-96">
        <img
          src={profile.image}
          alt={profile.name}
          draggable={false}
          className="w-full h-full object-cover pointer-events-none select-none"
        />

        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {profile.name}, {profile.age}
          </h2>

          <p className="text-gray-200 mt-1 text-sm sm:text-base">
            {profile.city}
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-gray-300 text-sm sm:text-base">
          {profile.bio}
        </p>

        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          {profile.college}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs sm:text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
