"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('menu_open');
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.header_logo}>
                    <Image src="/logo.png" alt="logo" fill style={{ objectFit: 'cover' }}/>
                </div>
            </div>
            <div className={styles.header_right}>
                <div className={`${styles.header_right_container} ${isMenuOpen ? styles.menu_open : ''}`}>
                    <div className={styles.header_right_container_item}>
                        What's LineUp
                    </div>
                    <div className={styles.header_right_container_item}>
                        LineUp App
                    </div>
                    <div className={styles.header_right_container_item}>
                        How to use it?
                    </div>
                    <div className={styles.header_right_container_item}>
                        For who
                    </div>
                    <div className={styles.header_right_container_item}>
                        <div className={styles.header_right_container_item_button}>
                            Join the waitlist
                        </div>
                    </div>
                </div>
                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header;