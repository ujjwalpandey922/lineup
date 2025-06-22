import Image from 'next/image';
import styles from './index.module.css';

const Footer =()=>{
    return <div className={styles.container}>
        <div className={styles.bg_video_wrapper}>
            <video className={styles.videoBackground} autoPlay muted loop src="hero.mp4"></video>
        </div>
        <div className={styles.content_wrapper}>
            <div className={styles.videoBackground_box}>
                <video autoPlay muted loop src="hero.mp4"></video>
            </div>
            <div className={styles.glassBox}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="LineUp Logo" fill styles={{objectFit: 'cover'}} />
                    </div>
                    <div className={styles.tagline}>
                        The New Era of Human Experiences
                    </div>
                    <div className={styles.contactSection}>
                        <div className={styles.contact_left}>
                            <div className={styles.contact_left_heading}>
                                Contact details
                            </div>
                            <div className={styles.contact_left_description}>
                                social@lineup-events.com
                            </div>
                        </div>
                        <div className={styles.contact_right}>
                            <div className={styles.contact_right_heading}>
                                <div className={styles.contact_right_heading_text}>
                                    INSTAGRAM
                                </div>
                                <div className={styles.contact_right_heading_text}>
                                    LINKEDIN
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_line}></div>
                    <div className={styles.footer}>
                        <div className={styles.footer_text}>
                            © 2025 LineUp World Inc. All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;