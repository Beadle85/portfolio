import styles from '../styles/skills.module.css';

export default function Skills() {
  function IconBox({ children }: { children: React.ReactNode }) {
    return <div className={styles.iconBox}>{children}</div>;
  }
  return (
    <section id='skills'>
      <div className={styles.container}>
        <h2>Skills</h2>
        <section className={styles.icons}>
          <IconBox>
            <i className='devicon-github-original'></i>
            Github
          </IconBox>
          <IconBox>
            <i className='devicon-javascript-plain'></i>
            Javascript
          </IconBox>
          <IconBox>
            <i className='devicon-react-original'></i>
            React
          </IconBox>
          <IconBox>
            <i className='devicon-git-plain'></i>
            Git
          </IconBox>
          <IconBox>
            <i className='devicon-jest-plain'></i>
            Jest
          </IconBox>
          <IconBox>
            <i className='devicon-nodejs-plain'></i>
            Node
          </IconBox>
          <IconBox>
            <i className='devicon-typescript-plain'></i>
            Typescript
          </IconBox>
          <IconBox>
            <i className='devicon-express-original'></i>
            Express
          </IconBox>
          <IconBox>
            <i className='devicon-mongodb-plain'></i>
            mongoDB
          </IconBox>
          <IconBox>
            <i className='devicon-html5-plain'></i>
            HTML5
          </IconBox>
          <IconBox>
            <i className='devicon-css3-plain'></i>
            CSS3
          </IconBox>
        </section>
      </div>
    </section>
  );
}
