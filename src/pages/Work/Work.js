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

        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/rock-paper-scissors-game/"
          >
            <p>Rock Paper Scissors Game</p>
          </a>
          <p className={styles.secondary}>RPS game made with React and SCSS</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.password}`}></div>

        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/password-generator/"
          >
            <p>Password Generator</p>
          </a>
          <p className={styles.secondary}>
            Customizable password generator made with React and SCSS
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.ewid}`}></div>
        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/kalkulator-ewidencji-godzin/"
          >
            <p>Work Time Calculator</p>
          </a>
          <p className={styles.secondary}>
            Made for the needs of quick filling in the form for a large
            workplace
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.task}`}></div>
        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/react-todo-app/"
          >
            <p className={styles.link}>ToDo app</p>
          </a>
          <p className={styles.secondary}>
            Simple app with local-storage based memory
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.background} ${styles.pizza}`}></div>
        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/pizza-place/"
          >
            <p className={styles.link}>Pizza Place</p>
          </a>
          <p className={styles.secondary}>
            Pizza ordering site using API and TypeScript
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
