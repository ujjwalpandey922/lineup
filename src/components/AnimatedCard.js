'use client'; // if using app directory

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AnimatedCard({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
      className="card"
      style={{height:"100vh",width:"100vw"}}
    >
      {children}
    </motion.div>
  );
}
