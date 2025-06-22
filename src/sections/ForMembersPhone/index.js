import styles from './index.module.css';

const ForMembersPhone = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper}>
                <div className={styles.top_text}>
                    <div className={styles.top_text_heading}>
                        WHATS LINEUP?
                    </div>
                    <div className={styles.top_text_description}>
                        “Going beyond the flyer, knowing the people and culture”
                    </div>
                </div>
                <div className={styles.middle_video_and_text}>
                    <div className={styles.middle_video_and_text_video}>
                        <video src="hero.mp4" autoPlay muted loop playsInline className={styles.middle_video_and_text_video_video}></video>
                    </div>
                    <div className={styles.middle_video_and_text_text}>
                        <div>
                            <div className={styles.middle_video_bg}>
                                <video src="hero.mp4" autoPlay muted loop playsInline className={styles.middle_video_and_text_video_video}></video>
                            </div>
                            <div className={styles.middle_video_and_text_text_heading}>
                               <div>SOCIAL</div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className={styles.bottom_text}>
                    <div className={styles.bottom_text_heading}>
                        <div className={styles.bottom_text_bg_video}>
                            <video src="hero.mp4" autoPlay muted loop playsInline className={styles.bottom_text_bg_video_video}></video>
                        </div>
                        <div className={styles.bottom_text_heading_text}>
                            FOR MEMBERS.
                        </div>
                    </div>
                    <div className={styles.bottom_text_description}>
                        LineUp makes you an insider—discover events that match your vibe, see who’s going, connect with other members, and SECURE ENTRIES TO EVENTS YOU LOVE. so every event feels like hanging out with friends.
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ForMembersPhone;