// import styles from './index.module.css';

// const NewEra = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <div className={styles.hero_video_wrapper}></div>
//         <div className={styles.left_text}>
//           The New Era of Human Experiences{' '}
//           <video
//             src="hero_white_bg.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className={styles.hero_video}
//           ></video>
//         </div>
//       </div>
//       <div className={styles.right}>
//         <div className={styles.right_video}>
//           <video src={'/phone.mp4'} autoPlay muted loop />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default NewEra;
import styles from './index.module.css';

const NewEra = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <video
          src="hero_white_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.hero_video}
        ></video>
        <div className={styles.left_text}>The New Era of Human Experiences</div>
      </div>
      <div className={styles.right}>
        <div className={styles.right_video}>
          <video src={'/phone.mp4'} autoPlay muted loop />
        </div>
      </div>
    </div>
  );
};
export default NewEra;
