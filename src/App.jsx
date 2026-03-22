import { useEffect, useState, useCallback } from 'react';
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
import Lenis from 'lenis';

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);

  const handleLoadingComplete = useCallback(() => {
    setIsAppLoaded(true);
  }, []);

  // Lock scroll while preloading using Lenis if available
  useEffect(() => {
    if (lenisInstance) {
      if (!isAppLoaded) {
        window.scrollTo(0, 0);
        lenisInstance.stop();
      } else {
        lenisInstance.start();
      }
    }
  }, [isAppLoaded, lenisInstance]);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenisInstance(lenis);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

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
      <Preloader onLoadingComplete={handleLoadingComplete} />

      <div className={`app-root ${isAppLoaded ? 'app-ready' : ''}`}>
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
