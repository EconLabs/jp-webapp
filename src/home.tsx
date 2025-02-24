// src/pages/home.tsx
import { useState } from 'react';
import './styles/home.css';
import './styles/slider.css';

const Home = () => {  
  // SLIDER IMAGES AND FUNCTIONS
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'src/assets/Bandera.jpg',
    'src/assets/editfigura.jpg',
    'src/assets/grupo.jpg',
    'src/assets/jane.jpg',
    'src/assets/portico.jpg',
    'src/assets/RUM.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>

        {/* HEADER LOGO AND NAME */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <img
              src="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico.png"
              alt="Guidi Icon"
            />
          </a>
          

          {/* HEADER MENU */}
          <nav className="nav">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/forms/" className="nav-link">Cuestionarios</a>
            <a href="/proyectos/" className="nav-link">Proyectos</a>
            <a href="/colaboradores/" className="nav-link">Nuestro Equipo</a>
          </nav>
        </div>
      </header>

    <div className="home">
      
      {/* Hero Section */}
      <main className="main">
        <section className="hero">
        <h1 className="header-title">Proyecto RUM</h1>
          {/* <p className="hero-text">
            La Junta de Planificación es la agencia gubernamental responsable de la planificación y el desarrollo territorial de Puerto Rico.
          </p> */}
        </section>
        <br></br>
        <section className="info-section">
          <div className="info-card">
            <h2>Nuestra Misión</h2>
            <p>Guiar a Puerto Rico hacia un desarrollo sostenible y resiliente de forma ordenada, racional, balanceada y sensible.</p>
          </div>
          <div className="info-card">
            <h2>Nuestra Visión</h2>
            <p>Fomentar una planificación ágil y dinámica para Puerto Rico que represente un cambio en paradigma.</p>
          </div>
        </section>
      </main>

      {/* Slider Section */}
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* About Section */}
      <footer className="footer">
        <p>&copy; 2025 Junta de Planificación Gobierno de Puerto Rico. Todos los derechos reservados.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;
