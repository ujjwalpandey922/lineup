import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const Card = ({ data, index, tab }) => {
  return (
    <div
      className={styles.card}
      style={{
        zIndex: 30 + index,
        position: 'sticky',
        marginBottom: '20px', // Consistent small margin
      }}
    >
      <div className={styles.cardContent}>
        <div className={styles.textSection}>
          <div className={styles.pretext}>
            <Image
              src={data.pretext_icon}
              className={styles.pretextImage}
              alt={data.pretext_text}
              width={30}
              height={30}
            />
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
              <img src={data.video} alt={data.title} className={styles.image} />
            )}
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
