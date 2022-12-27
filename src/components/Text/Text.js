import React from 'react';
import styles from './Text.module.scss';
import './Animations.css';

const Text = (props) => {
  return (
    <>
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
        <h1 className={`${styles.letter} textAnimation3`}>
          a Frontend Developer
        </h1>
      </div>
    </>
  );
};

export default Text;
