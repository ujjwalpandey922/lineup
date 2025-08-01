import styles from './index.module.css';

const ForOrgsPhone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div className={styles.top_text}>
          <div className={styles.top_text_heading}>WHATS LINEUP?</div>
          <div className={styles.top_text_description}>
            “A smarter way to book venues, hire talent, and sell tickets.”
          </div>
        </div>
        <div className={styles.middle_video_and_text}>
          <div className={styles.middle_video_and_text_video}>
            <video
              src="Professional_video_v2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={styles.middle_video_and_text_video_video}
            ></video>
          </div>
          {/* // SOCIAL TEXT THAT WAS AT THE RIGHT HAND SIDE */}
        </div>
        <div className={styles.bottom_text}>
          <div className={styles.bottom_text_heading}>
            <div className={styles.bottom_text_bg_video}>
              <video
                src="Professional_video_v2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className={styles.bottom_text_bg_video_video}
              ></video>
            </div>
            <div className={styles.bottom_text_heading_text}>
              FOR PROFESSIONALS.
            </div>
          </div>
          <div className={styles.bottom_text_description}>
            LineUp puts event hosting on autopilot—no upfront costs or
            middlemen. Book venues and talent with built-in insurance, chat, and
            payments so you can focus on the vibe, not the paperwork. Sell
            tickets in minutes and grow your community effortlessly.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForOrgsPhone;
{
  /* <div className={styles.middle_video_and_text_text}>
            <div>
              <div className={styles.middle_video_bg}>
                <video
                  src="organizers.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.middle_video_and_text_video_video}
                ></video>
              </div>
              <div className={styles.middle_video_and_text_text_heading}>
                <div>ALL IN ONE</div>
              </div>
            </div>
          </div> */
}
