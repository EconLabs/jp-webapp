import React, { useEffect, useState } from "react";
import "../css/website.css"; // Adjust path as needed
import "../css/indice.css"; // Adjust path as needed
import hdiRoadMap from "../assets/hdiRoadMap.png";
import vegaEmbed from "vega-embed";

const HumanDevelopmentIndex: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState(null); // Store JSON response
  const [loading, setLoading] = useState(true); // Track loading state

  // Toggle burger menu
  const toggleBurgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fetch the Altair JSON and render the Vega-Lite chart
  // useEffect(() => {
  //   fetch("http://192.168.50.24:5751/graph/tmp?naics_code=11")  // ✅ Using Vite proxy
  //     .then(response => response.text())  // ✅ Get response as text first
  //     .then(text => {
  //       console.log("🔍 Server Response:", text); // ✅ See the actual response
  //       return JSON.parse(text);  // ✅ Now try parsing JSON
  //     })
  //     .then(data => {
  //       setChartData(data);
  //       setLoading(false);
  //       vegaEmbed("#vis", data);
  //     })
  //     .catch(error => {
  //       console.error("❌ Fetch Error:", error);
  //       setError("Failed to load the chart. Please try again.");
  //     });
  // }, []);

  return (
    <>
      {/* Burger Menu */}
      <div className="container">
        <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleBurgerMenu}>
          <span />
          <span />
          <span />
        </div>

        <ul className={`burger_menu ${menuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/centro-de-datos-macroeconomicos/">Centro De Datos Macroeconómicos</a></li>
          <li><a href="/ciclos-economicos/">Ciclos Económicos</a></li>
          <li><a href="/indicadores-mensuales/">Indicadores Mensuales</a></li>
          <li><a href="/proyectos/datos_demograficos">Datos Demográficos</a></li>
        </ul>
      </div>

      <h1>Índice de Desarrollo Humano</h1>

      <p className="main_content">
        El Índice de Desarrollo Humano (IDH) es una medida compuesta que evalúa el desarrollo de un país basado en tres dimensiones clave: una vida larga y saludable, el acceso a la educación y un nivel de vida digno.
      </p>

      {/* IDH Explanation */}
      <p className="main_content"><strong>1. Salud:</strong> medida por la <strong>esperanza</strong> de vida al nacer.</p>
      <p className="main_content"><strong>2. Educación:</strong> evaluada por los <strong>años promedio de escolaridad</strong> en adultos y los <strong>años esperados de escolarización</strong> para niños.</p>
      <p className="main_content"><strong>3. Nivel de vida:</strong> representado por el <strong>ingreso nacional bruto (INB) per cápita</strong>, ajustado para reflejar la disminución de la utilidad del ingreso a niveles más altos.</p>

      {/* IDH Hoja de Ruta */}
      <section>
        <div>
          <h2>Hoja de ruta del Índice de Desarrollo Humano</h2>
          <div className="image-container">
            <img src={hdiRoadMap} alt="Hoja de ruta del Índice de Desarrollo Humano" className="responsive-image" />
          </div>
          <p className="image_subtitle">
            <a href="https://hdr.undp.org/data-center/human-development-index#/indicies/HDI" target="_blank" rel="noopener noreferrer">
              Programa de las Naciones Unidas para el Desarrollo (PNUD)
            </a>
          </p>
        </div>
      </section>

      {/* 📊 Altair JSON Chart Section */}
      <div>
        <h2>Gráfica IDH</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div>
            <div id="vis"></div> {/* Vega-Lite Chart renders here */}
            <pre style={{ background: "#f4f4f4", padding: "10px", overflowX: "auto" }}>
              {JSON.stringify(chartData, null, 2)}
            </pre> {/* Display JSON for debugging */}
          </div>
        )}
      </div>

      {/* Footer (No Changes) */}
      <footer>
        <main>
          <section>
            <h1>Contáctanos</h1>
          </section>
          <section>
            <div className="footer-container">
              <div className="left-container">
                <h2>Oficiales de Información <br /> (Ley 141-2019)</h2>
                <p>
                  Sr. Edgardo Vázquez Rivera <br />
                  Secretario Oficina de Secretaría <br />
                  <a href="mailto:Vazquez_e@jp.pr.gov" className="custom-link">Vazquez_e@jp.pr.gov</a> <br />
                  787 723-6200 ext. 16637 <br /><br />
                  Plan. Erika Rivera Felicié <br />
                  Ayudante Especial <br />
                  <a href="mailto:ivera_e1@jp.pr.gov" className="custom-link">ivera_e1@jp.pr.gov</a> <br /><br />
                  Lcda Aida Silver Cintrón <br />
                  Abogada Oficina Asuntos Legales <br />
                  <a href="mailto:Silver_A@jp.pr.gov" className="custom-link">Silver_A@jp.pr.gov</a> <br />
                  787 723-6200 ext. 16016
                </p>
                <h2>Oficina de Datos PRITS</h2>
                <p>
                  Carlos Castillo Domena <br />
                  Director Oficina de Administración Interna <br />
                  <a href="mailto:castillo_r@jp.pr.gov" className="custom-link">castillo_r@jp.pr.gov</a> <br />
                  787 723-6200 ext. 16019
                </p>
              </div>
              <div className="right-container">
                <h2><strong>Dirección Postal</strong></h2>
                <p>
                  PO Box 4119 <br />
                  San Juan P.R. 00940-1119 <br />
                  Tel: (787) 723-6200 (Cuadro)<br />
                </p>
                <h2><strong>Dirección Física</strong></h2>
                <p>
                  Centro Gubernamental<br />
                  Roberto Sánchez Vilella<br />
                  Ave. De Diego, Pda 22, <br />
                  Santurce<br />
                </p>
                <section className="maps">
                  <iframe 
                    src="https://www.google.com/maps/embed?..." 
                    width={490} 
                    height={200} 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </section>
              </div>
            </div>
          </section>
        </main>
      </footer>
    </>
  );
};

export default HumanDevelopmentIndex;


