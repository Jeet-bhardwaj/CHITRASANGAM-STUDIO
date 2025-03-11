import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Menu, X, ChevronDown, Camera, Calendar, Cake, Baby } from 'lucide-react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById('dropdownMenu');
            const button = document.getElementById('portfolioButton');
            if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            setDropdownOpen(false);
        }
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(true);
    };

    const handleDropdownClose = () => {
        setDropdownOpen(false);
    };

    const handleDropdownItemClick = () => {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} fixed w-full z-50 flex justify-between items-center px-6 md:px-8 py-2`}>
            <div className="text-white flex-shrink-0">
                <h1 className={`${styles.navbarTitle}`}>CHITRASANGAM</h1>
                <h2 className={`${styles.navbarSubtitle}`}>STUDIO</h2>
                <p className={`${styles.photography} font-script text-xl`}>photography</p>
            </div>
            
            <div className="flex-grow"></div>
            
            <div className="hidden md:flex space-x-8 text-white uppercase justify-end flex-shrink-0">
                <Link to="/" className={styles.navbarLink}>Home</Link>
                <div className="relative"
                     onMouseEnter={handleDropdownToggle}
                     onMouseLeave={handleDropdownClose}
                >
                    <button id="portfolioButton" className={`${styles.navbarLink} flex items-center`}>
                        PORTFOLIO
                        <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {dropdownOpen && (
                        <div id="dropdownMenu" className={`${styles.dropdownMenu} ${styles.dropdownAnimation}`}
                             onMouseEnter={handleDropdownToggle}
                             onMouseLeave={handleDropdownClose}
                        >
                            <div className={styles.dropdownContent}>
                                <Link to="/wedding" className={styles.dropdownItem} onClick={handleDropdownItemClick}>
                                    <Camera className="mr-2 w-5 h-5" />
                                    <span>Wedding</span>
                                </Link>
                                <Link to="/marriage-anniversary" className={styles.dropdownItem} onClick={handleDropdownItemClick}>
                                    <Calendar className="mr-2 w-5 h-5" />
                                    <span>Marriage Anniversary</span>
                                </Link>
                                <Link to="/birthday" className={styles.dropdownItem} onClick={handleDropdownItemClick}>
                                    <Cake className="mr-2 w-5 h-5" />
                                    <span>Birthday</span>
                                </Link>
                                <Link to="/maternity" className={styles.dropdownItem} onClick={handleDropdownItemClick}>
                                    <Baby className="mr-2 w-5 h-5" />
                                    <span>Maternity</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/about" className={styles.navbarLink}>About</Link>
                <Link to="/faq" className={styles.navbarLink}>FAQ</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 ml-8 flex-shrink-0">
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-tiktok"></i>
                </a>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
                    CONTACT
                </button>
            </div>
            
            <button 
                className="md:hidden text-white focus:outline-none z-50 ml-auto" 
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''} md:hidden`}>
                <div className="flex flex-col items-center space-y-6 py-8">
                    <Link to="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    
                    <div className="w-full text-center">
                        <button 
                            className={`${styles.mobileNavLink} flex items-center justify-center`}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            PORTFOLIO
                            <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {dropdownOpen && (
                            <div className={`${styles.mobileDropdown} ${styles.dropdownAnimation}`}>
                                <Link to="/wedding" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                                    <Camera className="mr-2 w-5 h-5" />
                                    <span>Wedding</span>
                                </Link>
                                <Link to="/marriage-anniversary" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                                    <Calendar className="mr-2 w-5 h-5" />
                                    <span>Marriage Anniversary</span>
                                </Link>
                                <Link to="/birthday" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                                    <Cake className="mr-2 w-5 h-5" />
                                    <span>Birthday</span>
                                </Link>
                                <Link to="/maternity" className={styles.mobileDropdownItem} onClick={handleDropdownItemClick}>
                                    <Baby className="mr-2 w-5 h-5" />
                                    <span>Maternity</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    <Link to="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
                    <Link to="/faq" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                    
                    <div className="flex items-center space-x-6 mt-4">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                    
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 mt-4">
                        CONTACT
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;