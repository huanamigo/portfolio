import React from 'react';
import styles from './Work.module.scss';
import { motion } from 'framer-motion';
import ewidImage from './assets/ewid.webp';
import rpsImage from './assets/rps.webp';
import passwordImage from './assets/password.webp';
import taskImage from './assets/task.webp';
import pizzaImage from './assets/pizza-bg.webp';

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
        <div className={styles.background}>
          <img rel="preload" src={rpsImage} alt="RPS Background" />
        </div>

        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/rock-paper-scissors-game/"
          >
            <p className={styles.link}>Rock Paper Scissors Game</p>
          </a>
          <p className={styles.secondary}>RPS game made with React and SCSS</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.background}>
          <img
            rel="preload"
            src={passwordImage}
            alt="Password Generator Background"
          />
        </div>

        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/password-generator/"
          >
            <p className={styles.link}>Password Generator</p>
          </a>
          <p className={styles.secondary}>
            Customizable password generator made with React and SCSS
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.background}>
          <img rel="preload" src={ewidImage} alt="Work Time Background" />
        </div>
        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://huanamigo.github.io/kalkulator-ewidencji-godzin/"
          >
            <p className={styles.link}>Work Time Calculator</p>
          </a>
          <p className={styles.secondary}>
            Made for the needs of quick filling in the form for a large
            workplace
          </p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.background}>
          <img rel="preload" src={taskImage} alt="Todo App Background" />
        </div>
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
        <div className={styles.background}>
          <img rel="preload" src={pizzaImage} alt="Pizza Place Background" />
        </div>
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
