import React from 'react';
import styles from './Work.module.scss';
import WorkImage from '../../components/WorkImage/WorkImage';
import { motion } from 'framer-motion';

// images
import weatherImage from './assets/weather.webp';
import passwordImage from './assets/password.webp';
import redditImage from './assets/reddit.webp';
import pomodoroImage from './assets/pomodoro.webp';
import chatImage from './assets/chat.webp';
import plateImage from './assets/blach.webp';

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
        bgImage={redditImage}
        link={'https://next-reddit-clone-xi.vercel.app/'}
        linkTitle={'Reddit clone'}
        secondLinkTitle={
          'Next.js based reddit clone app with PostgreSQL database'
        }
      />
      <WorkImage
        bgImage={pomodoroImage}
        link={'https://huanamigo.github.io/pomodoro-web-app/'}
        linkTitle={'Pomodoro App'}
        secondLinkTitle={'Most accurate pomodoro app made with TypeScript'}
      />
      <WorkImage
        bgImage={plateImage}
        link={'https://huanamigo.github.io/Blach-Meister-Plates-DB/'}
        linkTitle={'Plategram'}
        secondLinkTitle={
          'Co-op project Instagram clone to appreciate cool car plates'
        }
      />
      <WorkImage
        bgImage={chatImage}
        link={'https://huanamigo.github.io/react-chat-app/'}
        linkTitle={'Telegram clone'}
        secondLinkTitle={'Telegram-like chat app made with TS and Firebase'}
      />
    </motion.div>
  );
};

export default Work;
