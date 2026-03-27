import { useState } from 'react';
import './Hero.css';
import { useMagnetic } from '../hooks/useMagnetic';
import heroImage from '../assets/images/entrance.jpg';
import FullMenuModal from './FullMenuModal';

const Hero = () => {
  const magExplore = useMagnetic();
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text-wrapper reveal">
          <div className="mask-reveal">
            <span className="hero-eyebrow">House of Fridah</span>
          </div>
          <h1 className="hero-title">
            <span className="mask-reveal"><span>Where Every</span></span>
            <span className="mask-reveal transition-delay-1"><span className="serif-italic gold-text">Moment</span></span>
            <span className="mask-reveal transition-delay-2"><span>Finds its Soul.</span></span>
          </h1>
          <p className="hero-tagline reveal transition-delay-3">
            A curated sanctuary where sunlit serenity meets<br /> the vibrant pulse of the night.
          </p>
        </div>
        <div className="hero-actions reveal transition-delay-4">
          <a href="#realms" className="btn-primary" ref={magExplore}>Explore Our World</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
      <FullMenuModal isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
    </section>
  );
};

export default Hero;
