'use client';
import React, { useState, useEffect } from 'react';
import './SlideShow.css';
import Header from '../sections/Header';
import Hero from '@/sections/Hero';
import NewEra from '@/sections/NewEra';
import ForOrgs from '@/sections/ForOrgs';
import ForMembers from '@/sections/ForMembers';
import LineUpApp from '@/sections/LineUpApp';
import HowTo from '@/sections/HowTo';
import JoinUs from '@/sections/JoinUs';
import Footer from '@/sections/Footer';
import LineupFor from '@/sections/LineupFor';
import ForOrgsPhone from '@/sections/ForOrgsPhone';
import ForMembersPhone from '@/sections/ForMembersPhone';
import JoinUsPhone from '@/sections/JoinUsPhone';

const SlideShow = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This code will only run on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return (
    <>
      <Header />
      <div className="slideshow-container">
        <div className="slide" id="home">
          <Hero />
        </div>
        {!isMobile && (
          <>
            <div className="slide">
              <NewEra />
            </div>
            <div className="slide">
              <ForOrgs />
            </div>
            <div className="slide">
              <ForMembers />
            </div>
          </>
        )}
        {isMobile && (
          <>
            <div className="slide">
              <ForOrgsPhone />
            </div>
            <div className="slide">
              <ForMembersPhone />
            </div>
          </>
        )}
        <div id="lineup-app">
          <LineUpApp />
        </div>
        <div className="slide" id="whos-lineup">
          <LineupFor />
        </div>
        <div className="slide" id="how-it-works">
          <HowTo />
        </div>
        {!isMobile ? (
          <div className="slide" id="join-us">
            <JoinUs />
          </div>
        ) : (
          <div className="slide" id="join-us">
            <JoinUsPhone />
          </div>
        )}
        <div className="slide">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SlideShow;
