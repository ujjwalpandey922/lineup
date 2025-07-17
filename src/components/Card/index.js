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
        top: 180 + (index + 1) * 20,
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
              <>
                {Array.isArray(data.video) ? (
                  <div className={styles.ImageContainerArray}>
                    <Image
                      src={data.video[0]}
                      alt={data.title}
                      className={`${styles.image} ${styles.imageBack}`}
                      width={500}
                      height={500}
                    />
                    <Image
                      src={data.video[1]}
                      alt={data.title}
                      className={`${styles.image} ${styles.imageFront}`}
                      width={500}
                      height={500}
                    />
                  </div>
                ) : (
                  <Image
                    src={data.video}
                    alt={data.title}
                    className={styles.image}
                    width={500}
                    height={500}
                  />
                )}
              </>
            )}
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
