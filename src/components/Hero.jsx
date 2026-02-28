import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';
import heroImage from '../assets/images/hero_dining.jpg';

const Hero = () => {
  const reserveBtnRef = useMagnetic(0.2);
  const menuBtnRef = useMagnetic(0.2);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container reveal active">
        <h2 className="hero-subtitle">
          {"Welcome to Whitefield".split("").map((char, index) => (
            <span key={index} style={{ "--char-index": index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <h1 className="hero-title">Fridah<br /><span>by Bohemians</span></h1>
        <p className="hero-tagline">An immersive journey through bohemian luxury and artisanal multicuisine.</p>
        <div className="hero-actions">
          <a href="#reservation" className="btn-primary" ref={reserveBtnRef}>Reserve a Table</a>
          <a href="#menu" className="btn-secondary" ref={menuBtnRef}>Explore Menu</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
