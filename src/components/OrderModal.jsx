import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SiZomato, SiSwiggy } from 'react-icons/si';
import './OrderModal.css';

const OrderModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="order-modal-overlay" onClick={onClose}>
            <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="order-modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} strokeWidth={1.5} />
                </button>
                <h3 className="order-modal-title">Order & Reserve</h3>
                <p className="order-modal-subtitle">Choose your preferred platform</p>
                
                <div className="order-modal-options">
                    <a 
                        href="https://www.zomato.com/bangalore/fridah-by-bohemians-mahadevapura-bangalore" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="order-modal-btn"
                        onClick={onClose}
                    >
                        <span className="platform-icon"><SiZomato size={24} /></span>
                        <span className="platform-name">Order on Zomato</span>
                    </a>
                    
                    <a 
                        href="https://www.swiggy.com/restaurants/fridah-by-bohemians-whitefield-bangalore-1344106/dineout" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="order-modal-btn"
                        onClick={onClose}
                    >
                        <span className="platform-icon"><SiSwiggy size={24} /></span>
                        <span className="platform-name">Book on Swiggy</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
