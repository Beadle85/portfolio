import Image from 'next/image';
import styles from './home.module.css';
import profilePic from '../public/images/profile.jpg';
import CodeText from './codeText';

export default function Home() {
  return (
    <section id='home' className={styles.container}>
      <div>
        <Image src={profilePic} alt='picture of Beadle' width={456} height={456} />
      </div>
      <div className={styles.beadleFunction}>
        <pre>
          1 <CodeText codeColor='blue'>function</CodeText> <CodeText codeColor='yellow'>getBeadle</CodeText>
          <CodeText codeColor='gold'>()</CodeText>:<CodeText codeColor='green'>Beadle</CodeText>{' '}
          <CodeText codeColor='gold'>{'{'}</CodeText>
        </pre>
        <pre>
          2 {'   '}
          <CodeText codeColor='purple'>return {'{'}</CodeText>
        </pre>
        <pre>
          3 {'      '}
          <CodeText codeColor='lightBlue'>name:</CodeText> <CodeText codeColor='orange'>'Beadle'</CodeText>
        </pre>
        <pre>
          4 {'      '}
          <CodeText codeColor='lightBlue'>age:</CodeText> <CodeText codeColor='lightGreen'>37</CodeText>
        </pre>
        <pre>
          5 {'      '}
          <CodeText codeColor='lightBlue'>position:</CodeText>{' '}
          <CodeText codeColor='orange'>'Full Stack Developer'</CodeText>
        </pre>
        <pre>
          6 {'      '}
          <CodeText codeColor='lightBlue'>skills:</CodeText> <CodeText codeColor='blue'>{'['}</CodeText>
          <a href='#skills'>
            ...<CodeText codeColor='lightBlue'>skills</CodeText>
          </a>
          <CodeText codeColor='blue'>{']'}</CodeText>
        </pre>
        <pre>
          7 {'   '}
          <CodeText codeColor='purple'>{'}'}</CodeText>
        </pre>
        <pre>
          8 <CodeText codeColor='gold'>{'}'}</CodeText>
        </pre>
      </div>
    </section>
  );
}
