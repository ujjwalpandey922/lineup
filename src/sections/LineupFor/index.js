"use client"
import Image from 'next/image';
import styles from './index.module.css';
import { useState } from 'react';

function LineupFor() {
    const [activeScreen, setActiveScreen] = useState(0);
    const [data,setData] = useState([
        {
            heading: "Members",
            subheading: "Attendees & promoters",
            description: "Find the best events, host your own gigs in seconds, and earn commissions by sharing tickets with friends."
        },
        {
            heading: "Labels",
            subheading: "Music labels, event labels or brands",
            description: "Showcase your talents, connect with venues and organizers, land new gigs—and launch your own events to grow your audience."
        },
        {
            heading: "Venues",
            subheading: "nightclub, bar, restaurant, or any venue.",
            description: "List your space, get discovered by top organizers, and book DJs or collectives to fill your venue. Set up entries, sell out nights, and own your city."
        },
        {
            heading: "DJS",
            subheading: "Speak for itself.",
            description: "Get booked by the city’s hottest organizers, grow your following, or throw your own shows—all from one platform."
        },
        {
            heading: "Collectives",
            subheading: "Collectives of djs or event organizers",
            description: "Secure the perfect venue, collaborate with fellow artists, and score exclusive events—LineUp is where your next big night happens."
        }
    ])
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                    Who’s LineUp for?
            </div>
            <div className={styles.content}>
                <div className={styles.phone_screens}>
                    <div>
                        <div className={`${styles.phone_screen} ${activeScreen === 0 ? styles.active : ''}`} onClick={() => setActiveScreen(0)}>
                            <Image src="/members.png" alt="members" fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className={`${styles.phone_screen} ${activeScreen === 1 ? styles.active : ''}`} onClick={() => setActiveScreen(1)}>
                            <Image src="/labels.png" alt="labels" fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className={`${styles.phone_screen} ${activeScreen === 2 ? styles.active : ''}`} onClick={() => setActiveScreen(2)}>
                            <Image src="/venues.png" alt="venues" fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className={`${styles.phone_screen} ${activeScreen === 3 ? styles.active : ''}`} onClick={() => setActiveScreen(3)}>
                            <Image src="/djs.png" alt="djs" fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className={`${styles.phone_screen} ${activeScreen === 4 ? styles.active : ''}`} onClick={() => setActiveScreen(4)}>
                            <Image src="/collectives.png" alt="collectives" fill style={{ objectFit: 'cover' }}/>
                        </div>
                    </div>
                </div>
                <div className={styles.text}>
                    <div className={styles.text_content}>
                        <div className={styles.text_content_heading}>
                            {data[activeScreen].heading}
                        </div>
                        <div className={styles.text_content_subheading}>
                            {data[activeScreen].subheading}
                        </div>
                        <div className={styles.text_content_description}>
                            {data[activeScreen].description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default LineupFor;