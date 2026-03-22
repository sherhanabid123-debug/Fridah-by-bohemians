import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './SignatureDishes.css';
import FullMenuModal from './FullMenuModal';

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
    const magneticMenuRef = useMagnetic();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            // Use a very small buffer (1px) for precision
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Initial check
            setTimeout(checkScroll, 100);
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

            const currentIndex = Math.round(container.scrollLeft / totalWidth);
            let targetIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

            // Clamp target index
            targetIndex = Math.max(0, Math.min(targetIndex, dishes.length - 1));

            container.scrollTo({
                left: targetIndex * totalWidth,
                behavior: 'smooth'
            });

            // Proactively update arrows based on target
            setCanScrollLeft(targetIndex > 0);
            setCanScrollRight(targetIndex < dishes.length - 1);
        }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <section id="dishes" className="signature-dishes section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Culinary Masterpieces</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Signature Dishes</span></span>
                    </h2>
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
                                <div className="dish-image" onMouseMove={handleMouseMove}>
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
                    <a href="#full-menu" ref={magneticMenuRef} className="btn-secondary" onClick={(e) => { e.preventDefault(); setIsFullMenuOpen(true); }}>View Full Menu</a>
                </div>
            </div>
            <FullMenuModal isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
        </section>
    );
};

export default SignatureDishes;
