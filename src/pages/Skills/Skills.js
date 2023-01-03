import React from 'react';
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel';
import styles from './Skills.module.scss';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1 className={styles.header}>Skills</h1>
        <em>where should I start...</em>
        <p className={styles.desc}>
          I’m a front-end developer with an interest for UX/UI and graphic
          design. I’m passionate about gaming, cars and new technologies, and
          I’m always curious to learn more!
        </p>
      </div>
      <div className={styles.carousel}>
        <SkillsCarousel />
      </div>
    </motion.div>
  );
};

export default Skills;
