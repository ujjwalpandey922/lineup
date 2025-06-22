import Image from 'next/image';
import styles from './index.module.css';

const JoinUsPhone = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bg_video}>
                <video src="/hero.mp4" autoPlay loop muted/>
            </div>
            <div className={styles.content}>
                <div className={styles.text_wrapper}>
                    {/* <div className={styles.bg_video_text}>
                        <video src="/hero.mp4" autoPlay loop muted/>
                    </div> */}
                    <div className={styles.text}>
                        <div className={styles.heading}>
                            Join us now
                        </div>
                        <div className={styles.description}>
                            …and work with us to change how the world experiences music.
                        </div>
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <div className={styles.image_container}>
                        <Image src="/join_us_phone.png" alt="joinus" fill style={{objectFit: 'cover'}}/>
                    </div>
                </div>
                <div className={styles.button_wrapper}>
                    <div className={styles.button}>
                        <div className={styles.button_text}>
                            Join the waitlist
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default JoinUsPhone;