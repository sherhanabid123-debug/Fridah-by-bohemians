import './Packages.css';

const addons = [
    { name: 'Live Pasta Station', price: '₹499 / person' },
    { name: 'Artisan Carving Station', price: '₹799 / person' },
    { name: 'Bespoke Dessert Bar', price: '₹399 / person' },
    { name: 'Private Mixologist', price: 'On Request' }
];

const Addons = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-black)', paddingTop: '2rem' }}>
            <div className="container reveal">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Step 3</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Enhance Your Experience</span></span>
                    </h2>
                    <p className="pkg-intro">
                        Add personalized touches to your dining experience with curated add-ons designed for special occasions. <br />
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-gold)', opacity: 0.8, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1rem', display: 'block' }}>
                            Available as an upgrade to curated dining experiences.
                        </span>
                    </p>
                </div>
                
                <div className="packages-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: 0 }}>
                    {addons.map((addon, index) => (
                        <div key={index} className="package-card reveal" style={{ padding: '1.5rem', transitionDelay: `${index * 0.1}s` }}>
                            <h4 className="package-tier" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{addon.name}</h4>
                            <div className="package-price" style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-white)' }}>{addon.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Addons;
