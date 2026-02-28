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
import CustomCursor from './components/CustomCursor';

function App() {
  // Enhanced scroll reveal logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a tiny delay for more organic feel
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <div className="grain-overlay" />
      <CustomCursor />
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
    </div>
  );
}

export default App;
