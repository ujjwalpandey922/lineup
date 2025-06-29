import React from 'react';
import styles from './index.module.css';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.textSection}>
                    <div className={styles.pretext}>
                        {/* <span className={styles.pretextIcon}>{data.pretext_icon}</span> */}
                        <span className={styles.pretextText}>{data.pretext_text}</span>
                    </div>
                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.description}>{data.description}</p>
                </div>
                <div className={styles.mediaSection}>
                    <div className={styles.imageContainer}>
                        {data.isVideo ? (
                            <video 
                                src={data.video} 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                className={styles.image}
                            />
                        ) : (
                            <img 
                                src={data.video} 
                                alt={data.title}
                                className={styles.image}
                            />
                        )}
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;