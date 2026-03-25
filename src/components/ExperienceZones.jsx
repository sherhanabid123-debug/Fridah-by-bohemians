import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        desc: 'Nature and architecture elegantly intertwine in our glass-roofed signature passage.',
        image: imgEntry,
        cta: 'Explore Space',
        theme: 'dark'
    },
    {
        id: 'zen-garden',
        title: 'Zen Garden',
        desc: 'A tranquil sanctuary bathed in natural light, perfect for intimate gatherings.',
        image: imgZen,
        cta: 'Book This Area',
        theme: 'light'
    },
    {
        id: 'dalis-bar',
        title: "Dali's Bar",
        desc: 'Surrealism meets mixology in a space defined by vibrant bohemian energy.',
        image: imgBar,
        cta: 'Explore Drinks',
        theme: 'dark'
    },
    {
        id: 'kobuci-kert',
        title: 'Kobuci Kert',
        desc: 'Our expansive open-air destination for live music, concerts, and legendary nights.',
        image: imgParty,
        cta: 'Host an Event',
        theme: 'light'
    }
];

gsap.registerPlugin(ScrollTrigger);

const ExperienceZones = () => {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        const zonesEls = gsap.utils.toArray('.immersive-zone');
        let mm = gsap.matchMedia();

        mm.add("(min-width: 993px)", () => {
            // Horizontal scroll container logic
            let scrollTween = gsap.to(zonesEls, {
                xPercent: -100 * (zonesEls.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1, 
                    // Make the scroll distance longer than the width to slow it down and add dwell time
                    end: () => "+=" + (wrapperRef.current.offsetWidth * 1.5),
                }
            });

            // Parallax and reveals inside each sliding zone
            zonesEls.forEach((zone, i) => {
                if (i > 0) { // First one is already on screen, no need to pan-in
                    const img = zone.querySelector('img');
                    gsap.from(img, {
                        xPercent: -30, // Starts offset for sliding window effect
                        ease: "none",
                        scrollTrigger: {
                            trigger: zone,
                            containerAnimation: scrollTween,
                            start: "left right",
                            end: "right right",
                            scrub: true,
                        }
                    });

                    const text = zone.querySelector('.zone-text-box');
                    gsap.from(text, {
                        y: 80,
                        opacity: 0,
                        filter: "blur(10px)",
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: zone,
                            containerAnimation: scrollTween,
                            start: "left 70%", // Trigger when text is 30% onto screen
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            });
        });

        // Mobile standard vertical logic (fall back nicely)
        mm.add("(max-width: 992px)", () => {
            zonesEls.forEach((zone) => {
                const text = zone.querySelector('.zone-text-box');
                gsap.from(text, {
                    y: 60,
                    opacity: 0,
                    filter: "blur(8px)",
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: zone,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });

    }, { scope: sectionRef });

    return (
        <section className="immersive-zones-container" ref={sectionRef}>
            <div className="immersive-zones-wrapper" ref={wrapperRef}>
                {zones.map((zone, index) => (
                    <div id={zone.id} key={zone.id} className={`immersive-zone theme-${zone.theme}`}>
                        <div className="zone-media">
                            <div className="zone-media-overlay"></div>
                            <img src={zone.image} alt={zone.title} />
                        </div>
                        <div className="zone-content container">
                            <div className="zone-text-box">
                                <h2 className="zone-title">{zone.title}</h2>
                                <p className="zone-desc">{zone.desc}</p>
                                <a href="#reservation" className="btn-primary zone-cta">
                                    {zone.cta} <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceZones;
