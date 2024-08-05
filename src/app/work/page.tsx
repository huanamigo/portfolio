import ProjectTile from '@/components/work/project-overview';
import styles from './page.module.scss';

export default function WorkPage() {
  return (
    <main className={styles.container}>
      <ProjectTile />
    </main>
  );
}
