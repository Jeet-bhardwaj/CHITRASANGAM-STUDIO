import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Maternity.module.css';

const Maternity: React.FC = () => {
  // Update to include more images and categorize them
  const allImages = [
    { src: '/Images & Videos/Maternity/Maternity_1.jpg', category: 'studio' },
    { src: '/Images & Videos/Maternity/Maternity_2.jpg', category: 'outdoor' },
    { src: '/Images & Videos/Maternity/Maternity_3.jpg', category: 'studio' },
    { src: '/Images & Videos/Maternity/Maternity_4.jpg', category: 'outdoor' },
    { src: '/Images & Videos/Maternity/Maternity_5.jpg', category: 'family' },
    { src: '/Images & Videos/Maternity/Maternity_6.jpg', category: 'family' },
    { src: '/Images & Videos/Maternity/Maternity_1.jpg', category: 'outdoor' },
    { src: '/Images & Videos/Maternity/Maternity_2.jpg', category: 'studio' },
  ];

  const [images, setImages] = useState(allImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showForm, setShowForm] = useState(false);
  
  const testimonials = [
    {
      quote: "The maternity photoshoot exceeded all our expectations. The photos captured this special time so beautifully!",
      author: "Sarah M.",
      week: "32 weeks pregnant"
    },
    {
      quote: "I felt so comfortable and beautiful during my session. The photos are something we'll cherish forever.",
      author: "Jessica T.",
      week: "30 weeks pregnant"
    },
    {
      quote: "Initially I was nervous about a maternity shoot, but the photographer made me feel so at ease. The results are stunning!",
      author: "Emily R.",
      week: "34 weeks pregnant"
    }
  ];

  
    


  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Filter gallery images
  const filterImages = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setImages(allImages);
    } else {
      setImages(allImages.filter(img => img.category === category));
    }
  };

  // Carousel controls
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.maternityContainer}>
      {/* Enhanced Hero Section */}
      <motion.div 
        className={styles.maternityHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.maternityTitle}
        >
          Maternity Photography
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.maternitySubtitle}
        >
          Capturing the beauty and grace of motherhood
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className={styles.heroButton} onClick={() => setShowForm(true)}>Book Your Session</button>
        </motion.div>
      </motion.div>

      {/* Description Section */}
      <div className={styles.maternityDescription}>
        <h2>Celebrate Your Journey to Motherhood</h2>
        <p>
          Our maternity photography sessions are designed to celebrate the beauty of your pregnancy journey. 
          We create timeless and elegant portraits that capture this special time in your life.
          Each session is tailored to your personal style, ensuring your photos are as unique as your journey.
        </p>
      </div>

      {/* Experience Section */}
      <div className={styles.experienceSection}>
        <div className={styles.experienceImage}>
          <img src="/Images & Videos/Maternity/Maternity_3.jpg" alt="Maternity session experience" />
        </div>
        <div className={styles.experienceContent}>
          <h2>The Maternity Session Experience</h2>
          <div className={styles.experienceStep}>
            <span className={styles.stepNumber}>1</span>
            <div>
              <h3>Consultation</h3>
              <p>We'll discuss your vision, preferred style, and outfit options to create your perfect maternity photos.</p>
            </div>
          </div>
          <div className={styles.experienceStep}>
            <span className={styles.stepNumber}>2</span>
            <div>
              <h3>The Photoshoot</h3>
              <p>Relax and enjoy your session with gentle posing guidance to create flattering, beautiful portraits.</p>
            </div>
          </div>
          <div className={styles.experienceStep}>
            <span className={styles.stepNumber}>3</span>
            <div>
              <h3>Gallery Delivery</h3>
              <p>Receive your professionally edited images in an online gallery within two weeks of your session.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Section with Filters */}
      <div className={styles.gallerySection}>
        <h2>Maternity Portfolio</h2>
        <div className={styles.galleryFilters}>
          <button 
            className={activeFilter === 'all' ? styles.activeFilter : ''}
            onClick={() => filterImages('all')}
          >
            All Photos
          </button>
          <button 
            className={activeFilter === 'studio' ? styles.activeFilter : ''}
            onClick={() => filterImages('studio')}
          >
            Studio
          </button>
          <button 
            className={activeFilter === 'outdoor' ? styles.activeFilter : ''}
            onClick={() => filterImages('outdoor')}
          >
            Outdoor
          </button>
          <button 
            className={activeFilter === 'family' ? styles.activeFilter : ''}
            onClick={() => filterImages('family')}
          >
            Family
          </button>
        </div>
        <motion.div 
          className={styles.maternityGallery}
          layout
        >
          <AnimatePresence>
            {images.map((img, index) => (
              <motion.div 
                key={img.src + index}
                className={styles.galleryItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img.src)}
                layout
              >
                <img src={img.src} alt={`Maternity portrait ${index + 1}`} />
                <div className={styles.categoryLabel}>{img.category}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialCarousel} ref={carouselRef}>
          <button className={styles.carouselButton} onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          
          <div className={styles.testimonialWindow}>
            <div 
              className={styles.testimonialSlider} 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialSlide}>
                  <div className={styles.testimonial}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p>{testimonial.quote}</p>
                    <FaQuoteRight className={styles.quoteIcon} />
                    <h4>{testimonial.author}</h4>
                    <span className={styles.pregnancyWeek}>{testimonial.week}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className={styles.carouselButton} onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        
        <div className={styles.testimonialDots}>
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.testimonialDot} ${index === currentTestimonial ? styles.activeDot : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>

    

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className={styles.imageModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className={styles.modalContent} 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={e => e.stopPropagation()}
          >
            <span className={styles.closeButton} onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Enlarged maternity portrait" />
          </motion.div>
        </motion.div>
      )}

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            className={styles.formModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div 
              className={styles.formContent}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <span className={styles.closeButton} onClick={() => setShowForm(false)}>&times;</span>
              <h2>Book Your Maternity Session</h2>
              <form className={styles.bookingForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" id="dueDate" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="package">Preferred Package</label>
                  <select id="package">
                    <option value="">Select a package</option>
                    <option value="essential">Essential ($299)</option>
                    <option value="premium">Premium ($499)</option>
                    <option value="luxury">Luxury ($799)</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Information</label>
                  <textarea id="message" rows={4}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Submit Request</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Maternity;
