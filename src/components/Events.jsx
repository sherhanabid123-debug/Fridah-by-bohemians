import './Events.css';
import { Music, Trophy, Mic2, Star } from 'lucide-react';

const eventItems = [
    {
        icon: <Music size={32} strokeWidth={1} />,
        title: 'Live Music',
        desc: 'Curated sets from Bengaluru\'s soulful acoustic artists and bands.'
    },
    {
        icon: <Trophy size={32} strokeWidth={1} />,
        title: 'Sports Screenings',
        desc: 'Big game energy in an immersive open-air stadium atmosphere.'
    },
    {
        icon: <Mic2 size={32} strokeWidth={1} />,
        title: 'Karaoke Nights',
        desc: 'Take the stage and sing your heart out in our vibrant community.'
    },
    {
        icon: <Star size={32} strokeWidth={1} />,
        title: 'Special Evenings',
        desc: 'From curated festivals to exclusive themed nightlife events.'
    }
];

const Events = () => {
    return (
        <section id="events" className="events-section section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">
                        <span className="mask-reveal"><span>Experience Fridah</span></span>
                    </h3>
                    <h2 className="section-title">
                        <span className="mask-reveal"><span>Experiences at Fridah</span></span>
                    </h2>
                    <p className="pkg-intro">
                        From live performances to vibrant evenings, every visit offers something unique.
                    </p>
                </div>

                <div className="events-grid">
                    {eventItems.map((item, index) => (
                        <div key={index} className="event-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <div className="event-icon">
                                {item.icon}
                            </div>
                            <h4 className="event-item-title">{item.title}</h4>
                            <p className="event-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
