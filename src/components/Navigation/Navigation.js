import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isHidden, hide] = useState(true);

  const hideNavbar = () => {
    hide(!isHidden);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={`${
          isHidden ? `${styles.hide} ${styles.none}` : styles.show
        } ${styles.desktopNavbar}`}
      >
        <NavLink
          onClick={() => hideNavbar()}
          to="/"
          className={styles.logoLink}
        >
          {<Logo />}
        </NavLink>

        <div className={styles.container}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hideNavbar()}
            to="/skills"
          >
            skills
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hideNavbar()}
            to="/work"
          >
            work
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hideNavbar()}
            to="/contact"
          >
            contact
          </NavLink>
        </div>

        <div className={styles.social}>
          <a
            target="_blank"
            href="https://github.com/huanamigo"
            rel="noreferrer"
          >
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

      <button onClick={() => hideNavbar()} className={styles.hamButton}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default Navigation;
