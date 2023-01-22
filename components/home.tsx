import Image from 'next/image';
import styles from '../styles/home.module.css';
import profilePic from '../public/images/profile.jpg';

export default function Home() {
  return (
    <section id='home'>
      <div className={styles.content}>
        <h1 className={styles.title}>Full Stack Software Engineer</h1>
        <h3 className={styles.subTitle}>I enjoy making companies more productive and profitable through code</h3>
        <Image src={profilePic} alt='picture of Beadle' width={456} height={456} priority={true} />
      </div>
    </section>
  );
}
