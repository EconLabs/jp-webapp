import "../../../styles/JP-364-qtr.css";

function JP_364_qtr() {
  return (
      <>
    <meta charSet="UTF-8" />
    <title>
      JP-364 Transacciones con el exterior para la balanza de pagos de Puerto Rico
    </title>
    {/* Header */}
    <section className="header">
      <table>
        <tbody>
          <tr>
            <td id="header_left">
              J.P. -364
              <br />
              Rev. 7/17
              <br />
              Centro Gubernamental Roberto Sánchez Vilella
              <br />
              Apartado 41119, San Juan, Puerto Rico 00940
              <br />
            </td>
            <td id="header_center">
              <img
                src="src/assets/JP_poster.jpg"
                alt="Logo Junta Planificación"
                id="header_image"
              />
              <br />
              <h3>
                TRANSACCIONES CON EL EXTERIOR PARA LA BALANZA DE PAGOS DE PUERTO
                RICO
                <br />
                Quaterly
              </h3>
              <br />
            </td>
            <td id="header_right">
              Junta de Planificación de Puerto Rico
              <br />
              Programa de Planificación Económica y Social
              <br />
              Subprograma de Análisis Económico
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <main>
      <form method="POST" action="{% url 'web_app:JP-364-qtr' %}">
        <section className="divider-container">
          <table>
            <tbody>
              <tr>
                <th rowSpan={4}>
                  <h3>AGENCIA</h3>
                </th>
                <th colSpan={2}>BALANCE PENDIENTE(VALOR PAR)</th>
                <th rowSpan={4}>
                  NOMBRE DEL AGENTE CORREDOR** QUE LE DA SERVICIOS EN P.R.
                </th>
              </tr>
              {/* Line 1 */}
              <tr></tr>
              <tr>
                <th>Bonos*</th>
                <th>Pagarés</th>
              </tr>
              {/* Line 2 */}
              <tr>
                <th>
                  <select id="quater_select" name="dropdown_fiscal_year_1">
                    <option value="">Select Trimester</option>
                    <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                    <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                    <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                    <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                  </select>
                  <input
                    id="year"
                    type="number"
                    name="year_bono1"
                    
                    min={1000}
                    max={9999}
                    placeholder="Year"
                  />
                </th>
                <th>
                  <select id="quater_select" name="dropdown_fiscal_year_2">
                    <option value="">Select Trimester</option>
                    <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                    <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                    <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                    <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                  </select>
                  <input
                    id="year"
                    type="number"
                    name="year_bono2"
                    
                    min={1000}
                    max={9999}
                    placeholder="Year"
                  />
                </th>
              </tr>
              {/* Line 3 */}
              <tr>
                <td>1. Gobierno del E.L.A.</td>
                <td>
                  <input
                    type="number"
                    name="ELA_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="ELA_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ELA_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 4 */}
              <tr>
                <td>2. Gobierno Municipales</td>
                <td>
                  <input
                    type="number"
                    name="municipio_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="municipio_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="municipio_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 5 */}
              <tr>
                <td>3. Corporaciones Públicas</td>
                <td>
                  <input
                    type="number"
                    name="corp_publicas_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="corp_publicas_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="corp_publicas_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 6 */}
              <tr>
                <td>
                   a. Autoridad de Energía <br />
                  Eléctrica
                </td>
                <td>
                  <input
                    type="number"
                    name="AEE_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="AEE_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="AEE_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 7 */}
              <tr>
                <td>
                   b. Autoridad de <br />
                  Carreteras
                </td>
                <td>
                  <input
                    type="number"
                    name="Acarreteras_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="Acarreteras_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="Acarreteras_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 8 */}
              <tr>
                <td>
                   c. Autoridad de <br />
                  Acueductos y <br />
                  Alcantarillados
                </td>
                <td>
                  <input
                    type="number"
                    name="AAA_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="AAA_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="AAA_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 9 */}
              <tr>
                <td>
                   d. Autoridad de Edificios <br />
                  Públicos
                </td>
                <td>
                  <input
                    type="number"
                    name="AEP_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="AEP_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="AEP_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 10 */}
              <tr>
                <td>
                   e. Autoridad de los <br />
                  Puertos
                </td>
                <td>
                  <input
                    type="number"
                    name="AP_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="AP_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="AP_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 11 */}
              <tr>
                <td> f.Autoridad de Teléfonos</td>
                <td>
                  <input
                    type="number"
                    name="AT_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="AT_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="AT_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 12 */}
              <tr>
                <td>
                   g. Compañía de Fomento <br />
                  Industrial
                </td>
                <td>
                  <input
                    type="number"
                    name="CFI_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="CFI_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="CFI_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 13 */}
              <tr>
                <td>
                   h. Banco Gubernamental <br />
                  de Fomento
                </td>
                <td>
                  <input
                    type="number"
                    name="BGF_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="BGF_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="BGF_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 14 */}
              <tr>
                <td>
                   i. Corp. para el <br />
                  Financiamineto de <br />
                  la Vivienda
                </td>
                <td>
                  <input
                    type="number"
                    name="CFV_bono"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="CFV_paga"
                    placeholder="$"
                    
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="CFV_agente"
                    placeholder="Nombre del Agente"
                    
                  />
                </td>
              </tr>
              {/* Line 15 */}
              <tr>
                <td> j. Otros (especifíque)</td>
                <td />
                <td />
                <td />
              </tr>
              {/* Line 16 */}
              <tr>
                <td>
                  <input type="text" name="otherk_title" placeholder="k. Otro" />
                </td>
                <td>
                  <input type="number" name="otherk_bono" placeholder="$" />
                </td>
                <td>
                  <input type="number" name="otherk_paga" placeholder="$" />
                </td>
                <td>
                  <input
                    type="text"
                    name="otherk_agente"
                    placeholder="Nombre del Agente"
                  />
                </td>
              </tr>
              {/* Line 17 */}
              <tr>
                <td>
                  <input type="text" name="otherl_title" placeholder="l. Otro" />
                </td>
                <td>
                  <input type="number" name="otherl_bono" placeholder="$" />
                </td>
                <td>
                  <input type="number" name="otherl_paga" placeholder="$" />
                </td>
                <td>
                  <input
                    type="text"
                    name="otherl_agente"
                    placeholder="Nombre del Agente"
                  />
                </td>
              </tr>
              {/* Line 18 */}
              <tr>
                <td>
                  <input type="text" name="otherm_title" placeholder="m. Otro" />
                </td>
                <td>
                  <input type="number" name="otherm_bono" placeholder="$" />
                </td>
                <td>
                  <input type="number" name="otherm_paga" placeholder="$" />
                </td>
                <td>
                  <input
                    type="text"
                    name="otherm_agente"
                    placeholder="Nombre del Agente"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <br />
        * Favor de informar el valor nominal de aquellos bonos que no sean Bonos
        de Ahorro. <br />
        ** El nombre del agente o corredor, se necesita para evitar duplicidad, ya
        que se obtiene información de diferentes fuentes.
        <br />
      </form>
    </main>
    <br />
    <br />
    <main>
      {/* Segunda Tabla */}
      <section className="divider-container">
        <table>
          {/* Line 1 */}
          <tbody>
            <tr>
              <th rowSpan={2}>Partida</th>
              <th rowSpan={2}>
                <select id="quater_select_2" name="dropdown_fiscal_year_3">
                  <option value="">Select Trimester</option>
                  <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                  <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                  <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                  <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                </select>
                <input
                  id="year"
                  type="number"
                  name="year_balance1"
                  
                  min={1000}
                  max={9999}
                  placeholder="Year"
                />
              </th>
              <th rowSpan={2}>Nombre del Agente que le da Servicios</th>
            </tr>
            {/* Line 2 */}
            <tr></tr>
            <tr>
              <td>4.Hipotecas sobre hogares:</td>
              <td />
              <td />
            </tr>
            {/* Line 3 */}
            <tr>
              <td> a. Garantizadas por la F.H.A.</td>
              <td>
                <input type="number" name="FHA_balance" placeholder="$" />
              </td>
              <td>
                <input
                  type="text"
                  name="FHA_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 4 */}
            <tr>
              <td>
                 b. Garantizadas por Administración <br />
                de Veteranos
              </td>
              <td>
                <input type="number" name="GAV_balance" placeholder="$" />
              </td>
              <td>
                <input
                  type="text"
                  name="GAV_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 5 */}
            <tr>
              <td> c. Convencionales</td>
              <td>
                <input
                  type="number"
                  name="convencionales_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="convencionales_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 6 */}
            <tr>
              <td>
                 d. En participación con otras <br />
                Instituciones
              </td>
              <td>
                <input
                  type="number"
                  name="otras_instituciones_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="otras_instituciones_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 7 */}
            <tr>
              <td>5. Otros préstamos hipotecarios</td>
              <td>
                <input
                  type="number"
                  name="prestamos_hipo_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="prestamos_hipo_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 8 */}
            <tr>
              <td>6. Préstamos comerciales e industriales</td>
              <td>
                <input
                  type="number"
                  name="prestamos_comerciales_industriales_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="prestamos_comerciales_industriales_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 9 */}
            <tr>
              <td>7. Préstamos sobre pólizas</td>
              <td>
                <input
                  type="number"
                  name="prestamos_poliza_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="prestamos_poliza_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 10 */}
            <tr>
              <td>
                8. Reservas acumuladas sobre pólizas de <br />
                seguros
              </td>
              <td>
                <input
                  type="number"
                  name="reservas_poliza_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="reservas_poliza_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
            {/* Line 11 */}
            <tr>
              <td>9. Dividendos acumulados sobre pólizas de seguros</td>
              <td>
                <input
                  type="number"
                  name="dividendos_poliza_balance"
                  placeholder="$"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="dividendos_poliza_agente"
                  placeholder="Nombre del Agente"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="custom-line" />
      <div id="text_button" />
      <section>
            <div className="big-box-bottom">
              <div className="left-signature">
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  placeholder="Firma"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Nombre de la firma:
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Persona Autorizada"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Nombre de la persona autorizada:
                  <br />
                </p>
              </div>
            </div>
            <div className="big-box-bottom" id="signature-bottom">
              <div className="center-signature">
                <input
                  type="tel"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minLength={12}
                  maxLength={12}
                  name="phone"
                  placeholder="123-456-7890"
                  
                />
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Numbero de Telefono:
                  <br />
                </p>
              </div>
            </div>
          </section>
      <section className="submit-button-container">
        <input type="submit" defaultValue="SUBMIT" className="submit-button" />
      </section>
    </main>
  </>

  );
}

export default JP_364_qtr;