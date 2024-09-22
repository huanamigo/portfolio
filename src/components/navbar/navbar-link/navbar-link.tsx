import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import styles from './navbar-link.module.scss';
import { usePathname } from 'next/navigation';

interface NavbarLinkProps {
  name: string;
  hide: Dispatch<SetStateAction<boolean>>;
}

export default function NavbarLink({ name, hide }: NavbarLinkProps) {
  const path = usePathname();

  return (
    <Link
      className={`${path === `/${name}` ? `${styles.active}` : ''} ${
        styles.link
      }`}
      href={`/${name}`}
      onClick={() => hide(true)}
    >
      {name}
    </Link>
  );
}
