'use client';
import { useState } from 'react';
import styles from './index.module.css';
import TabNavigation from '@/components/TabNavigation';
import CardList from '@/components/CardList';

const data = [
  [
    {
      pretext_icon: '/sell.png',
      pretext_text: 'SELL & SCAN TICKETS',
      title: 'Start selling tickets in seconds',
      description:
        'Personalize your event, publish, sell and scan tickets on one app. Allocate other LineUp users to scan tickets for you.',
      video: '/phone.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/book.png',
      pretext_text: 'BOOK DJS & VENUES',
      title: 'All in one booking',
      description:
        'Easily book DJs, collectives, or venues —with chat, payments, and insurance built in. Cover costs through expected ticket revenue—no more upfront expenses required for venues or performers.',
      video: '/all_in_one.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/affiliate.png',
      pretext_text: 'AFFILIATE MARKETING TOOL',
      title: 'Turn Members Into Promoters',
      description:
        'LineUp members can share events. When a sale is made through their link or profile, they automatically earn a referral commission.',
      video: '/affiliate_poster.png',
      isVideo: false,
    },
    {
      pretext_icon: '/chart.png',
      pretext_text: 'ORGANIC GROWTH ALGORITHM',
      title: 'Grow on LineUp',
      description:
        'As you create, promote, and use our features, we track key performance indicators (KPIs) and optimize your visibility in our algorithm to boost your opportunities and your credibility all around our network.',
      video: '/organic.png',
      isVideo: false,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'SOCIAL MEDIA PLATFORM ',
      title: 'Know more about the crowd',
      description:
        "Keep the vibe right. See who's attending, where they're from, and what they love—so you know the energy before you arrive.",
      video: '/social.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'NETWORKING PLATFORM ',
      title: 'Connect with like minded people',
      description:
        'Find events with people who share your story — your country, your culture, your passions. See where the energy is in your city and join in. Show up for the moments that matter, with the people who matter.',
      video: '/social_image.png',
      isVideo: false,
    },
  ],
  [
    {
      pretext_icon: '/sell.png',
      pretext_text: 'SELL & SCAN TICKETS',
      title: 'Start selling tickets in seconds',
      description:
        'Personalize your event, publish, sell and scan tickets on one app. Allocate other LineUp users to scan tickets for you.',
      video: '/phone.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/book.png',
      pretext_text: 'BOOK DJS & VENUES',
      title: 'All in one booking',
      description:
        'Easily book DJs, collectives, or venues —with chat, payments, and insurance built in. Cover costs through expected ticket revenue—no more upfront expenses required for venues or performers.',
      video: '/all_in_one.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/affiliate.png',
      pretext_text: 'AFFILIATE MARKETING TOOL',
      title: 'Turn Members Into Promoters',
      description:
        'LineUp members can share events. When a sale is made through their link or profile, they automatically earn a referral commission.',
      video: '/affiliate_poster.png',
      isVideo: false,
    },
    {
      pretext_icon: '/chart.png',
      pretext_text: 'ORGANIC GROWTH ALGORITHM',
      title: 'Grow on LineUp',
      description:
        'As you create, promote, and use our features, we track key performance indicators (KPIs) and optimize your visibility in our algorithm to boost your opportunities and your credibility all around our network.',
      video: '/organic.png',
      isVideo: false,
    },
  ],
  [
    {
      pretext_icon: '/affiliate.png',
      pretext_text: 'AFFILIATE MARKETING TOOL',
      title: 'Turn Members Into Promoters',
      description:
        'LineUp members can share events. When a sale is made through their link or profile, they automatically earn a referral commission.',
      video: '/affiliate_poster.png',
      isVideo: false,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'SOCIAL MEDIA PLATFORM ',
      title: 'Know more about the crowd',
      description:
        "Keep the vibe right. See who's attending, where they're from, and what they love—so you know the energy before you arrive.",
      video: '/social.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'NETWORKING PLATFORM ',
      title: 'Connect with like minded people',
      description:
        'Find events with people who share your story — your country, your culture, your passions. See where the energy is in your city and join in. Show up for the moments that matter, with the people who matter.',
      video: '/social_image.png',
      isVideo: false,
    },
  ],
];
const LineUpApp = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_title}>LineUp App</div>
      </div>
      <div className={styles.navigation}>
        <TabNavigation onTabClick={handleTabClick} currentTab={currentTab} />
      </div>
      <div className={styles.cardsContainer}>
        <CardList data={data[currentTab]} tab={currentTab} />
      </div>
      {/* THIS IS A WORK AROUND TO NOT SHOW THE TITLE N HEADER OF THIS SECTION  */}
      <div
        style={{
          backgroundColor: '#000000',
          height: '400px',
          position: 'absolute',
          width: '100%',
          bottom: 0,
          left: 0,
          zIndex: 30,
        }}
      ></div>
    </div>
  );
};
export default LineUpApp;
