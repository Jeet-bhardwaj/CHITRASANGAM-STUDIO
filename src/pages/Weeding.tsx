import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Weeding.module.css';
import { FaCamera, FaFilm, FaBook, FaArrowLeft, FaArrowRight, FaHeart } from 'react-icons/fa';

const Weeding: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
    
    // Carousel wedding photos from local directory
    const carouselImages = [
        "/Images & Videos/Wedding/carouselImages/carouselImages_1.JPG",
        // "/Images & Videos/Wedding/carouselImages/carouselImages_2.jpg",
        // "/Images & Videos/Wedding/carouselImages/carouselImages_3.jpg",
        // "/Images & Videos/Wedding/carouselImages/carouselImages_4.jpg",
        // "/Images & Videos/Wedding/carouselImages/carouselImages_5.jpg",
    ];

    // Gallery images - wedding photography showcase
    const weddingImages = [
        "/Images & Videos/Wedding/weddingImages/weddingImages_1.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_2.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_3.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_4.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_5.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_6.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_7.JPG",
        "/Images & Videos/Wedding/weddingImages/weddingImages_8.JPG",
    ];
    
    // Haldi ceremony images
    const haldiImages = [
        "/Images & Videos/Wedding/Haldi/Haldi_1.jpg",
        "/Images & Videos/Wedding/Haldi/Haldi_2.JPG",
        "/Images & Videos/Wedding/Haldi/Haldi_3.JPG",
        
    ];

    // Service packages
    const services = [
        {
            icon: <FaCamera />,
            title: "Photography Package",
            description: "Comprehensive coverage of your wedding day with our professional photographers, capturing every special moment from preparation to reception."
        },
        {
            icon: <FaFilm />,
            title: "Cinematic Experience",
            description: "Create a cinematic wedding film that tells the story of your special day with artistic shots, emotional moments, and beautiful music."
        },
        {
            icon: <FaBook />,
            title: "Premium Albums",
            description: "Handcrafted premium wedding albums and prints with the finest materials to preserve your memories for generations to come."
        }
    ];

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % carouselImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [carouselImages.length]);
    
    // Control animations based on scroll position
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % carouselImages.length);
    };

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className={`${styles.container} min-h-screen w-full relative overflow-hidden`}>
            {/* FULL SCREEN VIDEO SECTION */}
            <div className="absolute inset-0 w-full h-screen overflow-hidden z-0">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Images & Videos/CenemeticShort/WhatsApp Video 2025-02-26 at 11.54.04_78da36ac.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Hero Content Overlay */}
            <div className="relative h-screen flex flex-col items-center justify-center text-white text-center z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${styles.heroTitle}`}
                >
                    Timeless Wedding Photography
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`${styles.heroSubtitle}`}
                >
                    Creating memories that last a lifetime
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#introduction" className={styles.scrollButton}>
                        <span>Explore</span>
                        <span className={styles.scrollIcon}></span>
                    </a>
                </motion.div>
            </div>

            {/* INTRODUCTION SECTION */}
            <section id="introduction" className={`${styles.introduction} relative z-10`}>
                <h2 className={`${styles.sectionTitle} ${styles.scriptHeading}`}>Capture Your Love Story</h2>
                <p className={styles.introText}>
                    At Chitrasangam Studio, we believe that every wedding tells a unique love story. Our team of passionate photographers specializes in capturing those fleeting moments of joy, emotion, and connection that make your wedding day special. From the <span className={styles.highlight}>traditional ceremonies</span> to the <span className={styles.highlight}>candid celebrations</span>, we ensure that no precious moment goes unnoticed.
                </p>
                <p className={styles.introText}>
                    With years of experience in Indian wedding photography, we understand the cultural significance and emotional depth of every ritual. Our approach combines traditional photography with contemporary styles to create a timeless collection of memories that you'll cherish forever.
                </p>
            </section>
            
            {/* CAROUSEL SECTION */}
            <section className={`${styles.carouselSection} relative z-10`}>
                <div className={styles.carouselContainer}>
                    <div 
                        className={styles.carouselTrack} 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {carouselImages.map((image, index) => (
                            <div key={index} className={styles.carouselSlide}>
                                <img 
                                    src={image} 
                                    alt={`Wedding celebration ${index + 1}`} 
                                    className={styles.carouselImage}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <button 
                        className={`${styles.carouselButton} ${styles.carouselPrev}`}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <FaArrowLeft />
                    </button>
                    
                    <button 
                        className={`${styles.carouselButton} ${styles.carouselNext}`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <FaArrowRight />
                    </button>
                    
                    <div className={styles.carouselDots}>
                        {carouselImages.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.carouselDot} ${index === currentSlide ? styles.activeDot : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="relative z-10">
                <h2 className={`${styles.sectionTitle} ${styles.scriptHeading} text-center mt-12 mb-8`}>Our Wedding Portfolio</h2>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className={styles.gallery}
                >
                    {weddingImages.map((image, index) => (
                        <motion.img
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: { duration: 0.5, delay: index * 0.1 }
                                }
                            }}
                            src={image}
                            alt={`Indian Wedding ${index + 1}`}
                            className={styles.image}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </motion.div>
            </section>

            {/* HALDI CEREMONY SECTION */}
            <section className={`${styles.haldiSection} relative z-10`}>
                <div className={styles.haldiOverlay}>
                    <h2 className={`${styles.sectionTitle} ${styles.scriptHeading}`}>Haldi Ceremony</h2>
                    <p className={styles.haldiText}>
                        The Haldi ceremony is a vibrant pre-wedding ritual where turmeric paste is applied to the bride and groom. 
                        This auspicious tradition is believed to bless the couple with prosperity and purify their bodies before the wedding.
                        Our photographers capture the joy, laughter, and colorful moments of this traditional celebration.
                    </p>
                    
                    <motion.div 
                        className={styles.haldiGallery}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {haldiImages.map((image, index) => (
                            <motion.div 
                                key={index}
                                className={styles.haldiImageContainer}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { duration: 0.5, delay: index * 0.1 }
                                    }
                                }}
                            >
                                <img 
                                    src={image} 
                                    alt={`Haldi ceremony ${index + 1}`}
                                    className={styles.haldiImage}
                                    onClick={() => setSelectedImage(image)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <motion.blockquote 
                        className={styles.haldiQuote}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        "The Haldi ceremony is filled with laughter, playfulness, and beautiful traditions that make for incredible photographs full of color and emotion."
                        <footer>- Photography Team</footer>
                    </motion.blockquote>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className={`${styles.services} relative z-10`}>
                <h2 className={`${styles.sectionTitle} ${styles.scriptHeading} text-center mb-8`}>Our Wedding Services</h2>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className={styles.servicesGrid}
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.serviceCard}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { duration: 0.6, delay: index * 0.2 }
                                }
                            }}
                        >
                            <div className={styles.serviceIcon}>
                                {service.icon}
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <motion.blockquote 
                className={`${styles.quote} relative z-10`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                "We couldn't be happier with how our wedding photos turned out. Every meaningful moment was captured beautifully. The team was professional, creative, and made us feel so comfortable throughout our big day. These photos will be treasured for generations!"
                <footer>- Priya & Rahul</footer>
            </motion.blockquote>

            {/* CALL TO ACTION SECTION */}
            <section className={`${styles.cta} relative z-10`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={`${styles.ctaTitle} ${styles.scriptHeading}`}>Ready to Book Your Wedding Photography?</h2>
                    <p className={styles.ctaText}>
                        Let us tell your unique love story through our lenses. Contact us today to check availability for your wedding date and learn more about our customized photography packages.
                    </p>
                    <motion.button 
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a Consultation <FaHeart className="ml-2 inline-block" />
                    </motion.button>
                </motion.div>
            </section>

            {/* IMAGE MODAL */}
            {selectedImage && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            src={selectedImage} 
                            alt="Wedding photograph enlarged view" 
                            className="max-h-[90vh] max-w-full rounded-lg"
                        />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Weeding;
