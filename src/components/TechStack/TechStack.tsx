import styles from './TechStack.module.css';
import { 
  SiReact, SiTypescript, SiNodedotjs, 
  SiTailwindcss, SiPrisma,
  SiPostgresql, SiDocker, SiGit,
  SiPython, SiJavascript, SiHtml5,
  SiCss3, SiRedux, SiMongodb,
  SiDjango, SiFlask, SiFastapi,
  SiCplusplus,
  SiC,
  SiDotnet,
  SiPostman,
  SiNginx,
  SiLinux,
  SiUbuntu,
  SiJira,
  SiFirebase,
  SiMysql,
  SiSpring,
  SiExpress,
  SiBootstrap,
  SiWebpack,
  SiVite,
  SiVim,
  SiMacos,
  SiArchlinux,
  SiSqlite,
  SiApache,
  SiKubernetes,
} from 'react-icons/si';
import { BiLogoJava } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';
import { RiWindowsFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

const technologies = {
  languages: [
    { icon: SiPython, name: "Python"},
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: BiLogoJava, name: 'Java'},
    { icon: SiDotnet, name: "C#/.NET"},
    { icon: SiC, name: 'C'},
    { icon: SiCplusplus, name: 'C++'},
  ],
  front_frameworks: [
    { icon: SiReact, name: 'React' },
    { icon: TbBrandReactNative, name: "React Native"},
    { icon: SiRedux, name: 'Redux' },
    

    { icon: SiBootstrap, name: "Bootstrap"},
    { icon: SiTailwindcss, name: 'Tailwind' },

  ],
  back_frameworks: [
    { icon: SiDjango, name: "Django"},
    { icon: SiFlask, name: "Flask"},
    { icon: SiFastapi, name: "FastAPI"},
    { icon: SiSpring, name: "Spring"},
    { icon: SiExpress, name: "Express.js"},
    { icon: SiNodedotjs, name: 'Node.js' },

  ],
  tools: [
    { icon: SiGit, name: 'Git' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes'},

    { icon: SiPrisma, name: 'Prisma' },
    { icon: SiFirebase, name: "Firebase"},


    { icon: SiPostman, name: "Postman"},
    { icon: SiNginx, name: "Nginx"},
    { icon: SiApache, name: "Apache2"},

    { icon: SiWebpack, name: "Webpack"},
    { icon: SiVite, name: "Vite"},
    { icon: SiJira, name: "Jira"},
  ],
  db: [
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiMysql, name: 'MySQL'},
    { icon: SiSqlite, name: 'Sqlite'}
  ],
  os: [
    { icon: SiLinux, name: "Linux"},
    { icon: SiMacos, name: "MacOS"},
    { icon: RiWindowsFill, name: "Windows"},

    { icon: SiUbuntu, name: "Ubuntu"},
    {icon : SiArchlinux, name: "Arch Linux"},
  ],
  editors: [
    { icon: SiVim, name: "Vim"},
    { icon: VscVscode, name: "VS Code"},
  ]
};

interface Technology {
  icon: IconType;
  name: string;
}

interface TechSectionProps {
  title: string;
  items: Technology[];
}

const TechSection = ({ title, items }: TechSectionProps) => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>{title}</h3>
    <div className={styles.grid}>
      {items.map((tech, index) => (
        <div 
          key={tech.name} 
          className={styles.item}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <tech.icon className={styles.icon} />
          <span className={styles.tooltip}>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const sections = [
    { title: 'Языки', items: technologies.languages },
    { title: 'Frontend фреймворки', items: technologies.front_frameworks },
    { title: 'Backend фреймворки', items: technologies.back_frameworks },
    { title: 'Инструменты', items: technologies.tools },
    { title: 'Базы данных', items: technologies.db },
    { title: 'Операционные системы', items: technologies.os },
    { title: 'Редакторы кода', items: technologies.editors }

  ];

  return (
    <div className={styles.container}>
      {sections.map(section => (
        <TechSection 
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default TechStack; 