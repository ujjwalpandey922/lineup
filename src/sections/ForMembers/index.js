import styles from "./index.module.css";

const ForMembers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <video src={"/members.mp4"} autoPlay muted loop />
            </div>
            <div className={styles.right}>
                <div className={styles.container_text}>
                   <div className={styles.container_text_title}>
                        <div className={styles.hero_video_wrapper}>
                            <video
                                src="members.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={styles.hero_video}
                            />
                        </div>
                        <span className={styles.container_text_title_text}>
                            FOR MEMBERS
                        </span>
                    </div>
                   <div className={styles.container_text_description}>LineUp makes you an insider—discover events that match your vibe, see who's going, connect with other members, and SECURE ENTRIES TO EVENTS YOU LOVE. so every event feels like hanging out with friends.</div>
                </div>
                <div className={styles.container_text_footer}>
                    "Going beyond the flyer, knowing the people and culture"
                </div>
            </div>
        </div>
    )
}; 

export default ForMembers;