import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ChevronDown, Camera, Calendar, Cake, Baby } from 'lucide-react';


/**
 * Navbar component that provides navigation for the entire application
 * Features responsive design with different behavior for desktop and mobile
 * Includes dropdown menus, scroll hiding behavior, and mobile menu toggle
 */
const Navbar = () => {
    // State for desktop dropdown menu (Portfolio items)
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    // State for mobile dropdown menu (Portfolio items on mobile)
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    // Controls navbar visibility when scrolling
    const [isVisible, setIsVisible] = useState(true);
    // Tracks scroll position to determine visibility
    const [lastScrollY, setLastScrollY] = useState(0);
    // Controls whether the mobile menu is expanded
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    /**
     * Handles scroll behavior to hide/show the navbar
     * Shows navbar when scrolling up, hides when scrolling down
     */
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

    // Set up scroll event listener to handle navbar visibility
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    /**
     * Detects clicks outside the desktop dropdown menu to close it
     * Only affects desktop menu behavior
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById('desktopDropdownMenu');
            const button = document.getElementById('portfolioButton');
            if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
                setDesktopDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    /**
     * Disables body scrolling when mobile menu is open
     * Prevents background content from scrolling when interacting with mobile menu
     */
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

    /**
     * Toggles the mobile menu open/closed state
     * Also resets the mobile dropdown when toggling
     */
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Reset mobile dropdown when toggling mobile menu to prevent nested open menus
        setMobileDropdownOpen(false);
    };

    /**
     * Toggles the mobile dropdown menu for portfolio items
     */
    const toggleMobileDropdown = () => {
        setMobileDropdownOpen(!mobileDropdownOpen);
    };

    /**
     * Handles navigation for mobile menu items
     * Navigates to the specified path and closes all menus
     * @param path - The route path to navigate to
     */
    const navigateTo = (path: string) => {
        navigate(path);
        // Close all menus after navigation for clean UI
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
    };

    return (
        <nav className={`${styles.navbar} fixed top-0 left-0 w-full z-50`}>
            <div className={`container mx-auto px-4 py-3 flex justify-between items-center ${styles.navbarInner}`}>
                {/* Logo and Brand */}
                <div className="text-white flex items-center">
                    <img 
                        src="/Images & Videos/logo.png" 
                        alt="Chitrasangam Studio Logo" 
                        className="mr-3 h-12 w-auto"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">CHITRASANGAM</h1>
                        <h2 className="text-xl text-pink-500">STUDIO</h2>
                        <p className="text-lg text-pink-500 italic">photography</p>
                    </div>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-white uppercase hover:text-pink-500 tracking-wider font-medium text-sm">Home</Link>
                    
                    {/* Desktop Dropdown Menu Container */}
                    <div className="relative">
                        <button 
                            id="portfolioButton"
                            className="text-white uppercase hover:text-pink-500 tracking-wider font-medium text-sm flex items-center"
                            onMouseEnter={() => setDesktopDropdownOpen(true)}
                            onMouseLeave={() => setDesktopDropdownOpen(true)}
                        >
                            Portfolio
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        
                        {/* Desktop Dropdown Menu Items - Shown on hover */}
                        {desktopDropdownOpen && (
                            <div 
                                id="desktopDropdownMenu"
                                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-md shadow-lg mt-1 py-2 w-48 z-50"
                                onMouseEnter={() => setDesktopDropdownOpen(true)}
                                onMouseLeave={() => setDesktopDropdownOpen(false)}
                            >
                                <Link to="/wedding" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center text-sm tracking-wide">
                                    <Camera className="mr-2 w-5 h-5" />
                                    <span>Wedding</span>
                                </Link>
                                <Link to="/new-born-baby" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center text-sm tracking-wide">
                                    <Baby className="mr-2 w-5 h-5" />
                                    <span>New Born Baby</span>
                                </Link>
                                <Link to="/birthday" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center text-sm tracking-wide">
                                    <Cake className="mr-2 w-5 h-5" />
                                    <span>Birthday</span>
                                </Link>
                                <Link to="/maternity" className="block px-4 py-2 text-white hover:bg-gray-800 flex items-center text-sm tracking-wide">
                                    <Baby className="mr-2 w-5 h-5" />
                                    <span>Maternity</span>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    <Link to="/about" className="text-white uppercase hover:text-pink-500 tracking-wider font-medium text-sm">About</Link>
                    <Link to="/faq" className="text-white uppercase hover:text-pink-500 tracking-wider font-medium text-sm">FAQ</Link>
                    
                    {/* Social Media Icons and Contact Button */}
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
                        <Link to="/contact" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 text-sm font-medium tracking-wider">
                            CONTACT
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle Button - Only visible on mobile */}
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

            {/* Mobile Menu - Full screen overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 w-full z-50">
                    <div className="px-4 py-8 space-y-4">
                        {/* Mobile Navigation Items */}
                        <button 
                            className="block text-white text-lg uppercase w-full text-left"
                            onClick={() => navigateTo('/')}
                        >
                            Home
                        </button>
                        
                        {/* Mobile Dropdown Container */}
                        <div>
                            <button 
                                className="text-white text-lg uppercase flex items-center w-full"
                                onClick={toggleMobileDropdown}
                            >
                                Portfolio
                                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Mobile Dropdown Items - Toggled by clicking */}
                            {mobileDropdownOpen && (
                                <div className="ml-4 mt-2 space-y-2">
                                    <button 
                                        className="block text-white py-1 flex items-center w-full text-left" 
                                        onClick={() => navigateTo('/wedding')}
                                    >
                                        <Camera className="mr-2 w-5 h-5" />
                                        <span>Wedding</span>
                                    </button>
                                    <button 
                                        className="block text-white py-1 flex items-center w-full text-left" 
                                        onClick={() => navigateTo('/new-born-baby')}
                                    >
                                        <Baby className="mr-2 w-5 h-5" />
                                        <span>New Born Baby</span>
                                    </button>
                                    <button 
                                        className="block text-white py-1 flex items-center w-full text-left" 
                                        onClick={() => navigateTo('/birthday')}
                                    >
                                        <Cake className="mr-2 w-5 h-5" />
                                        <span>Birthday</span>
                                    </button>
                                    <button 
                                        className="block text-white py-1 flex items-center w-full text-left" 
                                        onClick={() => navigateTo('/maternity')}
                                    >
                                        <Baby className="mr-2 w-5 h-5" />
                                        <span>Maternity</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <button 
                            className="block text-white text-lg uppercase w-full text-left"
                            onClick={() => navigateTo('/about')}
                        >
                            About
                        </button>
                        <button 
                            className="block text-white text-lg uppercase w-full text-left"
                            onClick={() => navigateTo('/faq')}
                        >
                            FAQ
                        </button>
                        
                        {/* Mobile Social Media Icons */}
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
                        
                        {/* Mobile Contact Button */}
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