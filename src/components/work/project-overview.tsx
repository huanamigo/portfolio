import Image from 'next/image';
import styles from './project-overview.module.scss';
import Link from 'next/link';

interface ProjectTileProps {
  header: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectTile({
  header,
  image,
  tags,
  link,
}: ProjectTileProps) {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={300}
        height={300}
        alt={header}
        loading="lazy"
        quality={80}
      />
      <div className={styles.description}>
        <a target="_blank" rel="noreferrer" href={link}>
          {header}
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sed ducimus necessitatibus inventore reiciendis doloribus praesentium
          delectus minus, omnis veritatis. Tempore, non architecto? Assumenda
          numquam, aut harum excepturi totam quia?
        </p>
        <div className={styles.tagWrapper}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
