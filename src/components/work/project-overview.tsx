import Image from 'next/image';
import styles from './project-overview.module.scss';

export default function ProjectTile({}) {
  return (
    <div className={styles.container}>
      <Image src={'/blach.webp'} width={300} height={300} alt="asdasd" />
    </div>
  );
}
