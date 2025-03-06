
import { Camera, Clock, Mail, MapPin, Phone, Star } from 'lucide-react';
import styles from './Home.module.css';
import Weeding from './Weeding';

function App() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
   
      <div className="relative z-40">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <header className={`${styles.header} relative h-screen overflow-hidden`}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Images & Videos/CenemeticShort/WhatsApp Video 2025-02-26 at 11.54.04_78da36ac.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
            <h1 className={`${styles.heroTitle} mb-4`}>
              COLORFUL | AUTHENTIC | CREATIVE
            </h1>
            <p className={`${styles.heroSubtitle}`}>
              a wedding & portrait photographer
            </p>
          </div>
        </header>
        <Weeding />

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${styles.sectionTitle} text-center`}>Our Services</h2>
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
            <h2 className={`${styles.sectionTitle} text-center`}>Our Portfolio</h2>
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
            <h2 className={`${styles.sectionTitle} text-center`}>Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className={styles.contactInfo}>
                  <Phone className="w-6 h-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.contactInfo}>
                  <Mail className="w-6 h-6" />
                  <span>contact@chitrasangam.com</span>
                </div>
                <div className={styles.contactInfo}>
                  <MapPin className="w-6 h-6" />
                  <span>123 Photography Lane, Creative City, ST 12345</span>
                </div>
                <div className={styles.contactInfo}>
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