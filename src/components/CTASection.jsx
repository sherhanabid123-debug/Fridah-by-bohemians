import './CTASection.css';
import { CalendarRange, PhoneCall, PartyPopper } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="cta-section section-padding">
            <div className="cta-overlay"></div>
            <div className="container">
                <div className="cta-content reveal active">
                    <h2 className="cta-title">Plan your experience at Fridah</h2>
                    <p className="cta-subtitle">Secure your table, host an unforgettable event, or connect with our team.</p>
                    
                    <div className="cta-actions">
                        <a href="#reservation" className="btn-primary cta-btn">
                            <CalendarRange size={20} /> Book a Table
                        </a>
                        <a href="mailto:events@bohemians.in" className="btn-secondary cta-btn">
                            <PartyPopper size={20} /> Host an Event
                        </a>
                        <a href="tel:+919886653000" className="btn-secondary cta-btn">
                            <PhoneCall size={20} /> Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
