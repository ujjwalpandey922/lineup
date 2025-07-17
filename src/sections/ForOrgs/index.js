import styles from './index.module.css';

const ForOrgs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <video src={'/organizers.mp4'} autoPlay muted loop />
      </div>
      <div className={styles.right}>
        <div className={styles.container_text}>
          <div className={styles.container_text_title}>
            <div className={styles.hero_video_wrapper}>
              <video
                src="organizers.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.hero_video}
              />
            </div>
            <span className={styles.container_text_title_text}>
              FOR PROFESSIONALS
            </span>
          </div>
          <div className={styles.container_text_description}>
            LineUp puts event hosting on autopilot—no upfront costs or
            middlemen. Book venues and talent with built-in insurance, chat, and
            payments so you can focus on the vibe, not the paperwork. Sell
            tickets in minutes and grow your community effortlessly.
          </div>
        </div>
        <div className={styles.container_text_footer}>
          &quot;A smarter way to book venues, hire talent, and sell
          tickets.&quot;
        </div>
      </div>
    </div>
  );
};

export default ForOrgs;
