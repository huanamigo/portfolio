import React, { useEffect, useState } from 'react';
import styles from './Cursor.module.scss';

const Cursor = () => {
  const [mouseTop, moveMouseTop] = useState(0);
  const [mouseLeft, moveMouseLeft] = useState(0);
  const [toMove, setToMove] = useState(true);

  // const moveCursor = (e) => {

  //   if(toMove) {
  //     setToMove(false)
  //     moveMouseTop(e.clientY);
  //     moveMouseLeft(e.clientX);
  //     console.log("changed to false")
  //     setTimeout(() => {
  //       setToMove(true)
  //     console.log("changed to true")
  //   }, 100)
  //   }

  // };

  useEffect(() => {
    const handleMouseMove = (e) => {
      moveMouseTop(e.clientY);
      moveMouseLeft(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div
      style={{ top: mouseTop + 'px', left: mouseLeft + 'px' }}
      className={styles.cursor}
    ></div>
  );
};

export default Cursor;
