import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h2>Мои проекты</h2>
      <div className={styles.grid}>
        {/* Здесь будут карточки проектов */}
      </div>
    </div>
  );
};

export default Projects; 