'use client';
import Image from 'next/image';
import styles from './index.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LineupFor() {
  const [activeScreen, setActiveScreen] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [data] = useState([
    {
      heading: 'Members',
      subheading: 'Attendees & promoters',
      description:
        'Find the best events, host your own gigs in seconds, and earn commissions by sharing tickets with friends.',
    },
    {
      heading: 'Labels',
      subheading: 'Music labels, event labels or brands',
      description:
        'Showcase your talents, connect with venues and organizers, land new gigs—and launch your own events to grow your audience.',
    },
    {
      heading: 'Venues',
      subheading: 'nightclub, bar, restaurant, or any venue.',
      description:
        'List your space, get discovered by top organizers, and book DJs or collectives to fill your venue. Set up entries, sell out nights, and own your city.',
    },
    {
      heading: 'DJS',
      subheading: 'Speak for itself.',
      description:
        "Get booked by the city's hottest organizers, grow your following, or throw your own shows—all from one platform.",
    },
    {
      heading: 'Collectives',
      subheading: 'Collectives of djs or event organizers',
      description:
        'Secure the perfect venue, collaborate with fellow artists, and score exclusive events—LineUp is where your next big night happens.',
    },
  ]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.heading}>Who&apos;s LineUp for?</div>

      <div className={styles.content}>
        <div className={styles.phone_screens_wrapper}>
          <div className={styles.phone_screens}>
            {data.map((item, index) => (
              <div
                key={index}
                className={`${styles.phone_screen} ${
                  activeScreen === index ? styles.active : ''
                }`}
                onClick={() => setActiveScreen(index)}
              >
                <Image
                  src={`/${item.heading.toLowerCase()}.png`}
                  alt={item.heading.toLowerCase()}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.text}>
          <div className={styles.text_content}>
            <h2 className={styles.text_content_heading}>
              {data[activeScreen].heading}
            </h2>
            <p className={styles.text_content_subheading}>
              {data[activeScreen].subheading}
            </p>
            <p className={styles.text_content_description}>
              {data[activeScreen].description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LineupFor;
