import React from 'react';
import styles from './Work.module.scss';
import WorkImage from '../../components/WorkImage/WorkImage';
import { motion } from 'framer-motion';

// images
import weatherImage from './assets/weather.webp';
import passwordImage from './assets/password.webp';
import taskImage from './assets/task.webp';
import pomodoroImage from './assets/pomodoro.webp';

const Work = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1.5 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <WorkImage
        bgImage={passwordImage}
        link={'https://huanamigo.github.io/password-generator/'}
        linkTitle={'Password Generator'}
        secondLinkTitle={
          'Customizable password generator made with React and SCSS'
        }
      />

      <WorkImage
        bgImage={weatherImage}
        link={'https://huanamigo.github.io/weather-app/'}
        linkTitle={'TypeScript Weather App'}
        secondLinkTitle={
          'Weather App made with Weather API, React and TypeScript'
        }
      />

      <WorkImage
        bgImage={taskImage}
        link={'https://huanamigo.github.io/react-todo-app/'}
        linkTitle={'TODO App'}
        secondLinkTitle={'Simple app with local-storage based memory'}
      />

      <WorkImage
        bgImage={pomodoroImage}
        link={'https://huanamigo.github.io/pomodoro-web-app/'}
        linkTitle={'Pomodoro App'}
        secondLinkTitle={'Most accurate pomodoro app made with TypeScript'}
      />
    </motion.div>
  );
};

export default Work;
