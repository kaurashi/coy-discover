import { useState } from 'react'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Matches from './pages/Matches'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const pages = ['Home', 'Discover', 'Matches']

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-900 p-4 md:p-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-4 md:mb-10">
          coy.
        </h1>

        <nav className="flex md:flex-col gap-2 md:gap-4">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`flex-1 md:w-full text-center md:text-left px-4 py-3 rounded-lg ${
                activePage === page
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-w-0 p-4 md:p-8">
        {activePage === 'Home' ? (
          <Home onNavigate={setActivePage} />
        ) : activePage === 'Discover' ? (
          <Discover />
        ) : (
          <Matches />
        )}
      </main>
    </div>
  )
}

export default App
