import Link from 'next/link';
import styles from './navbar-link.module.scss';
import { usePathname } from 'next/navigation';

interface NavbarLinkProps {
  name: string;
}

export default function NavbarLink({ name }: NavbarLinkProps) {
  const path = usePathname();

  return (
    <Link
      className={`${path === `/${name}` ? `${styles.active}` : ''} ${
        styles.link
      }`}
      href={`/${name}`}
    >
      {name}
    </Link>
  );
}
