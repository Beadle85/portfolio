import styles from './about.module.css';

export default function About() {
  return (
    <section id='about' className={styles.container}>
      <h2>About Me</h2>
      <div className={styles.backgroundDiv} />
      <article className={styles.content}>
        <p>Hey there, my name is Beadle and I'm a full stack web developer from Alabama</p>
      </article>
    </section>
  );
}
