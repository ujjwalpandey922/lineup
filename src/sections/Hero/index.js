'use client';
import { useRouter } from 'next/navigation';
import styles from './index.module.css';

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles.hero}>
      <div className={styles.bg_video_wrapper}>
        <video
          src="hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.bg_video}
        ></video>
        <div className={styles.blur_overlay}></div>
      </div>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          {/* Text Content */}
          <div className={styles.hero_content_text}>
            <div className={styles.lineup_text_container}>
              {/* Text that defines the shape */}
              <div className={styles.hero_content_text_lineup}>LINEUP</div>
              <div className={styles.hero_content_text_subtitle}>
                the new era of human experiences
              </div>
              {/* Clear video that will be masked by the text shape */}
              <video
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.lineup_text_video}
              />
            </div>
          </div>

          <div
            className={styles.hero_content_button}
            onClick={() => router.push('/beta-signup')}
          >
            <div>Join the waitlist</div>
          </div>
        </div>
        <div className={styles.hero_marquee}>
          <div className={styles.hero_marquee_wrapper}>
            <div className={styles.hero_marquee_text}>
              House Party | Party | Music | Afters | Community | Rooftop Party |
              Beach Party | Private Events | Pop-ups | Art & Fashion |Ⓛ| Events
              | House Party | Music | Afters | Community |Ⓛ| Brands | French
              Riviera |Ⓛ| | London | Pop-ups | Art & Fashion | Connections Ⓛ|
              Fashion Show | Milan | Paris | Afters Community | Friends |
              Rooftop Party |Ⓛ|
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
