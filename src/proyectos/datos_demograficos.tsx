import React, { useState, useEffect } from "react";
import vegaEmbed from "vega-embed";
import "../css/website.css"; // Adjust path as needed
import "../css/indice.css"; // Adjust path as needed
import hdiRoadMap from "../assets/hdiRoadMap.png";

import logo from "../assets/gobierno_de_puerto_rico.png";

const DatosDemograficos: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toggle burger menu
  const toggleBurgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <li><a href="/proyectos/indice_desarrollo_humano">Índice de Desarrollo Humano</a></li>
        </ul>
      </div>

      {/* <div className="sct-head">
            <div className="div-block">
                <div className="agency-header">
                    <div className="div-agency-category">
                        <h1 className="agency-category">Proyectos</h1>
                    </div>
                    <div className="div-agency-logo">
                        <div className="div-agency-name">
                            <h1 className="agency-name-sm">Junta de Planificación de</h1>
                            <h1 className="agency-name-lg">puerto<br/>rico<br/></h1>
                        </div>
                        <picture>
                          <source 
                            srcSet="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico-p-500.png" 
                            media="(max-width: 479px)" 
                          />
                          <source 
                            srcSet="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico.png" 
                            media="(min-width: 480px)" 
                          />
                          <img 
                            src="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico.png" 
                            loading="lazy" 
                            height="175" 
                            alt="Gobierno de Puerto Rico" 
                            className="logo-gobierno" 
                          />
                        </picture>
                    </div>
                </div>
                <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar center-align w-nav">
                    <div className="menu-button w-nav-button">
                        <div className="icon w-icon-nav-menu">

                        </div>
                    </div>
                    <nav role="navigation" className="navmenu w-nav-menu">
                        <a href= "/" className="nav-link w-nav-link">INICIO</a>
                        <a href="/Forms/" className="nav-link w-nav-link">CUESTIONARIOS</a>
                        <a href= "/proyectos/" className="nav-link w-nav-link">PROYECTOS</a>
                        <a href= "/colaboradores/" className="nav-link w-nav-link">NUESTRO EQUIPO</a>
                    </nav>
            </div>
        </div>

      </div> */}
        <div className="horizontal-line"></div>

      <h1>Datos Demográficos</h1>

      <p className="main_content">
          Se proporcionan datos consolidados geográficamente que abarcan todo Puerto Rico, clasificados por regiones, 
          áreas de salud, municipios de residencia y municipios de ocurrencia. En los documentos de 'Informe Anual Estadísticas Vitales' contienen variables socio-demográficas 
          como edad, sexo, educación, estado jurídico, ocupación y estado civil anterior. También se incluyen datos médicos, 
          clínicos y procesales específicos para cada evento. Los datos se presentan en números absolutos, porcentajes y tasas. 
          La información reflejada fue conceguida por 89 tablas, 20 gráficas y 5 mapas, organizados en secciones que incluyen narrativa, resumen y estadísticas 
          demográficas, datos poblacionales, nacimientos vivos, mortalidad general, mortalidad por causas externas, mortalidad infantil, 
          mortalidad fetal, mortalidad materna, matrimonios, divorcios y expectativa de vida al nacer. Al final del informe se adjuntan 
          copias de cada certificado para ilustrar la información recopilada.

          Todos estos datos fueron utilizados para la creación de las gráficas presentadas en esta página.
        </p>

        {/*SUBBODY 1*/}
            <h2>Documentos</h2>

            <p className="main_content">
                <a href="https://estadisticas.pr/en/122-estadisticas-vitales" className="custom-link" role="link">Estadísticas Vitales</a>
                <div/>
                <a href="https://www.bde.pr.gov/BDE/PRED.html" className="custom-link" role="link">Puerto Rico Economic Data</a>
                <div/>
                <a href="https://estadisticas.pr/en/inventario-de-estadisticas/informe-anual-estadisticas-vitales" className="custom-link" role="link">Informe Anual Estadísticas Vitales</a>
                <div/>
                <a href="https://jp.pr.gov/centro-de-datos-macroeconomicos/" className="custom-link" role="link">Centro de Datos Macroeconómicos</a>
                <div/>
            </p>

          {/*SUBBODY 1*/}

            <section>
                <h2>Instrucciones</h2>
                <p className="main_content">1. Las líneas en cada una de las gráficas están representadas colores diferentes, y la leyenda a la derecha identifica qué color corresponde a cada variable. </p>
                <p className="main_content">3. Si desea eliminar una línea de la gráfica, haga clic en su nombre en la leyenda. Para volver a agregarla, haga clic nuevamente en el nombre.</p>
                <p className="main_content">4. Las gráficas permiten la manipulación del eje Y, lo que le permite ajustar la escala y visualizar los datos de manera más detallada o más amplia según sus necesidades.</p>
                <p className="main_content">5. Si pasa el cursor sobre la línea deseada, se mostrará la información que necesita.</p>
                <div/>

                <p className="main_content"><strong>Nota:</strong> Las series para la Migración Neta Trimestral y Mensual que aparecen en las gráficas no son las variables originales, son unas series calculadas.</p>
            </section>
            <div/>

            {/*  Demographic Graph */}

            <h2>Gráfica Anual</h2>

            <h2>Gráfica Trimestral</h2>

            <h2>Gráfica Mensual</h2>

            <h2>Gráfica Año Fiscal</h2>


      {/* Footer */}  
                  {/* ------------------ FOOTER --------------------- */}
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
                    787 723-6200 ext. 16019 <br /><br />
                    <a href="https://jppr.sharepoint.com/sites/BibliotecaDigital" className="custom-link">BDV (Uso interno)</a>
                  </p>
                </div>
                <div className="right-container">
                  <h2><strong>Dirección Postal</strong></h2>
                  <p>
                    PO Box 4119 <br />
                    San Juan P.R. 00940-1119 <br />
                    Tel: (787) 723-6200 (Cuadro)<br />
                  </p><h2><strong>Dirección Física</strong></h2>
                  <p>
                    Centro Gubernamental<br />
                    Roberto Sánchez Vilella<br />
                    Ave. De Diego, Pda 22, <br />
                    Santurce<br />
                  </p>
                  <p />
                  <section className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7501887340845!2d-66.0698374248245!3d18.
                                            449648171336893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f497801a7b7%3A0x68ace32a0663b72f!2sGov
                                            ernor%20Roberto%20S%C3%A1nchez%20Vilella%20Government%20Center!5e0!3m2!1sen!2sus!4v1717000266481!5m2!1sen!2sus" width={490} height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </section>
                </div>
              </div>
            </section>
          </main>
        </footer>
         {/* ------------------ END OF FOOTER --------------------- */}

  </>

  );
};

export default DatosDemograficos;






