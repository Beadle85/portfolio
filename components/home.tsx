import Image from 'next/image';
import styles from './home.module.css';
import profilePic from '../public/images/profile.jpg';
import CodeText from './home/codeText';
import FunctionCard from './home/functionCard';

export default function Home() {
  return (
    <section id='home' className={styles.container}>
      <div>
        <Image src={profilePic} alt='picture of Beadle' width={456} height={456} />
      </div>
      <FunctionCard />
    </section>
  );
}
