import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
          <span className={styles.greeting}>Привет, я</span>
          <span className={styles.name}>Михаил</span>
          <span className={styles.title}>Full-Stack Разработчик</span>
        </h1>
        <p className={styles.description}>
          Я создаю современные веб-приложения с использованием передовых технологий
        </p>
        <button className={styles.ctaButton}>Связаться со мной</button>
      </div>
      <div className={styles.background}>
        <div className={styles.grid}></div>
      </div>
    </div>
  );
};

export default Hero; 

