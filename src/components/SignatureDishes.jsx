import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Initial check
            checkScroll();
            // Check on resize
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstItem = container.firstElementChild;
            if (!firstItem) return;

            const itemWidth = firstItem.offsetWidth;
            const gap = parseInt(window.getComputedStyle(container).gap) || 0;
            const totalWidth = itemWidth + gap;

            // Calculate current index based on scroll position
            const currentIndex = Math.round(container.scrollLeft / totalWidth);
            const targetIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

            container.scrollTo({
                left: targetIndex * totalWidth,
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
                    <div
                        className={`swipe-indicator left clickable ${canScrollLeft ? 'visible' : 'hidden'}`}
                        onClick={() => scroll('left')}
                    >
                        <ChevronLeft size={32} strokeWidth={1.5} />
                    </div>
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
                    <div
                        className={`swipe-indicator right clickable ${canScrollRight ? 'visible' : 'hidden'}`}
                        onClick={() => scroll('right')}
                    >
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
