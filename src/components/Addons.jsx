import './Packages.css';

const addons = [
    { name: 'Live Pasta Station', price: '₹499 / person' },
    { name: 'Artisan Carving Station', price: '₹799 / person' },
    { name: 'Bespoke Dessert Bar', price: '₹399 / person' },
    { name: 'Private Mixologist', price: 'On Request' }
];

const Addons = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-black)' }}>
            <div className="container reveal">
                <div className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                    <h3 className="section-subtitle">
                        <span>Enhance Your Experience</span>
                    </h3>
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
