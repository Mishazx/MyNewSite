import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2>Обо мне</h2>
      <div className={styles.content}>
        <p>
          Я Full-Stack разработчик с опытом создания современных веб-приложений.
          Специализируюсь на React, TypeScript и Node.js.
        </p>
      </div>
    </div>
  );
};

export default About; 