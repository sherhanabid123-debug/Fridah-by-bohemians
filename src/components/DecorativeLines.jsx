import './DecorativeLines.css';

const DecorativeLines = ({ type = 'horizontal' }) => {
    return (
        <div className={`decorative-svg ${type} reveal`}>
            <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="0.5"
                    className="draw-path"
                />
            </svg>
        </div>
    );
};

export default DecorativeLines;
