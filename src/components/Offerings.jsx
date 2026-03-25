import './Offerings.css';
import imgFood from '../assets/images/food_sushi.jpg';
import imgCocktail from '../assets/images/food_drink.jpg';

const Offerings = () => {
    return (
        <section id="offerings" className="offerings-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>The Art of Taste</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Our Offerings</span></span>
                    </h2>
                    <p className="pkg-intro">
                        Thoughtfully crafted food and signature cocktails designed to complement every moment.
                    </p>
                </div>

                <div className="offerings-grid">
                    <div className="offering-card reveal">
                        <div className="offering-image">
                            <img src={imgFood} alt="Cuisine" />
                            <div className="offering-overlay">
                                <div className="offering-content">
                                    <h4 className="offering-type">Cuisine</h4>
                                    <p className="offering-desc">Artisanal multicuisine plates where global flavors meet bohemian soul.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offering-card reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="offering-image">
                            <img src={imgCocktail} alt="Mixology" />
                            <div className="offering-overlay">
                                <div className="offering-content">
                                    <h4 className="offering-type">Mixology</h4>
                                    <p className="offering-desc">Bespoke cocktails and signature infusions crafted by our master mixologists.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
