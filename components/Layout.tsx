import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Layout() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.navContent}>
          <a href='#home' className={styles.logo}>
            Beadle
          </a>
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
              <li className={styles.listItem}>
                <a href={'#projects'}>projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
