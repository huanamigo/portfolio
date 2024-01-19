import React from 'react';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CV from './Artur_Furtak_Resume.pdf';

const Skills = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0.01 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div>
        <h1 className={styles.header}>About me</h1>
        <em>where should I start...</em>
        <p className={styles.desc}>
          I’m a frontend developer with an interest for UX/UI and graphic
          design. I’m passionate about gaming, cars and new technologies, and
          I’m always curious to learn more!
        </p>
        <p className={styles.desc}>
          I create effective and responsive websites that are fast, easy to use
          and built with best practices. The main area of my specialization is
          frontend development (HTML, CSS, JS, React), creating small and medium
          websites, applications, animations and coding interactive layouts.
        </p>
        <p className={styles.desc}>
          Check my{' '}
          <Link className={styles.link} to="/work">
            work
          </Link>{' '}
          tab or just{' '}
          <Link className={styles.link} to="/contact">
            contact
          </Link>{' '}
          me for more information.
        </p>
      </div>
      <div className={styles.carousel}>
        <SkillsCarousel />
      </div>
    </motion.div>
  );
};

export default Skills;
