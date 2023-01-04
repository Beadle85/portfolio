import styles from './layout.module.css';

export default function Layout() {
  return (
    <nav className={styles.container}>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
    </nav>
  );
}
