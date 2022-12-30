import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactBtn from '../ContactBtn/ContactBtn';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.logoLink}>
        {<Logo />}
      </NavLink>

      <NavLink to="/contact">{<ContactBtn />}</NavLink>

      <div className={styles.container}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/skills"
        >
          skills
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/contact"
        >
          contact
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          to="/work"
        >
          work
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
