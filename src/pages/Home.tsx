import  { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaQuoteRight, FaArrowRight } from 'react-icons/fa';
import { Phone, Mail, MapPin, Clock, Users, Cake, Calendar, Baby} from 'lucide-react';
import styles from './Home.module.css';
import HomeWedding from '../components/HomeWedding';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages] = useState([
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_5.JPG',
      text: 'CAPTURING TIMELESS MOMENTS'
    },
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_1.JPG ',
      // text: '"SHE GETS THE PICTURES YOU NEVER KNEW YOU NEEDED"'
    },
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_2.JPG',
      // text: 'CAPTURING TIMELESS MOMENTS'
    },
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_3.JPG',
      // text: 'CAPTURING TIMELESS MOMENTS'
    },
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_4.JPG',
      // text: 'CAPTURING TIMELESS MOMENTS'
    },
    // Add more slides with their respective texts
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Animation effect when sections come into view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
    }
  }, []);

  // Auto-slide effect for carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);


  // Services offered
  const services = [
    {
      icon: <Calendar className="w-16 h-16 text-pink-500" />,
      title: "Wedding Photography",
      description: "Comprehensive wedding photography services capturing your special day from preparations to reception."
    },
    {
      icon: <Baby className="w-16 h-16 text-pink-500" />,
      title: "Maternity Sessions",
      description: "Beautiful portraits celebrating the journey to motherhood with elegance and emotion."
    },
    {
      icon: <Cake className="w-16 h-16 text-pink-500" />,
      title: "Birthday Photography",
      description: "Capturing the joy and excitement of birthday celebrations for all ages."
    },
    {
      icon: <Users className="w-16 h-16 text-pink-500" />,
      title: "Family Portraits",
      description: "Creating timeless family portraits that capture authentic connections and joy."
    }
  ];

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section with Carousel */}
      <section className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          {/* Previous Button */}
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={() => setCurrentSlide((prev) => 
              prev === 0 ? carouselImages.length - 1 : prev - 1
            )}
          >
            <span>←</span>
          </button>

          {/* Next Button */}
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={() => setCurrentSlide((prev) => 
              (prev + 1) % carouselImages.length
            )}
          >
            <span>→</span>
          </button>

          {carouselImages.map((slide, index) => (
            <motion.div
              key={index}
              className={styles.carouselSlide}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1
              }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src={slide.url} 
                alt={`Slide ${index + 1}`} 
                className={styles.carouselImage}
              />
              <div className={styles.overlay}></div>
              {currentSlide === index && (
                <motion.div 
                  className={styles.slideText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {slide.text}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      <HomeWedding />
      {/* Behind the scenes  */}
      <section className={styles.aboutSection}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center"
          >
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <div className={styles.aboutVideoContainer}>
                <video 
                  src="/Images & Videos/About/BTS.mp4" 
                  className={styles.aboutVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className={styles.aboutVideoOverlay}></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-16">
              <h2 className={styles.sectionTitle}>Behind the Scenes</h2>
              <p className={styles.aboutText}>
                Welcome to Chitrasangam Studio, where we transform fleeting moments into timeless memories. 
                With our passionate team of photographers, we specialize in wedding, maternity, birthday, and family photography.
              </p>
              <p className={styles.aboutText}>
                Our approach combines technical excellence with artistic vision, allowing us to capture the authentic emotions 
                and connections that make each occasion special. We believe every photograph tells a story, and we're dedicated 
                to crafting visual narratives that you'll treasure for generations.
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <p>Years Experience</p>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>1500+</span>
                  <p>Happy Clients</p>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>25K+</span>
                  <p>Photos Delivered</p>
                </div>
              </div>
              <Link to="/about" className={styles.aboutLink}>
                Learn More About Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className={`${styles.sectionTitle} text-center mb-16`}>Our Photography Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link 
                  to={`/${service.title.split(' ')[0].toLowerCase()}`} 
                  className={styles.serviceLink}
                >
                  Explore {service.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Portfolio */}
      <section className={styles.portfolioSection}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className={`${styles.sectionTitle} text-center mb-16`}>Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/OGUouW3oS4o" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 2 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/-Zo6nrxH2C8" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 3 - REPLACED */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/udnmCXG2xs4" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 4 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/rw9aCM6CVkU" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 5 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/Nu2e1jmQMlY" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 6 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/8Hv9eAanycY" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 7 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/n5Ag44CClBk" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 8 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/BgbbJOVq0Mc" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 9 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/cxTkyeqICqI" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* Video 10 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/MwRK9D8sKV0" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* New Video 11 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/yLmYD08c0Pc" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
            
            {/* New Video 12 */}
            <motion.div
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.responsiveVideoWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/44ynLnkqPpI" 
                  title="Photography Session"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.youtube.com/playlist?list=PLlPsRjogGFzVDoi0j4AKG2eUGWLLpBwSp" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View All Videos on YouTube
            </a>
          </div>
        </div>
      </section>
      

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className={`${styles.sectionTitle} text-center mb-16`}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={styles.contactInfo}>
              <h3>Get In Touch</h3>
              <p className="mb-8">We'd love to hear from you! Whether you're ready to book a session or just have questions, reach out and we'll respond promptly.</p>
              
              <div className={styles.contactItem}>
                <Phone className="w-6 h-6" />
                <span>+91 9876543210</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className="w-6 h-6" />
                <span>info@chitrasangamstudio.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className="w-6 h-6" />
                <span>123 Photography Lane, Mumbai, Maharashtra 400001</span>
              </div>
              <div className={styles.contactItem}>
                <Clock className="w-6 h-6" />
                <span>Studio Hours: Mon-Sat: 10AM-7PM</span>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">Service Interested In</label>
                <select id="service" className={styles.formInput}>
                  <option value="">Select a service...</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="maternity">Maternity Photography</option>
                  <option value="birthday">Birthday Photography</option>
                  <option value="family">Family Portraits</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your photography needs..."
                  rows={4}
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;