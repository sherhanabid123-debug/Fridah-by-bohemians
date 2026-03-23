import './Packages.css';

const liquorPackages = [
    {
        tier: 'Regular',
        price: 'Upon Request',
        highlights: ['House Pour Spirits', 'Classic Mixers', 'Selected Beers', 'Standard Cocktails']
    },
    {
        tier: 'Premium',
        price: 'Upon Request',
        highlights: ['Premium Spirits', 'Signature Mixers', 'Imported Beers', 'Craft Cocktails'],
        featured: true
    },
    {
        tier: 'Super Premium',
        price: 'Upon Request',
        highlights: ['Top Shelf Liquors', 'Artisanal Mixers', 'Premium Wines', 'Bespoke Cocktails']
    }
];

const LiquorPackages = () => {
    return (
        <section id="liquor" className="packages-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Spirits & Mixology</span></span>
                    </h2>
                    <p className="pkg-intro">
                        Curated beverage packages designed to complement your dining and elevate your celebrations.
                    </p>
                </div>

                <div className="packages-grid three-col">
                    {liquorPackages.map((pkg, index) => (
                        <div key={index} className={`package-card reveal ${pkg.featured ? 'featured' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                            {pkg.featured && <div className="package-badge">Recommended</div>}
                            <h4 className="package-tier">{pkg.tier}</h4>
                            <div className="package-price">{pkg.price}</div>
                            
                            <ul className="package-highlights">
                                {pkg.highlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            
                            <a href="#reservation" className="btn-secondary package-btn">Inquire Now</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiquorPackages;
