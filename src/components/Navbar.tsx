import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <><nav className="fixed w-full z-50 flex justify-between items-center px-8 py-4">
            <div className="text-white">
                <h1 className="text-3xl font-serif">CHITRASANGAM</h1>
                <h2 className="text-2xl font-serif">STUDIO</h2>
                <p className="font-script text-xl">photography</p>
            </div>
            <div className="hidden md:flex space-x-8 text-white uppercase">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/about" className="hover:text-gray-300">About</Link>
                <Link to="/pricing" className="hover:text-gray-300">Services</Link>
                <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
                <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
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
        </nav></>
    )
}

export default Navbar;