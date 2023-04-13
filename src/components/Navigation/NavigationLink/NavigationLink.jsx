import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavigationLink.module.scss'


const NavigationLink = ({name, hide, isHidden}) => {
  return (
    <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            onClick={() => hide(!isHidden)}
            to={name}
          >
            {name}
    </NavLink>
  )
}

export default NavigationLink