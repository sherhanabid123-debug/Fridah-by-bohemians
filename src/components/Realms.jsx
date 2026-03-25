import { ArrowDownRight } from 'lucide-react';
import './Realms.css';

import imgEntry from '../assets/images/alleyway.jpg'; 
import imgZen from '../assets/images/outdoor_seating.jpg';    
import imgBar from '../assets/images/bar_area.jpg';    
import imgParty from '../assets/images/lux interior.jpg';

const realmsData = [
    {
        id: 'enchanted-way',
        title: 'Enchanted Way',
        desc: 'Nature and architecture in harmony.',
        image: imgEntry
    },
    {
        id: 'zen-garden',
        title: 'Zen Garden',
        desc: 'Calm, nature, and curated events.',
        image: imgZen
    },

    {
        id: 'dalis-bar',
        title: "Dali's Bar",
        desc: 'Craft cocktails and vibrant nightlife.',
        image: imgBar
    },
    {
        id: 'kobuci-kert',
        title: 'Kobuci Kert',
        desc: 'Open-air celebrations and live music.',
        image: imgParty
    }
];

const Realms = () => {
    return (
        <section id="realms" className="realms-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>A Collection of Experiences</span></span>
                    </h3>
                    <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                        <span className="mask-reveal"><span>Step Into Different Realms</span></span>
                    </h2>
                </div>

                <div className="realms-grid">
                    {realmsData.map((realm, index) => (
                        <a 
                            href={`#${realm.id}`} 
                            key={realm.id} 
                            className="realm-card reveal"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="realm-image">
                                <img src={realm.image} alt={realm.title} />
                                <div className="realm-overlay"></div>
                            </div>
                            <div className="realm-content">
                                <div className="realm-text">
                                    <h4 className="realm-title">{realm.title}</h4>
                                    <p className="realm-desc">{realm.desc}</p>
                                </div>
                                <div className="realm-arrow">
                                    <ArrowDownRight size={24} strokeWidth={1} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Realms;
