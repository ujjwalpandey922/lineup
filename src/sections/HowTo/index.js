'use client';
import useWindowWidth from '@/hooks/useWindowWidth';
import styles from './index.module.css';
import { useEffect, useRef, useCallback, useMemo } from 'react';
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
const HowTo = () => {
  const contentWrapperRef = useRef(null);
  const scrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const width = useWindowWidth();

  const isMobile = width < 768;
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
        <div className={styles.header_title}>
          {' '}
          {isMobile
            ? 'HOW TO CREATE EVENTS?'
            : 'HOW TO CREATE EVENTS ON LINEUP?'}
        </div>
      </div>
      <div className={styles.content}>
        {isMobile ? (
          <MobileSteps steps={stepsData} />
        ) : (
          <>
            {/* original desktop scrollable steps with videos */}
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
          </>
        )}
      </div>
    </div>
  );
};

export default HowTo;
const MobileSteps = ({ steps }) => {
  return (
    <div className={styles.mobileStepsContainer}>
      {steps.map((step, i) => (
        <div
          key={step.id}
          className={`${styles.mobileStep} ${
            i % 2 === 0 ? styles.textLeft : styles.textRight
          }`}
        >
          <div className={styles.mobileStepNumber}>
            <VideoBackground className={styles.mobileHeroVideo} />
            <span className={styles.mobileStepNumberText}>
              {step.id}. {step.title} {i === 2 && <span>optional</span>}
            </span>
          </div>
          <div
            className={`${styles.mobileStepDescription} ${
              i % 2 !== 0 ? styles.marginLeftAuto : styles.marginRightAuto
            }`}
          >
            {step.description}
          </div>
        </div>
      ))}
    </div>
  );
};
