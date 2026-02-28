import { MoveRight } from 'lucide-react';
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
    return (
        <section id="dishes" className="signature-dishes section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">Culinary Masterpieces</h3>
                    <h2 className="section-title">Signature Dishes</h2>
                </div>

                <div className="swipe-indicator mobile-only reveal">
                    <span>Swipe</span>
                    <MoveRight size={16} strokeWidth={1.5} />
                </div>

                <div className="dishes-grid">
                    {dishes.map((dish, index) => (
                        <div
                            key={dish.id}
                            className={`dish-card reveal`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="dish-image">
                                <img src={dish.image} alt={dish.name} />
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

                <div className="text-center mt-lg reveal">
                    <a href="#menu" className="btn-secondary">View Full Menu</a>
                </div>
            </div>
        </section>
    );
};

export default SignatureDishes;
