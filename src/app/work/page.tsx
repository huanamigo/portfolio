import ProjectTile from '@/components/work/project-overview';
import styles from './page.module.scss';

export default function WorkPage() {
  return (
    <main className={styles.container}>
      <ProjectTile
        header="Blach Meister"
        image="/blach.webp"
        tags={['React', 'JavaScript', 'React Router']}
        desc="Simple co-op made JavaScript Instagram clone, currently only displays pages added into the folder"
        link="https://huanamigo.github.io/Blach-Meister-Plates-DB/"
      />
    </main>
  );
}
