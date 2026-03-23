import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useMagnetic } from '../hooks/useMagnetic';
import './MenuPreview.css';
import FullMenuModal from './FullMenuModal';

import imgSushi from '../assets/images/food_sushi.jpg';
import imgZen from '../assets/images/outdoor_seating.jpg';
import imgDrink from '../assets/images/food_drink.jpg';
import imgSpread from '../assets/images/food_spread.jpg';
import imgAlleyway from '../assets/images/alleyway.jpg';
import imgBar from '../assets/images/bar_area.jpg';

const menuData = {
    starters: [
        { name: 'Crispy Lotus Stem Crisps', desc: 'Tossed in sweet chili and sesame glaze', price: '₹495', image: imgSushi },
        { name: 'Vegan Stir Fry Of Broccoli', desc: 'Broccoli, mushrooms, edamame, garlic soy', price: '₹545', image: imgZen },
        { name: 'Truffle Edamame Dumplings', desc: 'Steamed with an aromatic truffle broth', price: '₹595', image: imgDrink },
    ],
    mains: [
        { name: 'Chicken Red Rice Risotto', desc: 'Slow-cooked organic red rice with tender chicken', price: '₹795', image: imgSpread },
        { name: 'Thyme Grilled Salmon', desc: 'Norwegian salmon, burnt butter asparagus', price: '₹1295', image: imgAlleyway },
        { name: 'Mediterranean Lamb Chops', desc: 'Char-grilled with mint tzatziki and couscous', price: '₹1495', image: imgBar },
    ]
};

const MenuPreview = () => {
    const magneticMenuRef = useMagnetic();
    const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
    
    // Floating Reveal State
    const [hoveredImage, setHoveredImage] = useState(null);
    const revealRef = useRef(null);

    useEffect(() => {
        if (!revealRef.current) return;
        
        // Ensure reveal is hidden on initial mount
        gsap.set(revealRef.current, { scale: 0.8, autoAlpha: 0 });

        const xTo = gsap.quickTo(revealRef.current, 'x', {duration: 0.4, ease: 'power3.out'});
        const yTo = gsap.quickTo(revealRef.current, 'y', {duration: 0.4, ease: 'power3.out'});
        
        // Read native mouse coordinates relative to viewport
        const moveImage = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };
        
        if (hoveredImage) {
            window.addEventListener('mousemove', moveImage);
            gsap.to(revealRef.current, { scale: 1, autoAlpha: 1, duration: 0.3, ease: "power2.out" });
        } else {
            gsap.to(revealRef.current, { scale: 0.8, autoAlpha: 0, duration: 0.3, ease: "power2.in" });
        }

        return () => window.removeEventListener('mousemove', moveImage);
    }, [hoveredImage]);

    return (
        <section id="menu" className="menu-preview section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Discover Our Flavors</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>A Curated Menu</span></span>
                    </h2>
                </div>

                <div className="menu-container">
                    <div className="menu-category reveal">
                        <h4 className="category-title">Small Plates</h4>
                        <ul className="menu-list">
                            {menuData.starters.map((item, index) => (
                                <li 
                                    key={index} 
                                    className="menu-item"
                                    onMouseEnter={() => setHoveredImage(item.image)}
                                    onMouseLeave={() => setHoveredImage(null)}
                                >
                                    <div className="menu-item-header">
                                        <span className="menu-item-name">{item.name}</span>
                                        <span className="menu-item-dots"></span>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="menu-category reveal" style={{ transitionDelay: '0.2s' }}>
                        <h4 className="category-title">Large Plates</h4>
                        <ul className="menu-list">
                            {menuData.mains.map((item, index) => (
                                <li 
                                    key={index} 
                                    className="menu-item"
                                    onMouseEnter={() => setHoveredImage(item.image)}
                                    onMouseLeave={() => setHoveredImage(null)}
                                >
                                    <div className="menu-item-header">
                                        <span className="menu-item-name">{item.name}</span>
                                        <span className="menu-item-dots"></span>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-lg reveal">
                    <a href="#full-menu" ref={magneticMenuRef} className="btn-primary" onClick={(e) => { e.preventDefault(); setIsFullMenuOpen(true); }}>View Full Menu</a>
                </div>
            </div>
            
            {/* The Floating Image Portlet */}
            <div className="menu-hover-reveal" ref={revealRef}>
                 <img src={hoveredImage || ''} alt="" />
            </div>

            <FullMenuModal isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
        </section>
    );
};

export default MenuPreview;
