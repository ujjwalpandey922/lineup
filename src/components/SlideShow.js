"use client";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      title: 'The First slide',
      description: 'Scroll Down for next slide',
      className: 'first',
    },
    {
      title: 'The Second slide',
      description: 'Scroll Down for next slide',
      className: 'second',
    },
    {
      title: 'The Third slide',
      description: 'Scroll Down',
      className: 'third',
    },
    {
      title: 'The Fourth slide',
      description: '',
      className: 'fourth',
    },
  ];

  return (
    <>
    <Header />
    <div className="slideshow-container">
      {/* {slides.map((slide, index) => (
        <div key={index} className={`slide ${slide.className}`}>
          <h2>{slide.title}</h2>
          {slide.description && <p>{slide.description}</p>}
        </div>
      ))} */}
      <div className={'slide'}>
        <Hero />
      </div>
      {!isMobile && (
        <>
          <div className={'slide'}>
            <NewEra/>
          </div>
          <div className={'slide'}>
            <ForOrgs/>
          </div>
          <div className={'slide'}>
            <ForMembers/>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <div className={'slide'}>
            <ForOrgsPhone/>
          </div>
          <div className={'slide'}>
            <ForMembersPhone/>
          </div>

        </>
      )}
      <div className={'slide'}>
        <LineUpApp/>
      </div>
      <div className={'slide'}>
        <HowTo/>
      </div>
      <div className={'slide'}>
        <LineupFor/>
      </div>
      {!isMobile && (<div className={'slide'}>
        <JoinUs/>
      </div>)}
      {isMobile && (<div className={'slide'}>
        <JoinUsPhone/>
      </div>)}
      <div className={'slide'}>
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default SlideShow;
