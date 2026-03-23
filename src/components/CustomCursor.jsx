import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorInner = useRef(null);
    const cursorOuter = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Only run on desktop where native cursor can be hidden
        const checkForDesktop = () => setIsDesktop(window.innerWidth > 992);
        checkForDesktop();
        window.addEventListener('resize', checkForDesktop);
        
        if (!isDesktop) return;

        // Highest performance pointer tracking using GSAP quickTo
        const xToOuter = gsap.quickTo(cursorOuter.current, 'x', {duration: 0.4, ease: 'power3.out'});
        const yToOuter = gsap.quickTo(cursorOuter.current, 'y', {duration: 0.4, ease: 'power3.out'});
        
        const xToInner = gsap.quickTo(cursorInner.current, 'x', {duration: 0.1, ease: 'power3.out'});
        const yToInner = gsap.quickTo(cursorInner.current, 'y', {duration: 0.1, ease: 'power3.out'});

        const moveCursor = (e) => {
            xToOuter(e.clientX);
            yToOuter(e.clientY);
            xToInner(e.clientX);
            yToInner(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a') || target.closest('button') || target.closest('.clickable');
            const isDraggable = target.closest('.dishes-grid');

            if (isClickable && !isDraggable) {
                setIsHovering(true);
            } else if (isDraggable) {
                setIsDragging(true);
            }
        };

        const handleMouseOut = (e) => {
            const target = e.target;
            const isClickable = target.closest('a') || target.closest('button') || target.closest('.clickable');
            const isDraggable = target.closest('.dishes-grid');

            if (isClickable && !isDraggable) {
                setIsHovering(false);
            } else if (isDraggable) {
                setIsDragging(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', checkForDesktop);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <>
            <div ref={cursorOuter} className={`custom-cursor-outer ${isHovering ? 'hover' : ''} ${isDragging ? 'drag' : ''}`}>
                <span className="cursor-text">DRAG</span>
            </div>
            <div ref={cursorInner} className={`custom-cursor-inner ${isHovering || isDragging ? 'hidden' : ''}`}></div>
        </>
    );
};

export default CustomCursor;
