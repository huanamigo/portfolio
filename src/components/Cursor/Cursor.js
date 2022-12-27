import React, { useState } from 'react';
import styles from './Cursor.module.scss';

const Cursor = () => {
  const [mouseTop, moveMouseTop] = useState(0);
  const [mouseLeft, moveMouseLeft] = useState(0);

  const moveCursor = (e) => {
    moveMouseTop(e.clientY);
    moveMouseLeft(e.clientX);
  };

  window.addEventListener('mousemove', moveCursor);

  return (
    <div
      style={{ top: mouseTop + 'px', left: mouseLeft + 'px' }}
      className={styles.cursor}
    ></div>
  );
};

export default Cursor;
