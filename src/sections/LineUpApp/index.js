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
      phoneDescription:
        'Send customize invites to your event, sell and scan tickets—all in one app. Assign other LineUp users to help with check-ins.',
      video: '/phone.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/book.png',
      pretext_text: 'BOOK DJS & VENUES',
      title: 'All in one booking',
      description:
        'Easily book DJs, collectives, or venues —with chat, payments, and insurance built in. Cover costs through expected ticket revenue—no more upfront expenses required for venues or performers.',
      phoneDescription:
        'Book DJs, collectives, or venues with built-in chat, payments, and insurance. Cover costs through projected ticket sales—no upfront fees needed.',
      video: '/all_in_one.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/affiliate.png',
      pretext_text: 'AFFILIATE MARKETING TOOL',
      title: 'Turn Members Into Promoters',
      description:
        'LineUp members can share events. When a sale is made through their link or profile, they automatically earn a referral commission.',
      phoneDescription:
        'LineUp members earn commission every time someone buys a ticket through their link or profile.',
      photo: '/affiliate_poster_bg_removed.png',
      video: '/lineup-pink.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/chart.png',
      pretext_text: 'ORGANIC GROWTH ALGORITHM',
      title: 'Grow on LineUp',
      description:
        'As you create, promote, and use our features, we track key performance indicators (KPIs) and optimize your visibility in our algorithm to boost your opportunities and your credibility all around our network.',
      phoneDescription:
        'As you create and promote events, we track key metrics to boost your visibility and credibility across the platform.',
      video: '/grow-on-lineup-together.png',
      isVideo: false,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'SOCIAL APP',
      title: 'Know more about the crowd',
      description:
        "Keep the vibe right. See who's attending, where they're from, and what they love—so you know the energy before you arrive.",
      video: '/social.mp4',
      phoneDescription:
        'Feel the vibe. See who’s going, where they’re from, and what they’re into—before you even show up.',
      isVideo: true,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'NETWORKING APP',
      title: 'Connect with like minded people',
      description:
        "Connect with people who share your interests, background, and energy. Match, chat, and stay in the loop—see which events they're heading to and join the moments that bring your community together.",
      phoneDescription:
        'Match with like-minded people, stay connected, and see which events they’re heading to next.',
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
      phoneDescription:
        'Send customize invites to your event, sell and scan tickets—all in one app. Assign other LineUp users to help with check-ins.',
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
      phoneDescription:
        'Book DJs, collectives, or venues with built-in chat, payments, and insurance. Cover costs through projected ticket sales—no upfront fees needed.',
      isVideo: true,
    },
    {
      pretext_icon: '/affiliate.png',
      pretext_text: 'AFFILIATE MARKETING TOOL',
      title: 'Turn Members Into Promoters',
      description:
        'LineUp members can share events. When a sale is made through their link or profile, they automatically earn a referral commission.',
      phoneDescription:
        'LineUp members earn commission every time someone buys a ticket through their link or profile.',
      photo: '/affiliate_poster_bg_removed.png',
      video: '/lineup-pink.mp4',
      isVideo: false,
    },
    {
      pretext_icon: '/chart.png',
      pretext_text: 'ORGANIC GROWTH ALGORITHM',
      title: 'Grow on LineUp',
      description:
        'As you create, promote, and use our features, we track key performance indicators (KPIs) and optimize your visibility in our algorithm to boost your opportunities and your credibility all around our network.',
      video: '/organic.png',
      phoneDescription:
        'As you create and promote events, we track key metrics to boost your visibility and credibility across the platform.',
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
      phoneDescription:
        'LineUp members earn commission every time someone buys a ticket through their link or profile.',
      photo: '/affiliate_poster_bg_removed.png',
      video: '/lineup-pink.mp4',
      isVideo: false,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'SOCIAL APP ',
      title: 'Know more about the crowd',
      description:
        "Keep the vibe right. See who's attending, where they're from, and what they love—so you know the energy before you arrive.",
      phoneDescription:
        'Feel the vibe. See who’s going, where they’re from, and what they’re into—before you even show up.',
      video: '/social.mp4',
      isVideo: true,
    },
    {
      pretext_icon: '/social.png',
      pretext_text: 'NETWORKING APP ',
      title: 'Connect with like minded people',
      description:
        "Connect with people who share your interests, background, and energy. Match, chat, and stay in the loop—see which events they're heading to and join the moments that bring your community together.",
      phoneDescription:
        'Match with like-minded people, stay connected, and see which events they’re heading to next.',
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
