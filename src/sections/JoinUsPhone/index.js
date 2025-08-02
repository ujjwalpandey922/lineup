'use client';

import Image from 'next/image';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';

const JoinUsPhone = () => {
  const navTo = useRouter();
  return (
    <div className={styles.container}>
      {/* Blurred background video */}
      <div className={styles.bg_video}>
        <video src="/hero.mp4" autoPlay loop muted playsInline />
      </div>

      {/* Text masked with video */}
      <div className={styles.masked_text_video}>
        <video src="/hero.mp4" autoPlay loop muted playsInline />
      </div>

      {/* Image stays at the bottom center */}
      <div className={styles.image_wrapper}>
        <div className={styles.image_container}>
          <Image
            src="/join_us_phone.png"
            alt="joinus"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Button below image */}
      <div className={styles.button_wrapper}>
        <div
          className={styles.button}
          onClick={() => navTo.push('/beta-signup')}
        >
          <div className={styles.button_text}>Join the waitlist</div>
          <video
            src="hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.button_text_mobile_button}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPhone;
