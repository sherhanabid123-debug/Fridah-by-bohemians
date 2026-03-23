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
        <h2 className="hero-subtitle">
          {"Step Into Fridah".split("").map((char, index) => (
            <span key={index} style={{ "--char-index": index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <h1 className="hero-title">Fridah<br /><span>by Bohemians</span></h1>
        <p className="hero-tagline">A world where art, music, and dining become one experience.</p>
        <div className="hero-actions">
          <a href="#reservation" className="btn-primary">Reserve a Table</a>
          <a href="#full-menu" className="btn-secondary" onClick={(e) => { e.preventDefault(); setIsFullMenuOpen(true); }}>Explore Menu</a>
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
