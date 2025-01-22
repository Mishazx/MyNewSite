import styles from './About.module.css';
import TechStack from '../TechStack/TechStack';

const About: React.FC = () => {
  const experiences = [
    {
      period: "2021 - настоящее время",
      role: "Full-Stack Разработчик",
      company: "Freelance",
      description: "Разработка веб-приложений с использованием современных технологий"
    },
    // Добавьте свой опыт работы
  ];

  const education = [
    {
      period: "2019 - 2023",
      degree: "Бакалавр Компьютерных Наук",
      institution: "Название Университета",
      description: "Специализация в разработке программного обеспечения"
    },
    // Добавьте своё образование
  ];

  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <section className={styles.intro}>
          <h2>Обо мне</h2>
          <p>
            Я Full-Stack разработчик с глубоким пониманием современных веб-технологий.
            Специализируюсь на создании масштабируемых веб-приложений с использованием
            передовых инструментов и методологий разработки.
          </p>
        </section>

        <section className={styles.experience}>
          <h3>Опыт работы</h3>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{exp.period}</div>
                <div className={styles.timelineContent}>
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.education}>
          <h3>Образование</h3>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePeriod}>{edu.period}</div>
                <div className={styles.timelineContent}>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.skills}>
          <h3>Технический стек</h3>
          <TechStack />
        </section>
      </div>
    </div>
  );
};

export default About; 