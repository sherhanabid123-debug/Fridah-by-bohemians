import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import './FullMenuModal.css';
import { fullMenu } from '../data/menuData';

const FullMenuModal = ({ isOpen, onClose }) => {
    const sectionRefs = useRef([]);
    const [activeTab, setActiveTab] = useState('food'); // 'food' or 'beverage'

    // First 9 items are food, rest are beverages
    const currentMenu = activeTab === 'food' ? fullMenu.slice(0, 9) : fullMenu.slice(9);

    const scrollToSection = (index) => {
        if (sectionRefs.current[index]) {
            sectionRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

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
        <div className="full-menu-overlay" onClick={onClose}>
            <div className="full-menu-content" onClick={(e) => e.stopPropagation()}>
                <div className="full-menu-header">
                    <h2 className="full-menu-title">Fridah Menu</h2>
                    
                    <div className="main-category-tabs">
                        <button 
                            className={`main-tab ${activeTab === 'food' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('food'); sectionRefs.current = []; }}
                        >
                            Food
                        </button>
                        <button 
                            className={`main-tab ${activeTab === 'beverage' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('beverage'); sectionRefs.current = []; }}
                        >
                            Beverages
                        </button>
                    </div>

                    <button className="full-menu-close" onClick={onClose} aria-label="Close menu">
                        <X size={28} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="menu-categories-nav" data-lenis-prevent>
                    {currentMenu.map((section, idx) => (
                        <button 
                            key={idx} 
                            className="menu-category-pill"
                            onClick={() => scrollToSection(idx)}
                        >
                            {section.category.split(' (')[0]}
                        </button>
                    ))}
                </div>
                
                <div className="full-menu-body" data-lenis-prevent>
                    {currentMenu.map((section, idx) => (
                        <div 
                            key={idx} 
                            className="menu-table-section"
                            ref={el => sectionRefs.current[idx] = el}
                        >
                            <h3 className="menu-table-category">{section.category}</h3>
                            <div className="table-responsive">
                                <table className="menu-table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th className="hide-mobile">Description</th>
                                            <th className="text-right">Price (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.items.map((item, iOffset) => (
                                            <tr key={iOffset}>
                                                <td className="item-name">
                                                    {item.item}
                                                    <span className="mobile-desc">{item.description !== '—' ? item.description : ''}</span>
                                                </td>
                                                <td className="hide-mobile item-desc">{item.description}</td>
                                                <td className="text-right item-price">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            {section.extras && (
                                <div className="menu-extras">
                                    <h4 className="extras-title">Add-ons & Extras</h4>
                                    <div className="table-responsive">
                                        <table className="menu-table extras-table">
                                            <tbody>
                                                {section.extras.map((extra, eIdx) => (
                                                    <tr key={eIdx}>
                                                        <td className="item-name">{extra.item}</td>
                                                        <td className="text-right item-price">{extra.price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullMenuModal;
