import './ExperienceZones.css';
import { ArrowRight } from 'lucide-react';
import imgEntry from '../assets/images/alleyway.jpg'; 
import imgZen from '../assets/images/outdoor_seating.jpg';    
import imgBar from '../assets/images/bar_area.jpg';    
import imgParty from '../assets/images/lux interior.jpg'; 

const zones = [
    {
        id: 'enchanted-way',
        title: 'The Enchanted Way',
        desc: 'Begin your journey through our glass-roofed passage, where nature and architecture elegantly intertwine.',
        image: imgEntry,
        cta: 'Explore Space',
        theme: 'dark'
    },
    {
        id: 'zen-garden',
        title: 'Zen Garden',
        desc: 'A tranquil sanctuary bathed in natural light, perfect for intimate gatherings and curated daytime events.',
        image: imgZen,
        cta: 'Book This Area',
        theme: 'light'
    },
    {
        id: 'dalis-bar',
        title: "Dali's Bar",
        desc: 'Surrealism meets mixology. Discover our vibrant nightlife wrapped in warm, bohemian interiors.',
        image: imgBar,
        cta: 'Explore Drinks',
        theme: 'dark'
    },
    {
        id: 'kobuci-kert',
        title: 'Kobuci Kert',
        desc: 'Our expansive open-air celebration space, featuring live music, concerts, and unforgettable nights.',
        image: imgParty,
        cta: 'Host an Event',
        theme: 'light'
    }
];

const ExperienceZones = () => {
    return (
        <section className="immersive-zones">
            {zones.map((zone, index) => (
                <div id={zone.id} key={zone.id} className={`immersive-zone theme-${zone.theme}`} style={{ zIndex: index + 1 }}>
                    <div className="zone-media">
                        <div className="zone-media-overlay"></div>
                        <img src={zone.image} alt={zone.title} />
                    </div>
                    <div className="zone-content container">
                        <div className="zone-text-box reveal">
                            <h2 className="zone-title">{zone.title}</h2>
                            <p className="zone-desc">{zone.desc}</p>
                            <a href="#reservation" className="btn-primary zone-cta">
                                {zone.cta} <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ExperienceZones;
