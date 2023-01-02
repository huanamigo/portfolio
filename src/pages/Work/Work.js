import React from 'react';
import styles from './Work.module.scss';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.wrapper}>
        <a href="https://huanamigo.github.io/rock-paper-scissors-game/">
          <p>Rock Paper Scissors Game</p>
        </a>
      </div>
      <div className={styles.wrapper}>
        <a href="https://huanamigo.github.io/password-generator/">
          <p>Password Generator</p>
        </a>
      </div>
      <div className={styles.wrapper}>
        <a href="https://huanamigo.github.io/kalkulator-ewidencji-godzin/">
          <p>Work Time Calculator</p>
        </a>
      </div>
      <div className={styles.wrapper}>
        <a href="https://huanamigo.github.io/react-todo-app/">
          <p className={styles.link}>ToDo app</p>
        </a>
      </div>
    </motion.div>
  );
};

export default Work;
