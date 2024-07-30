import styles from './navbar-btn.module.scss';

interface NavbarBtnProps {
  label: string;
  link: string;
  children: React.ReactElement;
}

export default function NavbarBtn({ label, link, children }: NavbarBtnProps) {
  return (
    <a
      className={styles.link}
      aria-label={`${label} link`}
      target="_blank"
      href={link}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
