import '../styles/Hero.css';


const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <h1>
          <span className="greeting">Привет, я</span>
          <span className="name">Михаил</span>
          <span className="title">Full-Stack Разработчик</span>
        </h1>
        <p className="description">
          Я создаю современные веб-приложения с использованием передовых технологий
        </p>
        <button className="cta-button">Связаться со мной</button>
      </div>
      {/* <div className="hero-background">
        <div className="grid"></div>
      </div> */}
    </section>
  );
};

export default Hero; 