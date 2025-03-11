import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ChevronDown, Camera, Calendar, Cake, Baby } from 'lucide-react';
import Hamburger from './Hamburger';

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

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(true);
    };

    const handleDropdownClose = () => {
        setDropdownOpen(true);
    };

    const handleDropdownItemClick = () => {
        setDropdownOpen(false);
        setMobileMenuOpen(true);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-white">
                    <h1 className="text-2xl font-bold">CHITRASANGAM</h1>
                    <h2 className="text-xl text-pink-500">STUDIO</h2>
                    <p className="text-lg text-pink-500 italic">photography</p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-white uppercase hover:text-pink-500">Home</Link>
                    <div className="relative">
                        <button 
                            id="portfolioButton"
                            className="text-white uppercase hover:text-pink-500 flex items-center"
                            onMouseEnter={handleDropdownToggle}
                            onMouseLeave={handleDropdownClose}
                        >
                            Portfolio
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        
                        {dropdownOpen && (
                            <div 
                                id="dropdownMenu"
                                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-md shadow-lg mt-1 py-2 w-48 z-50"
                                onMouseEnter={handleDropdownToggle}
                                onMouseLeave={handleDropdownClose}
                            >
                                <Link to="/wedding" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center" onClick={handleDropdownItemClick}>
                                    <Camera className="mr-2 w-5 h-5" />
                                    <span>Wedding</span>
                                </Link>
                                <Link to="/marriage-anniversary" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center" onClick={handleDropdownItemClick}>
                                    <Calendar className="mr-2 w-5 h-5" />
                                    <span>Marriage Anniversary</span>
                                </Link>
                                <Link to="/birthday" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center" onClick={handleDropdownItemClick}>
                                    <Cake className="mr-2 w-5 h-5" />
                                    <span>Birthday</span>
                                </Link>
                                <Link to="/maternity" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center" onClick={handleDropdownItemClick}>
                                    <Baby className="mr-2 w-5 h-5" />
                                    <span>Maternity</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className="text-white uppercase hover:text-pink-500">About</Link>
                    <Link to="/faq" className="text-white uppercase hover:text-pink-500">FAQ</Link>
                    
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-pink-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-pink-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-white hover:text-pink-500">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                            CONTACT
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="block md:hidden text-white"
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full z-50">
                    <div className="px-4 py-8 space-y-4">
                        <Link to="/" className="block text-white text-lg uppercase" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        
                        <div>
                            <button 
                                className="text-white text-lg uppercase flex items-center"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Portfolio
                                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {dropdownOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link to="/wedding" className="block text-white py-1 flex items-center" onClick={handleDropdownItemClick}>
                                        <Camera className="mr-2 w-5 h-5" />
                                        <span>Wedding</span>
                                    </Link>
                                    <Link to="/marriage-anniversary" className="block text-white py-1 flex items-center" onClick={handleDropdownItemClick}>
                                        <Calendar className="mr-2 w-5 h-5" />
                                        <span>Marriage Anniversary</span>
                                    </Link>
                                    <Link to="/birthday" className="block text-white py-1 flex items-center" onClick={handleDropdownItemClick}>
                                        <Cake className="mr-2 w-5 h-5" />
                                        <span>Birthday</span>
                                    </Link>
                                    <Link to="/maternity" className="block text-white py-1 flex items-center" onClick={handleDropdownItemClick}>
                                        <Baby className="mr-2 w-5 h-5" />
                                        <span>Maternity</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link to="/about" className="block text-white text-lg uppercase" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link to="/faq" className="block text-white text-lg uppercase" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                        
                        <div className="flex items-center space-x-4 pt-2">
                            <a href="#" className="text-white text-xl hover:text-pink-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white text-xl hover:text-pink-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white text-xl hover:text-pink-500">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                        
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 w-full">
                            CONTACT
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;