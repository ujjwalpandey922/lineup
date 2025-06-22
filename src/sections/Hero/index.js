import styles from "./index.module.css";

const Hero = () => {
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
            </div>
            <div className={styles.hero_container}>
                {/* <div className={styles.hero_video_wrapper}>
                    <video
                        src="hero.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={styles.hero_video}
                    ></video>
                </div> */}
                <div className={styles.hero_content}>
                    <div>
                        {/* <video
                            src="hero.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className={styles.bg_video_text}
                        ></video> */}
                        <div className={styles.hero_content_text}>
                        <div>LINEUP</div>
                        <div>The first all in one hub for event organization</div>
                        </div>
                    </div>
                    <div className={styles.hero_content_button}>
                        <div>
                            Join the waitlist
                        </div>
                    </div>
                </div>
                <div className={styles.hero_marquee}>
                    <div className={styles.hero_marquee_wrapper}>
                        <div className={styles.hero_marquee_text}>
                        House Party | Party | Music | Afters | Community | Rooftop Party | Beach Party | Private Events | Pop-ups | Art & Fashion |Ⓛ| Events | House Party | Music | Afters | Community |Ⓛ| Brands | French Riviera |Ⓛ| | London | Pop-ups | Art & Fashion | Connections Ⓛ| Fashion Show | Milan | Paris | Afters Community | Friends | Rooftop Party |Ⓛ|
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;