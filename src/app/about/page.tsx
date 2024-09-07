import Link from 'next/link';
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>
        About me <br />
      </h1>
      <i>Hi!</i>
      <p>
        <br />
        {`
        I'm Artur, a passionate Frontend Developer with a strong focus on React
        and TypeScript. Over the years, I've honed my skills in modern web
        technologies such as Next.js, Node.js, and Firebase. I thrive in
        creating dynamic and user-friendly applications, always aiming for
        optimal performance and intuitive design. 
        `}
      </p>
      <p>
        <br />
        {`
        
        I am committed to continuous
        learning, I've dedicated countless hours to mastering new technologies
        and improving my craft. My ability to work collaboratively in team
        environments, combined with my technical expertise, allows me to
        contribute effectively to innovative projects. 
        `}
      </p>

      <p>
        <br />
        {`Check my `}
        <Link href={'/work'}>work</Link>
        {` tab or just `}
        <Link href={'/contact'}>contact me</Link>
        {` for more information.`}
      </p>
    </div>
  );
}
