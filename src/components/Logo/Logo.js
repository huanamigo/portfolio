import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brackets}>
        <span>{'<'}</span>
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.lineWrapper}>
          <span className={styles.main}>A</span>
          <div className={styles.secondary}>RTUR</div>
        </div>
        <div className={styles.lineWrapper}>
          <span className={styles.main}>F</span>
          <span className={styles.secondary}>URTAK</span>
        </div>
      </div>

      <div className={styles.brackets}>
        <span>{' />'}</span>
      </div>
    </div>
  );
};

export default Logo;
