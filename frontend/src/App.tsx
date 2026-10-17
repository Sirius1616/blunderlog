import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ImportGames from './pages/ImportGames'
import MyGames from './pages/MyGames'
import GameAnalysis from './pages/GameAnalysis'
import Training from './pages/Training'
import Progress from './pages/Progress'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="max-w-7xl mx-auto flex gap-6">
            <a href="/" className="font-bold text-teal-400">BlunderLog</a>
            <a href="/import" className="hover:text-teal-300">Import</a>
            <a href="/games" className="hover:text-teal-300">My Games</a>
            <a href="/training" className="hover:text-teal-300">Training</a>
            <a href="/progress" className="hover:text-teal-300">Progress</a>
            <a href="/settings" className="hover:text-teal-300">Settings</a>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/import" element={<ImportGames />} />
            <Route path="/games" element={<MyGames />} />
            <Route path="/games/:id" element={<GameAnalysis />} />
            <Route path="/training" element={<Training />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
