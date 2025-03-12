import { motion } from 'framer-motion';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Top Image Grid Section */}
      <section className={styles.imageGrid}>
        <motion.div 
          className={styles.gridImages}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/Images & Videos/About/About_1.jpg" alt="Portrait 1" className={styles.gridImage} />
          <img src="/Images & Videos/About/About_2.jpg" alt="Portrait 2" className={styles.gridImage} />
          <img src="/Images & Videos/About/About_3.jpg" alt="Portrait 3" className={styles.gridImage} />
          <img src="/Images & Videos/About/About_4.jpg" alt="Portrait 4" className={styles.gridImage} />
          <img src="/Images & Videos/About/About_5.jpg" alt="Portrait 5" className={styles.gridImage} />
          <div className={styles.aboutOverlay}>ABOUT</div>
        </motion.div>
      </section>

      {/* Hello Section */}
      <section className={styles.helloSection}>
        <motion.div 
          className={styles.helloContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className={styles.hello}>HELLO</h1>
          <h2 className={styles.name}>I'm Katie!</h2>
          <p className={styles.intro}>
            As a Pittsburgh wedding photographer and senior portrait artist with over 11 years behind the camera, 
            I specialize in creating natural, timeless images that make you do a double-take and say, 
            "Is that really us?" (Spoiler: it absolutely is!)
          </p>
        </motion.div>
      </section>

      {/* Wedding Storyteller Section */}
      <section className={styles.storytellerSection}>
        <motion.div 
          className={styles.sectionContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>YOUR WEDDING DAY STORYTELLER</h2>
          <p className={styles.sectionText}>
            As a seasoned Pittsburgh wedding photographer, I've documented hundreds of "I dos" 
            with an eye for both the grand moments and intimate details. My style preserves the 
            true colors and authentic emotions of your day, with timeless editing that will look 
            as fresh on your 25th anniversary as it does the day you receive your gallery.
          </p>
          <p className={styles.sectionText}>
            I believe great wedding photography is about more than just technical skill – it's about 
            anticipating the perfect shot before it happens. That's why I've mastered the delicate 
            dance of being everywhere and nowhere at once, catching genuine laughs during toasts and 
            quiet tears during first looks, all while sticking to the timeline. And when unexpected 
            weather rolls in? You'll find me already set up with creative lighting solutions and, 
            yes, a trunk full of umbrellas that make for stunning rainy-day portraits.
          </p>
        </motion.div>
      </section>

      {/* Senior Portraits Section */}
      <section className={styles.portraitsSection}>
        <motion.div 
          className={styles.sectionContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>AUTHENTIC SENIOR PORTRAITS</h2>
          <p className={styles.sectionText}>
            High school seniors, this is your moment to shine! I bring the same attention to detail 
            and creative energy to your senior portrait session that I do to wedding days. Together, 
            we'll create images that capture your personality and achievements while having an 
            absolute blast in the process.
          </p>
        </motion.div>
      </section>

      {/* This or That Section */}
      <section className={styles.thisOrThatSection}>
        <motion.div 
          className={styles.thisOrThatContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.thisOrThatTitle}>THIS OR THAT?</h2>
          <div className={styles.preferencesGrid}>
            <div className={styles.preferenceItem}><span className={styles.selected}>STAYING IN</span> vs GOING OUT</div>
            <div className={styles.preferenceItem}><span className={styles.selected}>COFFEE</span> vs TEA</div>
            <div className={styles.preferenceItem}>BEACH vs <span className={styles.selected}>CITY</span></div>
            <div className={styles.preferenceItem}><span className={styles.selected}>COOKIES</span> vs CAKE</div>
            <div className={styles.preferenceItem}>NIGHT OWL vs <span className={styles.selected}>EARLY BIRD</span></div>
            <div className={styles.preferenceItem}>SWEET vs <span className={styles.selected}>SAVORY</span></div>
            <div className={styles.preferenceItem}><span className={styles.selected}>COLOR</span> vs BLACK & WHITE</div>
            <div className={styles.preferenceItem}>LEFTY vs <span className={styles.selected}>RIGHTY</span></div>
            <div className={styles.preferenceItem}><span className={styles.selected}>CANDID</span> vs POSED</div>
            <div className={styles.preferenceItem}><span className={styles.selected}>SUNSET</span> vs SUNRISE</div>
          </div>
        </motion.div>
      </section>

      {/* Instagram Section */}
      <section className={styles.instagramSection}>
        <h2 className={styles.instagramTitle}>see the latest on</h2>
        <h3 className={styles.instagramHandle}>INSTAGRAM</h3>
        <a href="https://www.instagram.com/chitrasangamstudio.123" className={styles.instagramLink}>
          @chitrasangam.123
        </a>
        <div className={styles.instagramGrid}>
          {/* Add your Instagram feed images here */}
        </div>
      </section>
    </div>
  );
}

export default About;
