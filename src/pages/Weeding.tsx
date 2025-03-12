import React, { useState, useEffect } from 'react';
import styles from './Weeding.module.css';
import { FaCamera, FaFilm, FaBook, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Weeding: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
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

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % carouselImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [carouselImages.length]);

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
                <h1 className={`${styles.heroTitle}`}>
                    Timeless Wedding Photography
                </h1>
                <p className={`${styles.heroSubtitle}`}>
                    गणपति बप्पा मोरया
                </p>
            </div>

            {/* INTRODUCTION SECTION */}
            <section className={`${styles.introduction} relative z-10`}>
                <h2 className={styles.sectionTitle}>Capture Your Love Story</h2>
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
                <h2 className={`${styles.sectionTitle} text-center mt-12 mb-8`}>Our Wedding Portfolio</h2>
                <div className={styles.gallery}>
                    {weddingImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Indian Wedding ${index + 1}`}
                            className={styles.image}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className={`${styles.services} relative z-10`}>
                <h2 className={`${styles.sectionTitle} text-center mb-8`}>Our Wedding Services</h2>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                {service.icon}
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <blockquote className={`${styles.quote} relative z-10`}>
                "We couldn't be happier with how our wedding photos turned out. Every meaningful moment was captured beautifully. The team was professional, creative, and made us feel so comfortable throughout our big day. These photos will be treasured for generations!"
                <footer>- Priya & Rahul</footer>
            </blockquote>

            {/* CALL TO ACTION SECTION */}
            <section className={`${styles.cta} relative z-10`}>
                <h2 className={styles.ctaTitle}>Ready to Book Your Wedding Photography?</h2>
                <p className={styles.ctaText}>
                    Let us tell your unique love story through our lenses. Contact us today to check availability for your wedding date and learn more about our customized photography packages.
                </p>
                <button className={styles.ctaButton}>Book a Consultation</button>
            </section>

            {/* IMAGE MODAL */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Wedding photograph enlarged view" 
                            className="max-h-[90vh] max-w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weeding;
