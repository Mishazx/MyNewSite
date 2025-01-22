import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoText}>DEV</NavLink>
      </div>
      
      <div className={`${styles.links} ${isOpen ? styles.active : ''}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.activeLink : ''}
          onClick={() => setIsOpen(false)}
        >
          Главная
        </NavLink>
        <NavLink 
          to="/about"
          className={({ isActive }) => isActive ? styles.activeLink : ''}
          onClick={() => setIsOpen(false)}
        >
          Обо мне
        </NavLink>
        <NavLink 
          to="/projects"
          className={({ isActive }) => isActive ? styles.activeLink : ''}
          onClick={() => setIsOpen(false)}
        >
          Проекты
        </NavLink>
        <NavLink 
          to="/contact"
          className={({ isActive }) => isActive ? styles.activeLink : ''}
          onClick={() => setIsOpen(false)}
        >
          Контакты
        </NavLink>
      </div>

      <div 
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar; 