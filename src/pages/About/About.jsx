import React from 'react';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <em>Hi!</em>
        <p className={styles.desc}>
          I'm Artur, a passionate Frontend Developer with a strong focus on
          React and TypeScript. Over the years, I've honed my skills in modern
          web technologies such as Next.js, Node.js, and Firebase. I thrive in
          creating dynamic and user-friendly applications, always aiming for
          optimal performance and intuitive design.
        </p>
        <p className={styles.desc}>
          I am committed to continuous learning, I've dedicated countless hours
          to mastering new technologies and improving my craft. My ability to
          work collaboratively in team environments, combined with my technical
          expertise, allows me to contribute effectively to innovative projects.
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
