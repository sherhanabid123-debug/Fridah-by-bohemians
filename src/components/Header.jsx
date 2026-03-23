import { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Header.css';
import OrderModal from './OrderModal';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const magAbout = useMagnetic();
    const magDishes = useMagnetic();
    const magMenu = useMagnetic();
    const magGallery = useMagnetic();
    const magOrder = useMagnetic();
    const magRes = useMagnetic();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Intersection Observer for active section
        const sectionIds = ['enchanted-way', 'dining', 'liquor', 'reservation'];
        const observers = [];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#">FRIDAH</a>
                </div>

                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li>
                            <a 
                                href="#enchanted-way" 
                                ref={magAbout} 
                                onClick={toggleMenu}
                                className={activeSection === 'enchanted-way' ? 'active' : ''}
                            >
                                Realms
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#dining" 
                                ref={magDishes} 
                                onClick={toggleMenu}
                                className={activeSection === 'dining' ? 'active' : ''}
                            >
                                Dining
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#liquor" 
                                ref={magMenu} 
                                onClick={toggleMenu}
                                className={activeSection === 'liquor' ? 'active' : ''}
                            >
                                Spirits
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#reservation" 
                                ref={magGallery} 
                                onClick={toggleMenu}
                                className={activeSection === 'reservation' ? 'active' : ''}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="header-actions">
                        <a 
                            href="#order" 
                            ref={magOrder} 
                            className="nav-cta-solid" 
                            onClick={(e) => {
                                e.preventDefault();
                                if (isMobileMenuOpen) toggleMenu();
                                setIsOrderModalOpen(true);
                            }}
                        >
                            Order Now
                        </a>
                        <a href="#reservation" ref={magRes} className="nav-cta" onClick={toggleMenu}>Reservations</a>
                    </div>
                </nav>
            </div>
            <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
        </header>
    );
};

export default Header;
