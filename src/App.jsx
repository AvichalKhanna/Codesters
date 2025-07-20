import { useState } from 'react'
import './App.css'
import StarBackground from './components/StarBackground'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Messenger from './pages/Messenger';
import Chats from './pages/Chats';
import Contact from './pages/Contact';
import Calls from './pages/Calls';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Docs from './pages/Docs';
import News from './pages/News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-hidden'>

      <div className='absolute top-0 left-0 w-0 w-full h-full -z-1 overflow-hidden'>
        <StarBackground/>
      </div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Calls" element={<Calls />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
