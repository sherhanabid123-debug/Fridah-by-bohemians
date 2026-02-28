import './LocationMap.css';

const LocationMap = () => {
    const address = "Plot # 21A, opposite Metro Pillar #243, Hoodi, Whitefield, Bengaluru, 560037";
    // Hoodi Junction / Pillar 243 coordinates for a precise red pin
    const lat = 12.9935;
    const lng = 77.7088;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    // Reliable free embed URL with the address for a guaranteed pin
    const freeMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="location-map section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h3 className="section-subtitle">Find Us</h3>
                    <h2 className="section-title">Visit Fridah</h2>
                </div>

                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="map-card reveal" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                    <div className="map-info">
                        <div className="info-item">
                            <span className="info-label">Address</span>
                            <p className="info-value">Plot # 21A, opposite Metro Pillar #243,<br />Hoodi, Whitefield, Bengaluru, 560037</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Hours</span>
                            <p className="info-value">Mon - Sun: 12:00 PM - 1:00 AM</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Call Us</span>
                            <p className="info-value">+91 98866 53000</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Direction</span>
                            <span className="btn-secondary" style={{ display: 'inline-block', width: 'fit-content' }}>Open in Google Maps</span>
                        </div>
                    </div>
                    <div className="map-embed-container" style={{ flex: 1.5, position: 'relative' }}>
                        <div className="map-embed">
                            <iframe
                                src={freeMapUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0, pointerEvents: 'none' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Fridah Location"
                            ></iframe>
                            <div className="map-click-overlay">
                                <span>Click to Open in Maps</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default LocationMap;
