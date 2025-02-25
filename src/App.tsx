import { useState, useEffect } from 'react';
import { Camera, Clock, Mail, MapPin, Phone, Star } from 'lucide-react';
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="text-center relative">
          <div className="animate-float-camera absolute -top-16 left-1/2 transform -translate-x-1/2">
            <Camera className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x animate-float-text">
            Chitrasangam Studio
          </h1>
          <p className="text-white text-xl mt-4 opacity-0 animate-fade-in">
            Beyond Imagination
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background Beams Effect */}
      <BackgroundBeams className="absolute inset-0" />
      
      {/* Content overlay */}
      <div className="relative z-40">
        {/* Navigation */}
        <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-4">
          <div className="text-white">
            <h1 className="text-3xl font-serif">CHITRASANGAM</h1>
            <h2 className="text-2xl font-serif">STUDIO</h2>
            <p className="font-script text-xl">photography</p>
          </div>
          <div className="hidden md:flex space-x-8 text-white uppercase">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#pricing" className="hover:text-gray-300">Pricing</a>
            <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
            <a href="#faq" className="hover:text-gray-300">FAQ</a>
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

        {/* Hero Section */}
        <header className="relative h-screen">
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              COLORFUL | AUTHENTIC | CREATIVE
            </h1>
            <p className="text-xl md:text-2xl font-light">
              a wedding & portrait photographer
            </p>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="portfolio" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioImages.map((img, index) => (
                <div key={index} className="relative overflow-hidden group">
                  <img
                    src={img}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>contact@chitrasangam.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>123 Photography Lane, Creative City, ST 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="w-6 h-6" />
              <span className="text-xl font-bold">Chitrasangam Studio</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Chitrasangam Studio. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Portrait Photography",
    description: "Professional portraits that capture your authentic self in studio or location settings."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Wedding Photography",
    description: "Documenting your special day with artistic and candid moments that last forever."
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Commercial Photography",
    description: "High-quality commercial photography for products, real estate, and corporate events."
  }
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
];

export default App;