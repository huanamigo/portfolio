import React from 'react';
import { Link } from 'react-router-dom';
import ContactBtn from '../ContactBtn/ContactBtn';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logoLink}>
        {<Logo />}
      </Link>

      <Link to="/contact" className={styles.link}>
        {<ContactBtn />}
      </Link>
    </div>
  );
};

export default Navigation;
