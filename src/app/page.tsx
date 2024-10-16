import Link from 'next/link';
import styles from './page.module.scss';
import Lines from '@/components/home/lines/lines';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <span>Hi,</span>
          <span>
            {`I'm `}
            <em>A</em>
            rtur
          </span>
          <span className={styles.secondary}>
            a <em>F</em>rontend Developer
          </span>
        </h1>
      </div>
      <div className={styles.linesWrapper}>
        <Lines />
      </div>
      <Link className={styles.contactBtn} href={'/contact'}>
        GET IN TOUCH
      </Link>
    </main>
  );
}

// import React from 'react';
// import styles from './Text.module.scss';
// import './Animations.css';

// const Text = () => {
//   return (
//     <div>
//       <div className={`${styles.title}`}>
//         <span className={`${styles.block} blockAnimation`}></span>
//         <h1 className={`${styles.letter} textAnimation`}>Hey,</h1>
//       </div>

//       <div className={`${styles.title}`}>
//         <span className={`${styles.block} blockAnimation2`}></span>
//         <h1 className={`${styles.letter} textAnimation2`}>
//           I'm <span className={styles.spec}>A</span>rtur
//         </h1>
//       </div>

//       <div className={`${styles.title}`}>
//         <span className={`${styles.block} blockAnimation3`}></span>
//         <p className={`${styles.letter} textAnimation3`}>
//           a <span className={styles.spec}>F</span>rontend Developer
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Text;
