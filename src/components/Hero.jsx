import { useState } from 'react';
import './Hero.css';
import heroImage from '../assets/images/entrance.jpg';
import FullMenuModal from './FullMenuModal';

const Hero = () => {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container reveal active">
        <h1 className="hero-title">A world where art, music, and dining come together.</h1>
        <p className="hero-tagline">Step into a space where every corner tells a different story.</p>
        <div className="hero-actions">
          <a href="#realms" className="btn-primary">Explore Experiences</a>
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
