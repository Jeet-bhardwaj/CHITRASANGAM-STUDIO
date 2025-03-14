import styles from "./HomeWedding.module.css";

const HomeWedding = () => {
  return (
    <div className={styles.collageContainer}>
      
      <div className={styles.gridContainer}>
        {/* First Column */}
        <div className={styles.columnOne}>
          
        <p className={styles.headerText}>
          YOUR WEDDING DAY DESERVES A PHOTOGRAPHER WHO'S AS{" "}
          <span className={styles.highlight}>EXCITED</span> AS YOU ARE!
        </p>
          <img src="/Images & Videos/Wedding/weddingImages/weddingImages_1.JPG" alt="Wedding 1" className={styles.image} />
          <img src="/Images & Videos/Wedding/weddingImages/weddingImages_2.JPG" alt="Wedding 2" className={styles.image} />
        </div>

        {/* Second Column */}
        <div className={`${styles.columnTwo} `}>
          <img src="/Images & Videos/Wedding/weddingImages/weddingImages_3.JPG" alt="Wedding 3" className={styles.imageLarge} />
        </div>

        {/* Third Column */}
        <div className={styles.columnThree}>
          <img src="/Images & Videos/Wedding/weddingImages/weddingImages_4.JPG" alt="Wedding 4" className={styles.image} />
          <div className={styles.quoteContainer}>
            <p className={styles.elegantQuote}>
              "Anil Gupta isn't just a talented photographer, she has a wealth of knowledge about
              the wedding industry and has a knack for making couples feel comfortable.
              He is the coolest person, and my favorite part of our wedding ."
            </p>
          </div>
          <img src="/Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_2.jpg" alt="Wedding 6" className={styles.image} />
        </div>

        {/* Fourth Column */}
        <div className={styles.columnFour}>
          <img src="/Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_1.JPG" alt="Wedding 5" className={styles.image} />
          <img src="/Images & Videos/Wedding/weddingImages/weddingImages_4.JPG" alt="Wedding 4" className={styles.image} />
          <img src="/Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_3.JPG" alt="Wedding 6" className={styles.image} />
          <img src="/Images & Videos/Wedding/weddingImages/LandscapeWeddingImages_2.jpg" alt="Wedding 6" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default HomeWedding;
