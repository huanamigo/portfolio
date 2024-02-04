import React from 'react';
import Form from '../../components/Form/Form';
import styles from './Contact.module.scss';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1.5 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className={styles.head}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.header}>Contact me!</h1>
          <p>
            Have a question for me? Have a job offer? Want to create something
            together? Contact me and let's talk!
          </p>
        </div>

        <div className={styles.info}>
          <p>
            <i className="fa-solid fa-user"></i> Artur Furtak
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Poland, 40-833 Katowice
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+48883655934">+48 883 655 934</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>{' '}
            <a href="mailto:arturfurtak5@gmail.com">arturfurtak5@gmail.com</a>
          </p>
        </div>
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </motion.div>
  );
};

export default Home;
