'use client';
import Image from 'next/image';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navTo = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu_open');
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const scrollToSection = (sectionId, e) => {
    if (e) {
      e.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // First, reset the scroll position slightly to ensure smooth scrolling works every time
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

      // Then scroll to the element
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 10);

      setIsMenuOpen(false);
      document.body.classList.remove('menu_open');
      document.body.style.overflow = 'auto';
    }
  };

  const navItems = [
    { id: 'home', label: "What's LineUp" },
    { id: 'lineup-app', label: 'LineUp App' },
    { id: 'how-it-works', label: 'How to use it?' },
    { id: 'whos-lineup', label: 'For who' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div
          className={styles.header_logo}
          onClick={(e) => scrollToSection('home', e)}
          style={{ cursor: 'pointer' }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.header_right}>
        <div
          className={`${styles.header_right_container} ${
            isMenuOpen ? styles.menu_open : ''
          }`}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className={styles.header_right_container_item}
              onClick={(e) => scrollToSection(item.id, e)}
            >
              {item.label}
            </div>
          ))}
          <div
            className={styles.header_right_container_item}
            onClick={() => navTo.push('/beta-signup')}
          >
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
  );
};

export default Header;
