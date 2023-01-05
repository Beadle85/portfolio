import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.navContent}>
          <Link aria-current='page' href='/' className={styles.logo}>
            Beadle
          </Link>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.listItem}>
                <a href={'#home'}>home</a>
              </li>
              <li className={styles.listItem}>
                <a href={'#about'}>about</a>
              </li>
              <li className={styles.listItem}>
                <a href={'#skills'}>skills</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
