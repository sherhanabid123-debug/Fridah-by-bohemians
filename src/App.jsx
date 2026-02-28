import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Experience from './components/Experience';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  // Global scroll reveal logic
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <SignatureDishes />
      <Experience />
      <MenuPreview />
      <Gallery />
      <LocationMap />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
