import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <a href="#">FRIDAH</a>
                </div>

                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#dishes">Dishes</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#reservation" className="nav-cta">Reservations</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
