'use client';

import Image from 'next/image';
import styles from './index.module.css';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LineupFor() {
  const [activeScreen, setActiveScreen] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const screensWrapperRef = useRef(null);
  const phoneScreenRefs = useRef([]);

  // Reset refs (clears array) on every render
  phoneScreenRefs.current = [];

  const addToRefs = (el) => {
    if (el && !phoneScreenRefs.current.includes(el)) {
      phoneScreenRefs.current.push(el);
    }
  };

  // Scroll handler to update activeScreen on mobile scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!screensWrapperRef.current) return;
      if (window.innerWidth > 768) return; // Only run on mobile sizes

      const wrapper = screensWrapperRef.current;
      const wrapperRect = wrapper.getBoundingClientRect();
      const centerX = wrapperRect.left + wrapperRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      phoneScreenRefs.current.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - elCenterX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeScreen) {
        setActiveScreen(closestIndex);
      }
    };

    const refCurrent = screensWrapperRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeScreen]);

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
        'Showcase your talents, connect with venues and professionals, land new gigs—and launch your own events to grow your audience.',
    },
    {
      heading: 'Venues',
      subheading: 'nightclub, bar, restaurant, or any venue.',
      description:
        'List your space, get discovered by top professionals, and book DJs or collectives to fill your venue. Set up entries, sell out nights, and own your city.',
    },
    {
      heading: 'DJS',
      subheading: 'Speak for itself.',
      description:
        "Get booked by the city's hottest professionals, grow your following, or throw your own shows—all from one platform.",
    },
    {
      heading: 'Collectives',
      subheading: 'Collectives of djs or event professionals',
      description:
        'Secure the perfect venue, collaborate with fellow artists, and score exclusive events—LineUp is where your next big night happens.',
    },
  ]);
  useEffect(() => {
    // Center the first item on mobile when component mounts
    if (window.innerWidth <= 768 && screensWrapperRef.current) {
      const wrapper = screensWrapperRef.current;
      const firstItem = phoneScreenRefs.current[0];
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        wrapper.scrollLeft = (itemWidth - wrapperWidth) / 2;
      }
    }
  }, []);
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
        <div className={styles.phone_screens_wrapper} ref={screensWrapperRef}>
          <div className={styles.phone_screens}>
            {data.map((item, index) => (
              <div
                key={index}
                className={`${styles.phone_screen} ${
                  activeScreen === index ? styles.active : ''
                }`}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) setActiveScreen(index);
                }}
                ref={addToRefs}
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
