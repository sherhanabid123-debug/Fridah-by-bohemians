import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#dishes" onClick={toggleMenu}>Dishes</a></li>
                        <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
                        <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
                    </ul>
                    <div className="header-actions">
                        <a href="#order" className="nav-cta-solid" onClick={toggleMenu}>Order Now</a>
                        <a href="#reservation" className="nav-cta" onClick={toggleMenu}>Reservations</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
