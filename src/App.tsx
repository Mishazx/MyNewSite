import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//import About from './components/About';
//import Projects from './components/Projects';
//import Contact from './components/Contact';
import './styles/App.css';
import ImageBg from './assets/background.jpeg'

const App: React.FC = () => {
  return (
    <Router>
      <div className="background-container">
        <div className="blur-overlay" />
        <div className="gradient-overlay" />
      </div>
            <img 
        src={ImageBg} 
        className="background-full"
        alt="background"
      />
      <div className="app">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </Router>
  );
}

export default App; 