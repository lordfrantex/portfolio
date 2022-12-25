import About from "./Components/About";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom"
import { NavHashLink as Link } from 'react-router-hash-link'
import Resume from "./Components/Resume";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import ParticleBackground from "./Components/ParticleBackground";
import Projects from "./Components/Projects";



function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />

    </div>
  );
}

export default App;
