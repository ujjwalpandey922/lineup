"use client";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";

const HowTo = () => {
    const contentWrapperRef = useRef(null);
    const scrollbarRef = useRef(null);
    const scrollbarThumbRef = useRef(null);
    const [title, setTitle] = useState("HOW TO CREATE EVENTS ON LINEUP?");

    useEffect(() => {
        const handleResize = () => {
            setTitle(window.innerWidth < 768 ? "CREATING EVENTS ON LINEUP" : "HOW TO CREATE EVENTS ON LINEUP?");
        };

        handleResize(); // Set initial title
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const contentWrapper = contentWrapperRef.current;
        const scrollbar = scrollbarRef.current;
        const scrollbarThumb = scrollbarThumbRef.current;

        const handleScroll = () => {
            if (!contentWrapper || !scrollbar || !scrollbarThumb) return;
            
            const scrollWidth = contentWrapper.scrollWidth - contentWrapper.clientWidth;
            const scrollLeft = contentWrapper.scrollLeft;
            const scrollPercentage = scrollLeft / scrollWidth;
            
            // Calculate the maximum distance the thumb can move
            const maxThumbDistance = scrollbar.offsetWidth - scrollbarThumb.offsetWidth;
            // Move the thumb based on scroll percentage
            scrollbarThumb.style.transform = `translateX(${scrollPercentage * maxThumbDistance}px)`;
        };

        contentWrapper.addEventListener('scroll', handleScroll);
        return () => contentWrapper.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.header_title}>
                {title}
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.content_wrapper} ref={contentWrapperRef}>
                <div className={styles.content_box}>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>1</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Create Your Event</span>
                        </div>
                        <div className={styles.step_description}>
                            Name your event, choose a date and time, and decide on its visibility—public, invitation-only, or private.
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>2</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Set Entries</span>
                        </div>
                        <div className={styles.step_description}>
                            Create multiple entry types with name, quantity, price, and details—or use our RSVP system.
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>3</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Book a Venue & Performers</span>
                        </div>
                        <div className={styles.step_description}>
                            Use your projected ticket revenue to pay venues and performers directly via the app. 
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>4</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Customize Your Event</span>
                        </div>
                        <div className={styles.step_description}>
                            Set a refund policy, offer affiliate rewards, or add your own venue to organize without booking.
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>5</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Publish & Check-In</span>
                        </div>
                        <div className={styles.step_description}>
                        Publish your event and start selling entries. On the day, use our built-in ticket scanner to verify attendance. 
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.step_number}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_number_text}>6</span>
                        </div>
                        <div className={styles.step_title}>
                            <div className={styles.hero_video_wrapper}>
                                <video
                                    src="how_to.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.hero_video}
                                />
                            </div>
                            <span className={styles.step_title_text}>Get Paid, Engage, & Wrap up</span>
                        </div>
                        <div className={styles.step_description}>
                            Drop the event gallery, share event snaps with your attendees, and keep the hype alive.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scrollbar_container}>
                <div className={styles.scrollbar_video_wrapper}>
                    <video
                        src="how_to.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={styles.scrollbar_video}
                    />
                </div>
                <div className={styles.custom_scrollbar} ref={scrollbarRef}>
                    <div className={styles.scrollbar_thumb} ref={scrollbarThumbRef}></div>
                </div>
            </div>
        </div>
    </div>
}  

export default HowTo;