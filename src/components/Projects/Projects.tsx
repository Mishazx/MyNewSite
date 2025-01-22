import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Chat Assistant",
    description: "Интеллектуальный чат-бот с использованием современных технологий машинного обучения",
    image: "/projects/ai-chat.jpg",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js"],
    link: "https://ai-chat.example.com",
    github: "https://github.com/username/ai-chat"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Современная платформа электронной коммерции с адаптивным дизайном",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/username/ecommerce"
  },
  // Добавьте свои проекты здесь
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Мои проекты</h2>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 