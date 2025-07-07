'use client';
import styles from './index.module.css';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const HowTo = () => {
  const contentWrapperRef = useRef(null);
  const scrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [title, setTitle] = useState('HOW TO CREATE EVENTS ON LINEUP?');

  // Step data array - moved outside component to prevent recreation on every render
  const stepsData = useMemo(
    () => [
      {
        id: 1,
        title: 'Create Your Event',
        description:
          'Name your event, choose a date and time, and decide on its visibility—public, invitation-only, or private.',
      },
      {
        id: 2,
        title: 'Set Entries',
        description:
          'Create multiple entry types with name, quantity, price, and details—or use our RSVP system.',
      },
      {
        id: 3,
        title: 'Book a Venue & Performers',
        description:
          'Use your projected ticket revenue to pay venues and performers directly via the app.',
      },
      {
        id: 4,
        title: 'Customize Your Event',
        description:
          'Set a refund policy, offer affiliate rewards, or add your own venue to organize without booking.',
      },
      {
        id: 5,
        title: 'Publish & Check-In',
        description:
          'Publish your event and start selling entries. On the day, use our built-in ticket scanner to verify attendance.',
      },
      {
        id: 6,
        title: 'Get Paid, Engage, & Wrap up',
        description:
          'Drop the event gallery, share event snaps with your attendees, and keep the hype alive.',
      },
    ],
    []
  );

  // Memoized title calculation
  const getTitle = useCallback((width) => {
    return width < 768
      ? 'CREATING EVENTS ON LINEUP'
      : 'HOW TO CREATE EVENTS ON LINEUP?';
  }, []);

  // Optimized resize handler
  const handleResize = useCallback(() => {
    setTitle(getTitle(window.innerWidth));
  }, [getTitle]);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    const contentWrapper = contentWrapperRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;

    if (!contentWrapper || !scrollbar || !scrollbarThumb) return;

    const scrollWidth = contentWrapper.scrollWidth - contentWrapper.clientWidth;
    const scrollLeft = contentWrapper.scrollLeft;
    const scrollPercentage = scrollLeft / scrollWidth;

    // Calculate the maximum distance the thumb can move
    const maxThumbDistance = scrollbar.offsetWidth - scrollbarThumb.offsetWidth;
    // Move the thumb based on scroll percentage
    scrollbarThumb.style.transform = `translateX(${
      scrollPercentage * maxThumbDistance
    }px)`;
  }, []);

  // Video component to avoid repetition
  const VideoBackground = ({ className }) => (
    <div className={styles.hero_video_wrapper}>
      <video
        src="how_to.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    </div>
  );

  // Step component for better organization
  const Step = ({ step }) => (
    <div className={styles.step}>
      <div className={styles.step_number}>
        <VideoBackground className={styles.hero_video} />
        <span className={styles.step_number_text}>{step.id}</span>
      </div>
      <div className={styles.step_title}>
        <VideoBackground className={styles.hero_video} />
        <span className={styles.step_title_text}>{step.title}</span>
      </div>
      <div className={styles.step_description}>{step.description}</div>
    </div>
  );

  // Resize effect
  useEffect(() => {
    handleResize(); // Set initial title
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Scroll effect
  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    if (!contentWrapper) return;

    contentWrapper.addEventListener('scroll', handleScroll);
    return () => contentWrapper.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_title}>{title}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper} ref={contentWrapperRef}>
          <div className={styles.content_box}>
            {stepsData.map((step) => (
              <Step key={step.id} step={step} />
            ))}
          </div>
        </div>
        <div className={styles.scrollbar_container}>
          <VideoBackground className={styles.scrollbar_video} />
          <div className={styles.custom_scrollbar} ref={scrollbarRef}>
            <div
              className={styles.scrollbar_thumb}
              ref={scrollbarThumbRef}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
