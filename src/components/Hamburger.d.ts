declare module 'Hamburger' {
  interface HamburgerProps {
    isOpen: boolean;
    toggleMenu: () => void;
  }
  const Hamburger: React.FC<HamburgerProps>;
  export default Hamburger;
} 