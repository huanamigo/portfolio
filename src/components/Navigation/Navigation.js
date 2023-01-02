import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logoLink}>
        {<Logo />}
      </NavLink>

      <div className={styles.container}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/skills"
        >
          skills
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/work"
        >
          work
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/contact"
        >
          contact
        </NavLink>
      </div>

      <div className={styles.social}>
        <a target="_blank" href="https://github.com/huanamigo" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/artur-furtak-8109b7257/"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="mailto:arturfurtak5@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
