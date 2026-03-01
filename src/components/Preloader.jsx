import { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onLoadingComplete }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
    const brandName = "FRIDAH";

    useEffect(() => {
        // Start the text animation shortly after mount
        const animationTimer = setTimeout(() => {
            setStartAnimation(true);
        }, 300);

        // Define total loading time (allows animations to finish)
        const loadingTimer = setTimeout(() => {
            setIsLoaded(true);

            // Notify parent component after fade out transition completes
            setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 1500); // Matches CSS transition time

        }, 3000); // 3 seconds total preloader screen time

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(loadingTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className={`preloader ${isLoaded ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-logo">
                    {brandName.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`preloader-char ${startAnimation ? 'animate' : ''}`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                paddingRight: char === ' ' ? '10px' : '0'
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </div>
                <div className={`preloader-line ${startAnimation ? 'animate' : ''}`}></div>
            </div>
        </div>
    );
};

export default Preloader;
