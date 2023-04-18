import React from 'react';
import styles from './ContactBtn.module.scss';
import { NavLink } from 'react-router-dom';

const ContactBtn = () => {
  return (
    <div className={styles.contact}>

    <NavLink to="/contact">
        <p>GET IN TOUCH</p>
    </NavLink>
    </div>
   
  );
};

export default ContactBtn;
