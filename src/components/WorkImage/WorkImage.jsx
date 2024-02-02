import React from 'react';
import styles from './WorkImage.module.scss';

const WorkImage = ({ bgImage, link, linkTitle, secondLinkTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <img rel="preload" src={bgImage} alt={secondLinkTitle} />
      </div>

      <div className={styles.linksWrapper}>
        <a target="_blank" rel="noreferrer" href={link}>
          <p className={styles.link}>{linkTitle}</p>
        </a>
        <p className={styles.secondary}>{secondLinkTitle}</p>
      </div>
    </div>
  );
};

export default WorkImage;
