import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-text">DEV</span>
      </div>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#projects">Проекты</a>
        <a href="#contact">Контакты</a>
      </div>

      <div 
        className={`hamburger ${isOpen ? 'active' : ''}`}
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