import Image from 'next/image';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';

const JoinUs = () => {
  const navTo = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.video_background}>
        <video
          src="hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.background_video}
        />
      </div>
      <div className={styles.glass_overlay}></div>
      <div className={styles.content_wrapper}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.content}>
              <div className={styles.heading}>Join us now.</div>
              <div className={styles.description}>
                Work with us to change how the world experience.
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <Image
                src="/join_us.png"
                alt="joinus"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.bottom}
          onClick={() => navTo.push('/beta-signup')}
        >
          <div className={styles.button}>Join the waitlist</div>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
