import CodeText from './codeText';
import styles from './functionCard.module.css';

export default function FunctionCard() {
  return (
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
          ...<CodeText codeColor='lightBlue'>clickHere</CodeText>
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
  );
}
