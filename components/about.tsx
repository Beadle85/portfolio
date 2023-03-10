import styles from '../styles/about.module.css';
import FunctionCard from './about/functionCard';

export default function About() {
  return (
    <section id='about' className={styles.container}>
      <h2>About</h2>
      <div className={styles.content}>
        <FunctionCard />
        <div className={styles.aboutMe}>
          <h3>Hello, my name is Beadle. Thanks for joining me here!</h3>
          <p>
            I had a rather unique jounrey that brough me into the software developmet world. In 2014 I started a small
            sustainably focused business called Compost Nashville. After 5 years in business, it became apparent we
            needed software to solve some of our key logistcal problems. In 2020 I began the process of learning to
            code. Since then I have built and maintained the internal software on which Compost Nashville runs its day
            to day operations. This software allows Compost Nashville to service over 2000 homes and business in the
            greater Nashville area. I'm so proud of what I have built there but I alos discovered that coding is where
            my true passion lies. I look forward to helping your company utilize software to improve the lives or your
            team and customers.
          </p>
        </div>
      </div>
    </section>
  );
}
