import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';

function App() {
  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
    </>
  );
}

export default App;