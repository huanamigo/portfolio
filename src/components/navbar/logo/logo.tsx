import styles from './logo.module.scss';

export default function NavigationLogo() {
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
}
