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
      <div className="hero-content container reveal active">
        <h1 className="hero-title">A world of experiences,<br />all in one place.</h1>
        <p className="hero-tagline">From serene dining to vibrant nights — discover every side of Fridah.</p>
        <div className="hero-actions">
          <a href="#realms" className="btn-primary" ref={magExplore}>Explore Experiences</a>
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
