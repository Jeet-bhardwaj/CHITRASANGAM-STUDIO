import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './NewBornBaby.module.css';

const NewBornBaby = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heroTitle}
          >
            New Born Baby <span className={styles.highlight}>Photography</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.heroSubtitle}
          >
            Capturing those precious first moments that pass in the blink of an eye
          </motion.p>
        </div>
        <img 
          src="/Images & Videos/NewBornBaby/NewBornBaby_1.jpg" 
          alt="New Born Baby Photography" 
          className={styles.heroImage}
        />
      </section>

      {/* Introduction Section */}
      <motion.section 
        className={styles.introSection}
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <div className={styles.introContainer}>
          <h2 className={`${styles.sectionTitle} ${styles.scriptHeading}`}>
            Your Baby's First Portraits
          </h2>
          <p className={styles.introParagraph}>
            The first few weeks of your baby's life are fleeting and precious. Our newborn photography sessions 
            are designed to capture these magical moments in a safe, comfortable environment. With careful posing, 
            gentle handling, and creative vision, we create timeless images of your little one that you'll treasure forever.
          </p>
          <p className={styles.introParagraph}>
            Every detail—from their tiny fingers and toes to those peaceful sleeping expressions—deserves 
            to be documented with artistic care and professional expertise.
          </p>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <motion.h2 
          className={`${styles.sectionTitle} ${styles.centeredTitle}`}
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          Gallery
        </motion.h2>
        
        <motion.div 
          className={styles.galleryGrid}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Using images 1-9 from the NewBornBaby folder */}
          {[...Array(9)].map((_, i) => (
            <motion.div 
              key={i} 
              className={styles.galleryItem}
              variants={imageAnimation}
            >
              <img 
                src={`/Images & Videos/NewBornBaby/NewBornBaby_${i + 1}.jpg`} 
                alt={`New Born Baby ${i + 1}`} 
                className={styles.galleryImage}
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "/Images & Videos/NewBornBaby/NewBornBaby_1.jpg";
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section 
        className={styles.servicesSection}
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <div className={styles.servicesContainer}>
          <h2 className={`${styles.sectionTitle} ${styles.scriptHeading}`}>Our Newborn Sessions</h2>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌙</div>
              <h3 className={styles.serviceTitle}>Classic Newborn</h3>
              <p className={styles.serviceDescription}>
                Our signature session focused on capturing your baby in natural poses, using soft props
                and gentle wrapping techniques. Perfect for babies under 2 weeks old.
              </p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>👨‍👩‍👧</div>
              <h3 className={styles.serviceTitle}>Family Connection</h3>
              <p className={styles.serviceDescription}>
                Beautiful portraits that include parents, siblings, and even pets with your newborn,
                capturing the love and connection of your growing family.
              </p>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌈</div>
              <h3 className={styles.serviceTitle}>Milestone Package</h3>
              <p className={styles.serviceDescription}>
                Document your baby's entire first year with a series of sessions capturing newborn,
                3 months, 6 months, and 1-year milestones.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialContainer}>
          <motion.div 
            className={styles.testimonialCard}
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            <div className={styles.quoteContainer}>
              <p className={styles.elegantQuote}>
                "The newborn photo session was such a wonderful experience. Our photographer was 
                incredibly patient and gentle with our baby, and the photos captured all those tiny 
                details we never want to forget. They're absolutely priceless."
              </p>
              <p className={styles.testimonialAuthor}>— Maya & James, New Parents</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.ctaContainer}
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <h2 className={styles.ctaTitle}>Ready to book your newborn session?</h2>
          <p className={styles.ctaText}>
            The ideal time to photograph newborns is within the first two weeks after birth.
            Contact us today to secure your due date on our calendar!
          </p>
          <button className={styles.ctaButton}>Book Your Session</button>
        </motion.div>
      </section>
    </div>
  );
};

export default NewBornBaby;
