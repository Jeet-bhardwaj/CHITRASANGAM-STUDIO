import React from 'react';
import styles from './Weeding.module.css';
const Weeding: React.FC = () => {
    return (
        <div className={styles.container}>
            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src="/Images & Videos/CenemeticShort/WhatsApp Video 2025-02-26 at 11.54.04_78da36ac.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.gallery}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_93tVsfPl3-HSLIeNbavpBWZ8wNpMry8GX7z7whlpU1L1967XfeOvzjo&s" alt="Indian Wedding" className={styles.image} />
                <img src="https://t3.ftcdn.net/jpg/07/67/15/78/360_F_767157870_nFwgBHuxZusnCwePm4plBYmir6e5Qh4A.jpg" alt="Indian Wedding" className={styles.image} />
                <img src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=" alt="Indian Wedding" className={styles.image} />
                <img src="https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h" alt="Indian Wedding" className={styles.image} />
                <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg" alt="Indian Wedding" className={styles.image} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zB5ASXfOA7Z3F_49_QdnXA7_sc1b4QyRQxyNueWI578TNhWq20HiYWSK0Xlb8dY25jQ&usqp=CAU" alt="Indian Wedding" className={styles.image} />
                <img src="https://assets.minted.com/image/upload/f_auto,q_auto/Minted_Onsite_Assets/2022/LP/IndianWeddingTraditions_220831_Image01.jpg" alt="Indian Wedding" className={styles.image} />
                <img src="https://www.brides.com/thmb/JgD0sfveJXGR6Vwh-c2Yriw6Z0c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Main-Hindu-Wedding-Traditions-Stephanie-Velez-6cf14a902ea947c09dc0722d29a9224a.jpg" alt="Wedding Celebration" className={styles.image} />
                <img src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=" alt="Wedding Celebration" className={styles.image} />
                <img src="https://img.freepik.com/free-photo/groom-putting-ring-bride-s-finger_1157-338.jpg" alt="Wedding Celebration" className={styles.image} />
                {/* More images */}
            </div>
            <blockquote className={styles.quote}>
                "Katie isn't just a talented photographer, she has a wealth of knowledge about the wedding industry and has a knack for making couples feel comfortable. She's the coolest person, and my favorite part of our wedding (don't tell my husband)." 
                <footer>- Zack</footer>
            </blockquote>
        </div>
    );
};

export default Weeding;
