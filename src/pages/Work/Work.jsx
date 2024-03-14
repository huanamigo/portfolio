import React from 'react';
import styles from './Work.module.scss';
import WorkImage from '../../components/WorkImage/WorkImage';
import { motion } from 'framer-motion';

// images
import weatherImage from './assets/weather.webp';
import rpsImage from './assets/rps.webp';
import passwordImage from './assets/password.webp';
import taskImage from './assets/task.webp';
import pizzaImage from './assets/pizza-bg.webp';

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
        bgImage={rpsImage}
        link={'https://huanamigo.github.io/rock-paper-scissors-game/'}
        linkTitle={'Rock Paper Scissors Game'}
        secondLinkTitle={'RPS game made with React and SCSS'}
      />

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
        bgImage={pizzaImage}
        link={'https://huanamigo.github.io/pizza-place/'}
        linkTitle={'Pizza Place'}
        secondLinkTitle={'Pizza ordering site using API and TypeScript'}
      />
    </motion.div>
  );
};

export default Work;
