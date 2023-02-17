import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import Logo from '../Logo/Logo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isHidden, hide] = useState(true);

  return (
    <div className={styles.navbar}>
      <div
        className={`${
          isHidden ? `${styles.hide} ${styles.none}` : styles.show
        } ${styles.desktopNavbar}`}
      >
        <NavLink
          onClick={() => hide(!isHidden)}
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
            onClick={() => hide(!isHidden)}
            to="/skills"
          >
            about
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hide(!isHidden)}
            to="/work"
          >
            work
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hide(!isHidden)}
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
            href="https://www.linkedin.com/in/artur-furtak"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="mailto:arturfurtak5@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <button
        name="navigation"
        onClick={() => hide(!isHidden)}
        className={styles.hamButton}
      >
        <HamburgerBtn active={isHidden} />
      </button>
    </div>
  );
};

export default Navigation;
