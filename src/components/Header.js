"use client";
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="LineUp Logo" />
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
        
        <nav className={mobileMenuOpen ? 'mobile-visible' : ''}>
          <ul>
            <li><button onClick={() => scrollToSection('lineup-app')}>LineUp App</button></li>
            <li><button onClick={() => scrollToSection('whos-lineup')}>Who's LineUp For?</button></li>
            <li><button onClick={() => scrollToSection('how-it-works')}>How It Works</button></li>
            <li><button onClick={() => scrollToSection('join-us')}>Join Us</button></li>
          </ul>
        </nav>
        
        <button className="cta-button">Download App</button>
      </div>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('lineup-app')}>LineUp App</button>
          <button onClick={() => scrollToSection('whos-lineup')}>Who's LineUp For?</button>
          <button onClick={() => scrollToSection('how-it-works')}>How It Works</button>
          <button onClick={() => scrollToSection('join-us')}>Join Us</button>
        </div>
      )}
    </header>
  );
};

export default Header;
