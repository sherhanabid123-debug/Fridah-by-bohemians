import { useState } from 'react';
import DiningPackages from './DiningPackages';
import LiquorPackages from './LiquorPackages';
import Addons from './Addons';
import './Celebrate.css';

const Celebrate = () => {
    const [activeTab, setActiveTab] = useState('dining'); // 'dining' or 'liquor'

    return (
        <section id="celebrate" className="celebrate-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Special Occasions</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Celebrate With Us</span></span>
                    </h2>
                    <p className="pkg-intro">
                        Curated dining and beverage experiences designed for unforgettable celebrations.
                    </p>
                </div>

                <div className="celebrate-tabs-container reveal">
                    <div className="celebrate-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'dining' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dining')}
                        >
                            Dining Packages
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'liquor' ? 'active' : ''}`}
                            onClick={() => setActiveTab('liquor')}
                        >
                            Liquor Packages
                        </button>
                    </div>
                </div>

                <div className="celebrate-content reveal">
                    {activeTab === 'dining' ? (
                        <div className="tab-pane active">
                            <DiningPackages hideHeader={true} />
                        </div>
                    ) : (
                        <div className="tab-pane active">
                            <LiquorPackages hideHeader={true} />
                        </div>
                    )}
                </div>

                <Addons />
            </div>
        </section>
    );
};

export default Celebrate;
