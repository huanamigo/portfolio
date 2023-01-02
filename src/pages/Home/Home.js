import React from 'react';
import styles from './Home.module.scss';
import Text from '../../components/Text/Text';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ContactBtn from '../../components/ContactBtn/ContactBtn';
import Lines from '../../components/Lines/Lines';

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.text}>
        <Text />
      </div>
      <div>
        <Lines />
      </div>
      <NavLink to="/contact">{<ContactBtn />}</NavLink>
    </motion.div>
  );
};

export default Home;
