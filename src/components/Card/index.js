import Image from "next/image";
import styles from "./index.module.css";

const Card = ({data}) => {
    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.pretext}>
                <div className={styles.pretext_icon}>
                    <div className={styles.pretext_icon_image}>
                        <Image src={data.pretext_icon} alt="pretext_icon" fill style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
                <div className={styles.pretext_text}>
                    {data.pretext_text}
                </div>
            </div>
            <div className={styles.title}>
                    {data.title}
            </div>
            <div className={styles.description}>
            {data.description}
            </div>
        </div>
        <div className={styles.right}>
            {data.isVideo ? <div className={styles.right_video}>
                <video src={data.video} autoPlay muted loop />
            </div> : <div className={styles.right_image}>
                <Image src={data.video} alt="right_image" fill style={{ objectFit: 'cover' }}/>
            </div>}
        </div>
    </div>
};
export default Card;