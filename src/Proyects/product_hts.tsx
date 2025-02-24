import "../styles/product_hts.css";

// const API = "'http://192.168.50.24:5751/graph/tmp?naics_code=";


const ProductHTS: React.FC = () => {
  return (
    <div className="container">
      <main>
        <section>
          <h1>Productos HTS</h1>
          <p>
            El Sistema Armonizado de Designación y Codificación de Mercancías (HTS, por sus siglas en inglés) 
            es utilizado en Puerto Rico para clasificar los productos que ingresan y salen del país. Este sistema, 
            basado en estándares internacionales, facilita el comercio y asegura que los productos sean gravados 
            correctamente de acuerdo con su tipo. En esta sección, encontrarás información detallada sobre los 
            productos HTS, sus códigos correspondientes y las tasas aplicables en el comercio exterior. Además, 
            se incluyen reportes y estadísticas que reflejan las transacciones comerciales de Puerto Rico, contribuyendo 
            a la planificación económica y fiscal del país.
          </p>
        </section>

        <form id="hts-form" onSubmit={(e) => e.preventDefault()}>
          <div className="graph_container">
            <h1 id="graph_title">HTS Data</h1>
            <section id="buttons">
              <section id="dropdowns">
                <label htmlFor="frequency">Frecuencia:</label>
                <select name="frequency" id="frequency">
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="qrt">Quarterly</option>
                  <option value="fiscal">Fiscal</option>
                </select>
              </section>
              <section id="dropdowns">
                <label htmlFor="hts_code">HTS Code:</label>
                <select name="hts_code" id="hts_code">
                  
                </select>
              </section>
              <section id="dropdowns">
                <label htmlFor="trade_type">Trade Type:</label>
                <select name="trade_type" id="trade_type">
                  <option value="imports">Imports</option>
                  <option value="exports">Exports</option>
                </select>
              </section>
              <button id="submit" type="button">Submit</button>
            </section>
          </div>
        </form>
        </main>

        <footer>
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
                </div>
                <div className="right-container">
                  <h2><strong>Dirección Postal</strong></h2>
                  <p>
                    PO Box 4119 <br />
                    San Juan P.R. 00940-1119 <br />
                    Tel: (787) 723-6200 (Cuadro)
                  </p>
                  <h2><strong>Dirección Física</strong></h2>
                  <p>
                    Centro Gubernamental<br />
                    Roberto Sánchez Vilella<br />
                    Ave. De Diego, Pda 22, <br />
                    Santurce
                  </p>
                  <section className="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7501887340845!2d-66.0698374248245!3d18.449648171336893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f497801a7b7%3A0x68ace32a0663b72f!2sGovernor%20Roberto%20S%C3%A1nchez%20Vilella%20Government%20Center!5e0!3m2!1sen!2sus!4v1717000266481!5m2!1sen!2sus" width="490" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                  </section>
                </div>
              </div>
            </section>
        </footer>
    </div>
  );
};

export default ProductHTS;
