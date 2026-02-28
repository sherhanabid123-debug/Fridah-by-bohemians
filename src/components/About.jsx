import DecorativeLines from './DecorativeLines';
import './About.css';
import aboutImage from '../assets/images/second.jpg';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container about-container">
                <div className="about-content reveal active">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Our Story</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Where Culinary Art</span></span>
                        <span className="mask-reveal" style={{ transitionDelay: '0.1s' }}><span>Meets Bohemian Luxury</span></span>
                    </h2>
                    <DecorativeLines type="horizontal" />
                    <p className="about-text scrub-blur">
                        Situated in the heart of Whitefield, Bangalore, Fridah by Bohemians offers an escape from the ordinary. We blend the free-spirited essence of bohemian culture with an uncompromising standard of modern luxury dining.
                    </p>
                    <p className="about-text scrub-blur">
                        Our chef's philosophy is simple: source the finest global ingredients and transform them into artisanal multicuisine masterpieces. Every dish tells a story of passion, precision, and artistry.
                    </p>

                    <div className="about-features">
                        <div className="feature">
                            <span className="feature-number">01</span>
                            <span className="feature-text">Artisanal Multicuisine</span>
                        </div>
                        <div className="feature">
                            <span className="feature-number">02</span>
                            <span className="feature-text">Cinematic Ambience</span>
                        </div>
                        <div className="feature">
                            <span className="feature-number">03</span>
                            <span className="feature-text">Curated Experiences</span>
                        </div>
                    </div>
                </div>

                <div className="about-image reveal active">
                    <div className="image-wrapper">
                        <img
                            src={aboutImage}
                            alt="Fridah Restaurant Interior"
                        />
                        <div className="image-accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
