import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container reveal">
                <div className="footer-brand">
                    <h2 className="footer-logo">Fridah</h2>
                    <p className="footer-tagline">By Bohemians</p>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/house_of_fridah/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div className="footer-info">
                    <div className="footer-section">
                        <h4 className="footer-title">Location</h4>
                        <p>Plot # 21A, opposite Metro Pillar #243</p>
                        <p>Hoodi, Whitefield, Bengaluru</p>
                        <p>Karnataka 560037</p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Hours</h4>
                        <p>Mon - Sun: 12:00 PM - 1:00 AM</p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact</h4>
                        <p>+91 98866 53000</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Fridah by Bohemians. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
