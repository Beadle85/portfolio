import styles from './skills.module.css';

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
            <i className='fa-brands fa-git-alt'></i>
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
            <i className='fa-brands fa-html5'></i>
            HTML5
          </IconBox>
          <IconBox>
            <i className='fa-brands fa-css3-alt'></i>
            CSS3
          </IconBox>
        </section>
      </div>
    </section>
  );
}
