'use client';

import { useRouter } from 'next/navigation';
import styles from './ThankYouStep.module.css';

const ThankYouStep = ({ onFinish }) => {
  const navTo = useRouter();
  const handleFinish = () => {
    if (onFinish) {
      onFinish();
    } else {
      navTo.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            {/* Logo */}
            <div className={styles.logoContainer}>
              <img
                src="/logo.png"
                alt="LineUp Logo"
                className={styles.logo}
                width={64}
                height={64}
              />
            </div>

            {/* Content */}
            <div className={styles.contentSection}>
              <h1 className={styles.title}>Thanks.</h1>

              <p className={styles.subtitle}>
                We'll keep you updated on the release date and key details about
                LineUp.
              </p>
            </div>

            {/* Finish Button */}
            <button className={styles.finishButton} onClick={handleFinish}>
              Finish
            </button>
          </div>

          {/* Right Section - Video */}
          <div className={styles.rightSection}>
            <div className={styles.videoContainer}>
              <video
                src="/phone-3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouStep;
