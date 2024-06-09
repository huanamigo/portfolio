import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

import Logo from './Logo/Logo';
import NavigationLink from './NavigationLink/NavigationLink';
import HamburgerBtn from './HamburgerBtn/HamburgerBtn';
import NavigationBtn from './NavigationBtn/NavigationBtn';

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
          <NavigationLink name="about" hide={hide} isHidden={isHidden} />
          <NavigationLink name="work" hide={hide} isHidden={isHidden} />
          <NavigationLink name="contact" hide={hide} isHidden={isHidden} />
        </div>

        <div className={styles.social}>
          <NavigationBtn
            label="Github"
            link={'https://github.com/huanamigo'}
            styleName={'fa-brands fa-github'}
          />
          <NavigationBtn
            label="Linkedin"
            link={'https://www.linkedin.com/in/artur-furtak'}
            styleName={'fa-brands fa-linkedin'}
          />
          <NavigationBtn
            label="Mail"
            link={'mailto:artur.furtak@proton.me'}
            styleName={'fa-solid fa-envelope'}
          />
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
