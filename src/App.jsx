import { useEffect, useState } from 'react';
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
import Preloader from './components/Preloader';

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Lock scroll while preloading
  useEffect(() => {
    if (!isAppLoaded) {
      document.body.style.overflow = 'hidden';
      // Force scroll to top on reload so preloader covers hero
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
  }, [isAppLoaded]);
  // Enhanced scroll reveal logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a tiny delay for more organic feel
          setTimeout(() => {
            entry.target.classList.add('active');
          }, 100);
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Scroll Progress & Blur Scrubbing
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const height = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollY / height) * 100;

          const progressLine = document.querySelector('.scroll-progress-line');
          if (progressLine) progressLine.style.width = `${progress}%`;

          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set progress bar and blur on load
    handleScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Preloader onLoadingComplete={() => setIsAppLoaded(true)} />

      <div className={`app-root ${isAppLoaded ? 'app-ready' : ''}`} style={{ opacity: isAppLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in' }}>
        <div className="scroll-progress-container">
          <div className="scroll-progress-line"></div>
        </div>
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
    </>
  );
}

export default App;
