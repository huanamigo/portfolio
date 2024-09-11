import ProjectTile from '@/components/work/project-overview';
import styles from './page.module.scss';

export default function WorkPage() {
  return (
    <main className={styles.container}>
      <ProjectTile
        header="Weather app"
        image="/weather.webp"
        tags={['React', 'TypeScript', 'Mobile First']}
        desc="First gen weather app based on Weather API with search and autocomplete. Made using TypeScript"
        link="https://huanamigo.github.io/weather-app/"
      />

      <ProjectTile
        header="Blach Meister"
        image="/blach.webp"
        tags={['React', 'JavaScript', 'React Router']}
        desc="Simple co-op made JavaScript Instagram clone, currently only displays pages added into the folder"
        link="https://huanamigo.github.io/Blach-Meister-Plates-DB/"
      />

      <ProjectTile
        header="Reddit clone"
        image="/reddit.webp"
        tags={['Next.js', 'TypeScript', 'Postres']}
        desc="Next.js based Reddit clone app made with PostgreSQL database on Vercel"
        link="https://next-reddit-clone-xi.vercel.app/"
      />

      <ProjectTile
        header="Chat app"
        image="/chat.webp"
        tags={['Firebase', 'TypeScript', 'React']}
        desc="Telegram-like chat app made with TS and Firebase. You can create your own account, but make sure to remember your password"
        link="https://huanamigo.github.io/react-chat-app/"
      />

      <ProjectTile
        header="Pomodoro app"
        image="/pomodoro.webp"
        tags={['React', 'TypeScript']}
        desc="Unnecessarily accurate pomodoro timer. Starting/stopping only has 0.001s of resetting error"
        link="https://huanamigo.github.io/Blach-Meister-Plates-DB/"
      />

      <ProjectTile
        header="Password app"
        image="/password.webp"
        tags={['React', 'JavaScript', 'SCSS']}
        desc="Simple customizable password generator made with React and SCSS"
        link="https://huanamigo.github.io/password-generator/"
      />
    </main>
  );
}
