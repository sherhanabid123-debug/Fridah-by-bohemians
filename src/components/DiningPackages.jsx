import './Packages.css';
import { useState } from 'react';
import FullMenuModal from './FullMenuModal';

const diningPackages = [
    {
        tier: 'Silver Experience',
        price: '₹1290',
        highlights: ['Welcome Drink', 'Assorted Starters', 'Artisan Main Course', 'Signature Dessert']
    },
    {
        tier: 'Gold Experience',
        price: '₹1554',
        highlights: ['Premium Welcome Drink', 'Expanded Starters', 'Chef\'s Special Mains', 'Gourmet Desserts']
    },
    {
        tier: 'Platinum Experience',
        price: '₹1887',
        highlights: ['Signature Cocktails', 'Unlimited Starters', 'Global Cuisine Mains', 'Decadent Spread']
    },
    {
        tier: 'Super Platinum',
        subtitle: 'Pan Asian Focus',
        price: '₹2799',
        highlights: ['Exclusive Spirits', 'Sushi & Dimsum Platter', 'Premium Asian Mains', 'Artisanal Desserts'],
        featured: true
    }
];

const DiningPackages = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section id="celebrate" className="packages-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Event Experiences</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Celebrate With Us</span></span>
                    </h2>
                    <p className="pkg-intro">
                        Curated dining and beverage experiences designed for group celebrations and special occasions.
                    </p>
                </div>

                <div className="packages-grid">
                    {diningPackages.map((pkg, index) => (
                        <div key={index} className={`package-card reveal ${pkg.featured ? 'featured' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                            {pkg.featured && <div className="package-badge">Most Exclusive</div>}
                            <h4 className="package-tier">{pkg.tier}</h4>
                            {pkg.subtitle && <p className="package-subtitle">{pkg.subtitle}</p>}
                            <div className="package-price">{pkg.price}</div>
                            
                            <ul className="package-highlights">
                                {pkg.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            
                            <a href="#reservation" className="btn-secondary package-btn">Book Experience</a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-lg reveal">
                    <p className="pkg-intro" style={{ marginTop: '0', opacity: '0.6', fontSize: '0.9rem' }}>
                        Available for private events, group bookings, and celebrations.
                    </p>
                    <button className="btn-primary mt-md" onClick={() => setIsMenuOpen(true)}>View Full Menu</button>
                </div>
            </div>
            
            <FullMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </section>
    );
};

export default DiningPackages;
