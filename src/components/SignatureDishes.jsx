import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './SignatureDishes.css';

import imgSushi from '../assets/images/food_sushi.jpg';
import imgDrink from '../assets/images/food_drink.jpg';
import imgSpread from '../assets/images/food_spread.jpg';

const dishes = [
    {
        id: 1,
        name: 'Artisanal Sushi Rolls',
        description: 'Hand-rolled sushi with fresh avocado, tempura flakes, and signature house glaze.',
        image: imgSushi,
        objectPosition: 'center bottom',
    },
    {
        id: 2,
        name: 'Signature Infusions',
        description: 'Crafted cocktails paired with fresh aromatics, toasted nuts, and house-made syrups.',
        image: imgDrink,
    },
    {
        id: 3,
        name: 'The Bohemian Spread',
        description: 'A luxurious multicuisine spread featuring spiced noodles, fresh salads, and crafted sides.',
        image: imgSpread,
    }
];

const SignatureDishes = () => {
    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: window.innerWidth * 0.85, // Scroll by approx one card width
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="dishes" className="signature-dishes section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">Culinary Masterpieces</h3>
                    <h2 className="section-title">Signature Dishes</h2>
                </div>

                <div className="carousel-wrapper">
                    <div className="dishes-grid" ref={scrollContainerRef}>
                        {dishes.map((dish, index) => (
                            <div
                                key={dish.id}
                                className={`dish-card reveal`}
                                style={{ transitionDelay: `${index * 0.2}s` }}
                            >
                                <div className="dish-image">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        style={{ objectPosition: dish.objectPosition || 'center center' }}
                                    />
                                    <div className="dish-overlay">
                                        <div className="dish-info">
                                            <h4 className="dish-name">{dish.name}</h4>
                                            <p className="dish-desc">{dish.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swipe-indicator clickable" onClick={scrollRight}>
                        <ChevronRight size={32} strokeWidth={1.5} />
                    </div>
                </div>

                <div className="text-center mt-lg reveal">
                    <a href="#menu" className="btn-secondary">View Full Menu</a>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
