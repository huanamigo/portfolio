import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thanks.module.scss';

const Thanks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.checkWrapper}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 98.5 98.5"
          enableBackground="new 0 0 98.5 98.5"
          space="preserve"
          className={styles.svg}
        >
          <path
            className={styles.checkmark}
            fill="none"
            strokeWidth="8"
            strokeMiterlimit="10"
            d="M81.7,17.8C73.5,9.3,62,4,49.2,4
	C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
          />
        </svg>
      </div>

      <h1>Thanks for reaching out!</h1>
      <p>
        Your message has been sent succesfully. <br /> I will get back to you in
        24 hours.
      </p>

      <Link className={styles.button} to="/">
        back
      </Link>
    </div>
  );
};

export default Thanks;
