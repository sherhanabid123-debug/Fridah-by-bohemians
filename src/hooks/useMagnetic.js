import { useEffect, useRef } from 'react';

export const useMagnetic = () => {
    const magneticRef = useRef(null);

    useEffect(() => {
        const element = magneticRef.current;
        if (!element) return;

        const moveElement = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = element.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            // Subtle pull: max 12px
            const strength = 12;
            const x = (distanceX / width) * strength;
            const y = (distanceY / height) * strength;

            element.style.transform = `translate(${x}px, ${y}px)`;
        };

        const resetElement = () => {
            element.style.transform = `translate(0px, 0px)`;
        };

        element.addEventListener('mousemove', moveElement);
        element.addEventListener('mouseleave', resetElement);

        return () => {
            element.removeEventListener('mousemove', moveElement);
            element.removeEventListener('mouseleave', resetElement);
        };
    }, []);

    return magneticRef;
};
