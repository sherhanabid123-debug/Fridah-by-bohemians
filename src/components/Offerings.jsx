import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Offerings.css';
import imgFood from '../assets/images/food_sushi.jpg';
import imgCocktail from '../assets/images/food_drink.jpg';

const Offerings = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const images = gsap.utils.toArray('.offering-image img');
        
        images.forEach(img => {
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }, { scope: sectionRef });

    return (
        <section id="offerings" className="offerings-section section-padding" ref={sectionRef}>
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
                                    <h4 className="offering-type">Food</h4>
                                    <p className="offering-desc">A curated menu designed for rich, flavourful dining experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offering-card reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="offering-image">
                            <img src={imgCocktail} alt="Mixology" />
                            <div className="offering-overlay">
                                <div className="offering-content">
                                    <h4 className="offering-type">Cocktails</h4>
                                    <p className="offering-desc">Signature mixes crafted to complement every mood and moment.</p>
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
