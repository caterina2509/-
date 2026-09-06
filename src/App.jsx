import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <>
     
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/services" element={<Services />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </>
  )
}

export default App
