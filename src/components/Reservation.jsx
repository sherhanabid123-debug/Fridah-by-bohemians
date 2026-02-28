import './Reservation.css';
import resImage from '../assets/images/bar_area.jpg';

const Reservation = () => {
    return (
        <section id="reservation" className="reservation section-padding">
            <div className="container">
                <div className="reservation-card reveal">
                    <div className="reservation-content">
                        <h3 className="section-subtitle">Private Dining</h3>
                        <h2 className="section-title">Secure Your Table</h2>
                        <p className="reservation-text">
                            Join us for an unforgettable evening of culinary excellence. We recommend booking in advance to ensure your preferred time and space.
                        </p>
                        <div className="reservation-options">
                            <div className="res-info">
                                <span className="res-label">Phone</span>
                                <span className="res-value">+91 98866 53000</span>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/919886653000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary mt-md"
                            style={{ display: 'inline-block' }}
                        >
                            Request a Reservation
                        </a>
                    </div>
                    <div className="reservation-image">
                        <img src={resImage} alt="Private Dining" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
