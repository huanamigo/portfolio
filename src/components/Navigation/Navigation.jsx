import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';
import styles from './Navigation.module.scss';
import NavigationLink from './NavigationLink/NavigationLink';
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';

const Navigation = ({ handleCursor }) => {
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
        <div className={styles.cursor}>
          <i onClick={handleCursor} className="fa-solid fa-arrow-pointer"></i>
        </div>
        <div className={styles.container}>
          
          <NavigationLink name="about" hide={hide} isHidden={isHidden}/>
          <NavigationLink name="work" hide={hide} isHidden={isHidden}/>
          <NavigationLink name="contact" hide={hide} isHidden={isHidden}/>

          
        </div>

        <div className={styles.social}>
          <a
            aria-label="Github link"
            target="_blank"
            href="https://github.com/huanamigo"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          
          <a
            aria-label="Linkedin link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/artur-furtak"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a aria-label="Mail" href="mailto:arturfurtak5@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <button
        aria-label="Navigation Button"
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
