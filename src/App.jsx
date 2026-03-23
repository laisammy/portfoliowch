import { Routes, Route } from "react-router-dom"
import Hero from "./hero"
import About from "./about"
import Gallery from "./gallery"
import Resume from "./resume"
import Contact from "./contact"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
