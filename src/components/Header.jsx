import { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Header.css';
import OrderModal from './OrderModal';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
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
                        <li><a href="#enchanted-way" ref={magAbout} onClick={toggleMenu}>Realms</a></li>
                        <li><a href="#dining" ref={magDishes} onClick={toggleMenu}>Dining</a></li>
                        <li><a href="#liquor" ref={magMenu} onClick={toggleMenu}>Spirits</a></li>
                        <li><a href="#reservation" ref={magGallery} onClick={toggleMenu}>Contact</a></li>
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
