import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SocialRail from './components/SocialRail.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <SocialRail />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
