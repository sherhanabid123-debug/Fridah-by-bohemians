import { ChevronRight } from 'lucide-react';
import './Gallery.css';
import img1 from '../assets/images/outdoor_seating.jpg';
import img2 from '../assets/images/alleyway.jpg';
import img3 from '../assets/images/hero_dining.jpg';
import img4 from '../assets/images/bar_area.jpg';
import img5 from '../assets/images/experience_balcony.jpg';
import img6 from '../assets/images/entrance.jpg';

const galleryImages = [img3, img2, img4, img5, img1, img6];

const Gallery = () => {
    return (
        <section id="gallery" className="gallery section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">Visual Journey</h3>
                    <h2 className="section-title">The Fridah Aesthetic</h2>
                </div>
            </div>

            <div className="carousel-wrapper">
                <div className="gallery-grid">
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
                <div className="swipe-indicator">
                    <ChevronRight size={32} strokeWidth={1.5} />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
