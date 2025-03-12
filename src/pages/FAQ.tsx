import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  image?: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is your booking process?",
      answer: "Booking with us is simple! First, reach out through our contact form or email. We'll check availability for your date, then send a proposal based on your needs. Once you're happy with the details, a 30% deposit secures your date, and we'll send a contract to finalize everything.",
      image: "Images & Videos/HomePhotos/Topcarousel/Topcarousel_1.JPG"
    },
    {
      question: "How far in advance should I book?",
      answer: "For weddings, we recommend booking 6-12 months in advance to ensure availability, especially during peak season (May-October). For other sessions like family portraits or maternity shoots, 1-3 months advance booking is typically sufficient.",
      image: "Images & Videos/Wedding/weddingImages/weddingImages_3.JPG"
    },
    {
      question: "What should we wear for our photo session?",
      answer: "Choose outfits that make you feel confident and comfortable! Coordinate colors rather than matching exactly. Avoid large logos or busy patterns that can be distracting. We're happy to provide personalized recommendations during your pre-session consultation.",
      image: "Images & Videos/HomePhotos/Topcarousel/Topcarousel_2.JPG"
    },
    {
      question: "How long until we receive our photos?",
      answer: "You'll receive a few preview images within 1 week after your session. For full galleries, delivery times vary by session type: 2-3 weeks for portrait sessions, and 6-8 weeks for weddings. All images are professionally edited and delivered in high resolution via an online gallery.",
      image: "Images & Videos/Wedding/weddingImages/weddingImages_2.JPG"
    },
    {
      question: "Do you offer video services?",
      answer: "Yes! We offer both photography and videography services. Our video packages can be added to any photography package or booked separately. Our cinematic approach ensures your special moments are captured beautifully in motion.",
      image: "Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_1.JPG"
    },
    {
      question: "What happens if there's bad weather on our shoot day?",
      answer: "For outdoor sessions, we keep a close eye on the forecast. If severe weather is expected, we'll reschedule at no additional cost. Sometimes, overcast days actually produce beautiful, soft lighting! For wedding days, we always have backup plans and equipment for various weather conditions.",
      image: "Images & Videos/HomePhotos/Topcarousel/Topcarousel_5.JPG"
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>Everything you need to know about our photography services</p>
      </div>
      
      <div className={styles.faqGrid}>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className={styles.icon}>
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.faqImageContainer}>
          {activeIndex !== null && faqItems[activeIndex].image && (
            <img 
              src={faqItems[activeIndex].image} 
              alt={faqItems[activeIndex].question}
              className={styles.faqImage} 
            />
          )}
          {activeIndex === null && (
            <div className={styles.imageCollage}>
              <img src="Images & Videos/Wedding/weddingImages/weddingImages_4.JPG" alt="Photography collage 1" />
              <img src="Images & Videos/HomePhotos/Topcarousel/Topcarousel_3.JPG" alt="Photography collage 2" />
              <img src="Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_2.jpg" alt="Photography collage 3" />
              <img src="Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_3.JPG" alt="Photography collage 4" />
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.contactSection}>
        <h2>Still have questions?</h2>
        <p>We're here to help! Reach out to us directly and we'll be happy to assist you.</p>
        <a href="/contact" className={styles.contactButton}>Contact Us</a>
      </div>
    </div>
  );
};

export default FAQ;
