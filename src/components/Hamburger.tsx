import React from 'react';
import styles from './Hamburger.module.css';

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className={styles.hamburger}
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
    </button>
  );
};

export default Hamburger; 