import { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Gallery.css';
import img1 from '../assets/images/outdoor_seating.jpg';
import img2 from '../assets/images/alleyway.jpg';
import img3 from '../assets/images/hero_dining.jpg';
import img4 from '../assets/images/bar_area.jpg';
import img5 from '../assets/images/experience_balcony.jpg';
import img6 from '../assets/images/entrance.jpg';

const galleryImages = [img3, img2, img4, img5, img1, img6];

const Gallery = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            setTimeout(checkScroll, 100);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstItem = container.firstElementChild;
            if (!firstItem) return;

            const itemWidth = firstItem.offsetWidth;
            const gap = parseInt(window.getComputedStyle(container).gap) || 0;
            const totalWidth = itemWidth + gap;

            const currentIndex = Math.round(container.scrollLeft / totalWidth);
            let targetIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

            targetIndex = Math.max(0, Math.min(targetIndex, galleryImages.length - 1));

            container.scrollTo({
                left: targetIndex * totalWidth,
                behavior: 'smooth'
            });

            setCanScrollLeft(targetIndex > 0);
            setCanScrollRight(targetIndex < galleryImages.length - 1);
        }
    };

    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">Visual Journey</h3>
                    <h2 className="section-title">The Fridah Aesthetic</h2>
                </div>
            </div>

            <div className="carousel-wrapper">
                <div
                    className={`swipe-indicator left clickable ${canScrollLeft ? 'visible' : 'hidden'}`}
                    onClick={() => scroll('left')}
                >
                    <ChevronLeft size={32} strokeWidth={1.5} />
                </div>
                <div className="gallery-grid" ref={scrollContainerRef}>
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="gallery-item reveal"
                            style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                        >
                            <img src={src} alt={`Fridah Gallery Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div
                    className={`swipe-indicator right clickable ${canScrollRight ? 'visible' : 'hidden'}`}
                    onClick={() => scroll('right')}
                >
                    <ChevronRight size={32} strokeWidth={1.5} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
