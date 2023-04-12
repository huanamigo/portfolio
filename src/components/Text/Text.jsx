import React from 'react';
import styles from './Text.module.scss';
import './Animations.css';

const Text = () => {
  return (
    <div>
      <div className={`${styles.title}`}>
        <span className={`${styles.block} blockAnimation`}></span>
        <h1 className={`${styles.letter} textAnimation`}>Hey,</h1>
      </div>

      <div className={`${styles.title}`}>
        <span className={`${styles.block} blockAnimation2`}></span>
        <h1 className={`${styles.letter} textAnimation2`}>
          I'm <span className={styles.spec}>A</span>rtur
        </h1>
      </div>

      <div className={`${styles.title}`}>
        <span className={`${styles.block} blockAnimation3`}></span>
        <p className={`${styles.letter} textAnimation3`}>
          a <span className={styles.spec}>F</span>rontend Developer
        </p>
      </div>
    </div>
  );
};

export default Text;
