import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaInstagram, FaYoutube, FaFacebookF, FaHeart, FaComment, FaCamera, FaUsers } from 'react-icons/fa';
import { Phone, Mail, MapPin, Clock, Users, Cake, Calendar, Baby } from 'lucide-react';
import styles from './Home.module.css';
import HomeWedding from '../components/HomeWedding';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);
  const [carouselImages] = useState([
    {
      url: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_1.JPG',
      text: 'CAPTURING TIMELESS MOMENTS'
    },
    {
      image: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_1.JPG',
      title: 'CREATING MEMORIES THAT LAST FOREVER',
      subtitle: 'Elegant and authentic photography'
    },
    {
      image: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_2.JPG',
      title: 'EVERY MOMENT TELLS A STORY',
      subtitle: 'Let us tell yours through our lens'
    },
    {
      image: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_3.JPG',
      title: 'TURNING MOMENTS INTO MASTERPIECES',
      subtitle: 'Artistic vision meets technical excellence'
    },
    {
      image: '/Images & Videos/HomePhotos/Topcarousel/Topcarousel_4.JPG',
      title: 'PREMIUM PHOTOGRAPHY SERVICES',
      subtitle: 'For weddings, families, and special events'
    },
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const navigate = useNavigate();
  
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

  // Auto-rotate testimonials
  // useEffect(() => {
  //   const testimonialsTimer = setInterval(() => {
  //     setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  //   }, 8000);
    
  //   return () => clearInterval(testimonialsTimer);
  // }, []);

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
      title: "New Born Baby",
      description: "Creating timeless portraits that capture the innocence and wonder of your newborn baby."
    }
  ];
  
  // Enhanced testimonials
  const testimonials = [
    {
      quote: "Chitrasangam Studio captured our wedding day perfectly. The attention to detail and the ability to capture candid moments exceeded our expectations. We couldn't be happier with our photos!",
      name: "Priya & Rahul",
      event: "Wedding Photography"
    },
    {
      quote: "My maternity photoshoot was such a beautiful experience. The photographer made me feel comfortable and confident. The photos are absolutely stunning and capture this special time perfectly.",
      name: "Anjali Sharma",
      event: "Maternity Session"
    },
    {
      quote: "We've used Chitrasangam for all our family portraits and they never disappoint. They have a magical way of capturing everyone at their best, even our active toddler!",
      name: "The Patels",
      event: "Family Portraits"
    }
  ];
  
  // Featured achievements
  const achievements = [
    { number: "10+", text: "Years Experience" },
    { number: "1500+", text: "Happy Clients" },
    { number: "25K+", text: "Photos Delivered" },
    { number: "150+", text: "Wedding Events" }
  ];

  // At the top of your component, add this useEffect hook to load fonts
  useEffect(() => {
    // Load fonts if not already loaded
    const fontMontserrat = document.createElement('link');
    fontMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    fontMontserrat.rel = 'stylesheet';
    
    const fontPlayfair = document.createElement('link');
    fontPlayfair.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap';
    fontPlayfair.rel = 'stylesheet';
    
    document.head.appendChild(fontMontserrat);
    document.head.appendChild(fontPlayfair);
    
    return () => {
      document.head.removeChild(fontMontserrat);
      document.head.removeChild(fontPlayfair);
    };
  }, []);

  // Simplified slides array with direct paths
  const slides = [
    {
      image: 'Images & Videos/HomePhotos/Topcarousel/Topcarousel_1.JPG',
      title: 'CAPTURING TIMELESS MOMENTS',
      subtitle: 'Premium photography for your special occasions'
    },
    {
      image: 'Images & Videos/HomePhotos/Topcarousel/Topcarousel_2.JPG',
      title: 'CREATING MEMORIES THAT LAST FOREVER',
      subtitle: 'Elegant and authentic photography'
    },
    {
      image: 'Images & Videos/HomePhotos/Topcarousel/Topcarousel_3.JPG',
      title: 'EVERY MOMENT TELLS A STORY',
      subtitle: 'Let us tell yours through our lens'
    },
    {
      image: 'Images & Videos/HomePhotos/Topcarousel/Topcarousel_4.JPG',
      title: 'TURNING MOMENTS INTO MASTERPIECES',
      subtitle: 'Artistic vision meets technical excellence'
    },
    {
      image: 'Images & Videos/HomePhotos/Topcarousel/Topcarousel_5.JPG',
      title: 'PREMIUM PHOTOGRAPHY SERVICES',
      subtitle: 'For weddings, families, and special events'
    }
  ];

  // Debug image loading
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => console.log(`Image ${index + 1} loaded successfully:`, slide.image);
      img.onerror = () => console.error(`Image ${index + 1} failed to load:`, slide.image);
    });
  }, []);

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Update the handleServiceClick function to handle all service types
  const handleServiceClick = (title: string) => {
    if (title === "Wedding Photography") {
      navigate('/wedding');
    } else if (title === "Maternity Sessions") {
      navigate('/maternity');
    } else if (title === "Birthday Photography") {
      navigate('/birthday');
    } else if (title === "New Born Baby") {
      navigate('/newbornbaby');
    }
  };

  return (
    <div className={styles.homeContainer}>
      {/* Enhanced Hero Carousel */}
      <section className={styles.heroSection} ref={carouselRef}>
        <div className={styles.carouselWrapper}>
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`${styles.carouselSlide} ${currentSlide === index ? styles.activeSlide : ''}`}
            >
              <img 
                src={slide.image}
                alt={slide.title}
                className={styles.carouselImage}
                onError={(e) => {
                  console.error(`Error loading image: ${slide.image}`);
                  console.log('Error details:', e);
                }}
              />
              <div className={styles.carouselOverlay} />
              
              <div className={styles.carouselContent}>
                <h1 className={styles.heroTitle}>
                  {slide.title}
                </h1>
                <p className={styles.heroSubtitle}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button className={`${styles.carouselNav} ${styles.prevNav}`} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={`${styles.carouselNav} ${styles.nextNav}`} onClick={nextSlide}>
            &#10095;
          </button>
          
          {/* Navigation dots */}
          <div className={styles.carouselIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.carouselIndicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add HomeWedding component here */}
      <HomeWedding />


      {/* Behind the scenes */}
      <section className={styles.aboutSection}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center"
          >
            <div className="">
              <div className={styles.aboutVideoContainer}>
                <video 
                  ref={videoRef}
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
              <h2 className={`${styles.sectionTitle} ${styles.scriptHeading}`}>Behind the Scenes</h2>
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
          <motion.div
            initial={{ opacity: -3, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className={`${styles.scriptHeading} ${styles.whiteScriptHeading}`}>Our Services</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Discover our range of professional photography services tailored to capture your special moments.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => handleServiceClick(service.title)}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/services" className={styles.ctaButton}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievementsSection}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className={styles.achievementItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className={styles.achievementNumber}>{achievement.number}</span>
                <p className={styles.achievementText}>{achievement.text}</p>
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
              className={styles.youtubeButton}
            >
              <FaYoutube /> View All Videos on YouTube
            </a>
          </div>
        </div>
      </section>
      
      {/* Enhanced Instagram Feed Section */}
      <section className={styles.instagramSection}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.instagramTag}>@chitrasangamstudio</span>
              <h2 className={`${styles.sectionTitle} ${styles.scriptHeading} text-center mb-4`}>
                Follow Us on Instagram
              </h2>
              <div className={styles.decorativeLine}>
                <span><FaInstagram className="text-pink-500" /></span>
              </div>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mt-6">
                Get a glimpse of our creative process, behind-the-scenes moments, and our latest photography work
              </p>
            </motion.div>
          </div>
          
          {/* Profile Card - Show once at the top */}
          <motion.div 
            className={styles.instagramProfileCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.profileImage}>
              <img 
                src="/Images & Videos/HomePhotos/Instagram/profile.jpg" 
                alt="Chitrasangam Studio" 
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/80";
                }}
              />
            </div>
            <div className={styles.profileInfo}>
              <h3>chitrasangamstudio</h3>
              <p>Professional Photography Service</p>
            </div>
            <a 
              href="https://www.instagram.com/chitrasangamstudio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.followButton}
            >
              Follow
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Custom Instagram Post Cards */}
            <motion.div
              className={styles.instagramCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.instagramEmbedWrapper}>
                <div className={styles.instagramPostHeader}>
                  <span className={styles.instagramType}>Photo</span>
                  <span className={styles.instagramDate}>2 days ago</span>
                </div>
                <div className={styles.instagramEmbed}>
                  <iframe
                    src="https://www.instagram.com/p/DDRdrozzLDW/embed/captioned/"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title="Instagram Post 1"
                    className={styles.hideHeader}
                  ></iframe>
                </div>
                <div className={styles.instagramInteraction}>
                  <div className={styles.instagramStats}>
                    <span><FaHeart /> 120</span>
                    <span><FaComment /> 15</span>
                  </div>
                  <a 
                    href="https://www.instagram.com/p/DDRdrozzLDW/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewOnIg}
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.instagramCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.instagramEmbedWrapper}>
                <div className={styles.instagramPostHeader}>
                  <span className={styles.instagramType}>Reel</span>
                  <span className={styles.instagramDate}>1 week ago</span>
                </div>
                <div className={styles.instagramEmbed}>
                  <iframe
                    src="https://www.instagram.com/reel/DDqdZXTTYYU/embed/captioned/"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title="Instagram Reel"
                    className={styles.hideHeader}
                  ></iframe>
                </div>
                <div className={styles.instagramInteraction}>
                  <div className={styles.instagramStats}>
                    <span><FaHeart /> 235</span>
                    <span><FaComment /> 37</span>
                  </div>
                  <a 
                    href="https://www.instagram.com/reel/DDqdZXTTYYU/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewOnIg}
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className={styles.instagramCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.instagramEmbedWrapper}>
                <div className={styles.instagramPostHeader}>
                  <span className={styles.instagramType}>Photo</span>
                  <span className={styles.instagramDate}>3 weeks ago</span>
                </div>
                <div className={styles.instagramEmbed}>
                  <iframe
                    src="https://www.instagram.com/p/DDRdrozzLDW/embed/captioned/"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title="Instagram Post 2"
                    className={styles.hideHeader}
                  ></iframe>
                </div>
                <div className={styles.instagramInteraction}>
                  <div className={styles.instagramStats}>
                    <span><FaHeart /> 185</span>
                    <span><FaComment /> 23</span>
                  </div>
                  <a 
                    href="https://www.instagram.com/p/DDRdrozzLDW/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.viewOnIg}
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://www.instagram.com/chitrasangamstudio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.enhancedSocialButton}
            >
              <FaInstagram className="mr-3 text-xl" /> 
              <span>
                <strong>See All Posts</strong>
                <small>@chitrasangamstudio</small>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Improved Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                    <FaYoutube />
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;