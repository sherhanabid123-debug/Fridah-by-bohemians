import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events.css';
import { Music, Trophy, Mic2, Star } from 'lucide-react';

const eventItems = [
    {
        icon: <Music size={32} strokeWidth={1} />,
        title: 'Live Music',
        desc: 'Evenings brought alive with live performances and energy.'
    },
    {
        icon: <Trophy size={32} strokeWidth={1} />,
        title: 'Sports Screenings',
        desc: 'Catch every big game and moment live on the big screen.'
    },
    {
        icon: <Mic2 size={32} strokeWidth={1} />,
        title: 'Karaoke Nights',
        desc: 'Step up, grab the mic, and own the stage.'
    },
    {
        icon: <Star size={32} strokeWidth={1} />,
        title: 'Special Evenings',
        desc: 'Unique curated experiences designed for every visit.'
    }
];

const Events = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to('.events-grid', {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: sectionRef });

    return (
        <section id="events" className="events-section section-padding" ref={sectionRef}>
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
