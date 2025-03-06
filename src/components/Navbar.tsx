import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
    const [isVisible, setIsVisible] = useState(true); // State to manage navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }
            setLastScrollY(window.scrollY); // Update last scroll position
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} fixed w-full z-50 flex justify-between items-center px-6 md:px-8 py-2`}>
            <div className="text-white">
                <h1 className={`${styles.navbarTitle}`}>CHITRASANGAM</h1>
                <h2 className={`${styles.navbarSubtitle}`}>STUDIO</h2>
                <p className={`${styles.photography} font-script text-xl`}>photography</p>
            </div>
            <div className="hidden md:flex space-x-8 text-white uppercase">
                <Link to="/" className={styles.navbarLink}>Home</Link>
                <div className="relative">
                    <button onClick={toggleDropdown} className={styles.navbarLink}>
                        PORTFOLIO
                    </button>
                    {dropdownOpen && ( // Dropdown menu
                        <div className={styles.dropdownMenu}>
                            <Link to="/wedding" className={styles.dropdownItem}>Wedding</Link>
                            <Link to="/marriage-anniversary" className={styles.dropdownItem}>Marriage Anniversary</Link>
                            <Link to="/birthday" className={styles.dropdownItem}>Birthday</Link>
                            <Link to="/maternity" className={styles.dropdownItem}>Maternity</Link>
                        </div>
                    )}
                </div>
                <Link to="/about" className={styles.navbarLink}>About</Link>
                {/* <Link to="/" className={styles.navbarLink}></Link> */}
                <Link to="/faq" className={styles.navbarLink}>FAQ</Link>
            </div>
            <div className="flex items-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                    <i className="fab fa-tiktok"></i>
                </a>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
                    CONTACT
                </button>
            </div>
        </nav>
    )
}

export default Navbar;