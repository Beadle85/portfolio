import Image from 'next/image';
import styles from './home.module.css';
import profilePic from '../public/images/profile.jpg';

export default function Home() {
  return (
    <section id='home' className={styles.container}>
      <h1 className={styles.title}>Full Stack Software Engineer</h1>
      <h3 className={styles.subTitle}>I enjoy making companies more productive and efficient through code</h3>
      <Image src={profilePic} alt='picture of Beadle' width={456} height={456} />
    </section>
  );
}
