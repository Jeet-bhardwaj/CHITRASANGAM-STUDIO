import React, { useState, useEffect } from 'react';
import styles from './Birthday.module.css';
import { FaCamera, FaCakeCandles, FaPhotoFilm, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Birthday: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Carousel birthday photos from local directory
    const carouselImages = [
        "/Images & Videos/Birthday/Birthday_1.jpg",
        "/Images & Videos/Birthday/Birthday_2.jpg",
        "/Images & Videos/Birthday/Birthday_3.jpg",
        "/Images & Videos/Birthday/Birthday_4.jpg",
        "/Images & Videos/Birthday/Birthday_5.jpg",
    ];

    // Gallery images - these should be replaced with your local images
    const birthdayImages = [
        "/Images & Videos/Birthday/Birthday_6.jpg",
        "/Images & Videos/Birthday/Birthday_7.jpg",
        "/Images & Videos/Birthday/Birthday_8.jpg",
        "/Images & Videos/Birthday/Birthday_9.jpg",
        "/Images & Videos/Birthday/Birthday_10.jpg",
        "/Images & Videos/Birthday/Birthday_11.jpg",
        "/Images & Videos/Birthday/Birthday_12.jpg",
        "/Images & Videos/Birthday/Birthday_1.jpg",
    ];

    // Service packages
    const services = [
        {
            icon: <FaCamera />,
            title: "Basic Birthday Package",
            description: "Perfect for intimate celebrations. Includes 2 hours of coverage, 50+ digital photos, and online gallery access."
        },
        {
            icon: <FaCakeCandles />,
            title: "Premium Celebration",
            description: "Our most popular option with 3 hours of coverage, 100+ edited digital photos, mini photo album, and online gallery access."
        },
        {
            icon: <FaPhotoFilm />,
            title: "Ultimate Birthday Experience",
            description: "Full celebration coverage with 4+ hours, 200+ digital photos, premium photo album, highlight video reel, and online gallery."
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
            {/* FULL SCREEN VIDEO/IMAGE BACKGROUND */}
            <div className="absolute inset-0 w-full h-screen overflow-hidden z-0">
                <img 
                    src="/Images & Videos/Birthday/Birthday_1.jpg"
                    alt="Birthday celebration"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/40 to-purple-800/50"></div>
            </div>
            
            {/* Hero Content Overlay */}
            <div className="relative h-screen flex flex-col items-center justify-center text-white text-center z-10">
                <div className={styles.confetti}></div>
                <h1 className={`${styles.heroTitle}`}>
                    Magical Birthday Photography
                </h1>
                <p className={`${styles.heroSubtitle}`}>
                    Capturing joy, laughter, and celebration
                </p>
            </div>

            {/* INTRODUCTION SECTION */}
            <section className={`${styles.introduction} relative z-10`}>
                <h2 className={styles.sectionTitle}>Celebrate Every Milestone</h2>
                <p className={styles.introText}>
                    At Chitrasangam Studio, we specialize in capturing the joy and excitement of birthday celebrations. From the anticipation before the candles are lit to the laughter shared over cake, our photographers focus on the <span className={styles.highlight}>authentic moments</span> and <span className={styles.highlight}>genuine emotions</span> that make each birthday special.
                </p>
                <p className={styles.introText}>
                    Whether it's your child's first birthday, a sweet sixteen, or a milestone 50th celebration, we craft a custom photography experience that perfectly captures the personality and spirit of the birthday star. Our unobtrusive approach means we blend into the background while capturing all those spontaneous, magical moments you'll want to remember forever.
                </p>
                
                <div className={styles.birthdayStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <p>Birthday Celebrations Photographed</p>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>48hr</span>
                        <p>Quick Preview Delivery</p>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>100%</span>
                        <p>Satisfaction Guaranteed</p>
                    </div>
                </div>
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
                                    alt={`Birthday celebration ${index + 1}`} 
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
                <h2 className={`${styles.sectionTitle} text-center mt-12 mb-8`}>Birthday Celebration Portfolio</h2>
                <div className={styles.gallery}>
                    {birthdayImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Birthday celebration ${index + 1}`}
                            className={styles.image}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className={`${styles.services} relative z-10`}>
                <h2 className={`${styles.sectionTitle} text-center mb-8`}>Our Birthday Photography Packages</h2>
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

            {/* SPECIAL EVENTS CALLOUT */}
            <section className={`${styles.specialEvents} relative z-10`}>
                <div className={styles.specialEventsContent}>
                    <h2>Special Birthday Milestones</h2>
                    <div className={styles.milestonesContainer}>
                        <div className={styles.milestone}>
                            <div className={styles.milestoneIcon}>1</div>
                            <h3>First Birthday</h3>
                            <p>Capture that cake smash moment and all the firsts</p>
                        </div>
                        <div className={styles.milestone}>
                            <div className={styles.milestoneIcon}>16</div>
                            <h3>Sweet Sixteen</h3>
                            <p>Document this important coming-of-age celebration</p>
                        </div>
                        <div className={styles.milestone}>
                            <div className={styles.milestoneIcon}>21</div>
                            <h3>21st Birthday</h3>
                            <p>Commemorate this significant milestone celebration</p>
                        </div>
                        <div className={styles.milestone}>
                            <div className={styles.milestoneIcon}>50</div>
                            <h3>50th Birthday</h3>
                            <p>Honor five decades of amazing memories</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <blockquote className={`${styles.quote} relative z-10`}>
                "The photographs from my daughter's 5th birthday party are absolutely magical! The photographer captured so many beautiful candid moments—the joy in her eyes when she saw her cake, the laughter with her friends—moments we might have missed in the excitement. These photos are treasures we'll cherish forever."
                <footer>- Ananya S.</footer>
            </blockquote>

            {/* CALL TO ACTION SECTION */}
            <section className={`${styles.cta} relative z-10`}>
                <h2 className={styles.ctaTitle}>Ready to Book Your Birthday Photography?</h2>
                <p className={styles.ctaText}>
                    Let us help you preserve the joy and excitement of your special celebration. Contact us today to check availability and customize a package for your birthday event.
                </p>
                <button className={styles.ctaButton}>Book Your Session</button>
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
                            alt="Birthday photograph enlarged view" 
                            className="max-h-[90vh] max-w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Birthday;
