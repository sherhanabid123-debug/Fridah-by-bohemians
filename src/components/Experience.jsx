import './Experience.css';
import expImage from '../assets/images/experience_balcony.jpg';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience-parallax reveal" style={{ backgroundImage: `url(${expImage})` }}>
                <div className="experience-overlay"></div>
                <div className="experience-content container reveal active">
                    <div className="experience-box">
                        <h3 className="section-subtitle">
                            <span className="mask-reveal"><span>The Ambience</span></span>
                        </h3>
                        <h2 className="section-title">
                            <span className="mask-reveal"><span>An Immersive Escape</span></span>
                        </h2>
                        <p className="experience-text">
                            Step into a realm where deep charcoal tones meet warm, cinematic lighting. Our space is meticulously designed to offer privacy, elegance, and a multi-sensory journey. Whether it's an intimate dinner or a grand celebration, Fridah provides the perfect backdrop.
                        </p>
                        <div className="experience-stats">
                            <div className="stat">
                                <span className="stat-value">120+</span>
                                <span className="stat-label">Curated Wines</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">Private</span>
                                <span className="stat-label">Dining Rooms</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">Live</span>
                                <span className="stat-label">Acoustic Sets</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
