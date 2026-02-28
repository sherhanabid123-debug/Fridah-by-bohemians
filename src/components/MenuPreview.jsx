import { useMagnetic } from '../hooks/useMagnetic';
import './MenuPreview.css';

const menuData = {
    starters: [
        { name: 'Crispy Lotus Stem Crisps', desc: 'Tossed in sweet chili and sesame glaze', price: '₹495' },
        { name: 'Vegan Stir Fry Of Broccoli', desc: 'Broccoli, mushrooms, edamame, garlic soy', price: '₹545' },
        { name: 'Truffle Edamame Dumplings', desc: 'Steamed with an aromatic truffle broth', price: '₹595' },
    ],
    mains: [
        { name: 'Chicken Red Rice Risotto', desc: 'Slow-cooked organic red rice with tender chicken', price: '₹795' },
        { name: 'Thyme Grilled Salmon', desc: 'Norwegian salmon, burnt butter asparagus', price: '₹1295' },
        { name: 'Mediterranean Lamb Chops', desc: 'Char-grilled with mint tzatziki and couscous', price: '₹1495' },
    ]
};

const MenuPreview = () => {
    const magneticMenuRef = useMagnetic();

    return (
        <section id="menu" className="menu-preview section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Discover Our Flavors</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>A Curated Menu</span></span>
                    </h2>
                </div>

                <div className="menu-container">
                    <div className="menu-category reveal">
                        <h4 className="category-title">Small Plates</h4>
                        <ul className="menu-list">
                            {menuData.starters.map((item, index) => (
                                <li key={index} className="menu-item">
                                    <div className="menu-item-header">
                                        <span className="menu-item-name">{item.name}</span>
                                        <span className="menu-item-dots"></span>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="menu-category reveal" style={{ transitionDelay: '0.2s' }}>
                        <h4 className="category-title">Large Plates</h4>
                        <ul className="menu-list">
                            {menuData.mains.map((item, index) => (
                                <li key={index} className="menu-item">
                                    <div className="menu-item-header">
                                        <span className="menu-item-name">{item.name}</span>
                                        <span className="menu-item-dots"></span>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-lg reveal">
                    <a href="#" ref={magneticMenuRef} className="btn-primary">Download Full Menu</a>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
