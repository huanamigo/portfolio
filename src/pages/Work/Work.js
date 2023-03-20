import React from 'react';
import styles from './Work.module.scss';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1.5 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.rps}`}></div>
        <a href="https://huanamigo.github.io/rock-paper-scissors-game/">
          <p>Rock Paper Scissors Game</p>
        </a>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.password}`}></div>
        <a href="https://huanamigo.github.io/password-generator/">
          <p>Password Generator</p>
        </a>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.ewid}`}></div>
        <a href="https://huanamigo.github.io/kalkulator-ewidencji-godzin/">
          <p>Work Time Calculator</p>
        </a>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.task}`}></div>
        <a href="https://huanamigo.github.io/react-todo-app/">
          <p className={styles.link}>ToDo app</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Work;
