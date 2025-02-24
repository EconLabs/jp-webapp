import "../../../styles/JP-536-2-qtr.css"

function JP_536_2_qtr() {
  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JP-536.2 Información para el Producto Bruto Quaterly</title>

  {/* Header */}
  <section className="header">
    <table>
      <tbody>
        <tr>
          <td id="header_left">
            JP-536.2
            <br />
            Junta de Planificación
            <br />
            Programa de Planificación Económica y Social
            <br />
            Subprograma de Análisis Económico
            <br />
          </td>
          <td id="header_center">
            <img
              src="src/assets/JP_poster.jpg"
              alt="Logo Junta Planificación"
              id="header_image"
            />
            <br />
            <strong>Empresas Públicas</strong>
            <br />
            <strong>Información para el Producto Bruto</strong>
            <br />
            quaterly
            <br />
          </td>
          <td id="header_right">
            Centro Gubernamental Roberto Sánchez Vilella
            <br />
            P.O.BOX 41119
            <br />
            San Juan, Puerto Rico 00940-1119
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Main */}
  <main>
    <form method="POST" action="{% url 'web_app:JP-536-2-qtr' %}">
      <section className="divider-container">
        <table>
          <tbody>
            <tr>
              <th rowSpan={3}>
                <h3>PARTIDAS</h3>
              </th>
              <th>CIFRA EN MILES DE DOLARES</th>
            </tr>
            {/* Line 1 */}
            <tr></tr>
            <tr>
              <td>   
                <div className='center'>                  
                  <select id="quarter" name="dropdown_fiscal_year_1">
                    <option value="">Trimester</option>
                    <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                    <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                    <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                    <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                  </select>
                  <input
                    type="number"
                    id="year"
                    name="start_year"
                    min={1000}
                    max={9999}
                    placeholder="year"
                    required
                  />
                </div>
              </td>
            </tr>
            {/* Line 2 */}
            <tr>
              <td>1. Inventario final al cierre del año fiscal 1\</td>
              <td>
                <input
                  type="number"
                  name="inventario"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
            {/* Line 3 */}
            <tr>
              <td>2. Compras de maquinarias y equipo 2\</td>
              <td>
                <input
                  type="number"
                  name="compras"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
            {/* Line 4 */}
            <tr>
              <td>3. Depreciación 3\</td>
              <td>
                <input type="number" name="depre" placeholder="$" required />
              </td>
            </tr>
            {/* Line 5 */}
            <tr>
              <td> a. Maquinaria y equipo</td>
              <td>
                <input
                  type="number"
                  name="maquinaria"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
            {/* Line 6 */}
            <tr>
              <td>b. Equipo</td>
              <td>
                <input type="number" name="equipo" placeholder="$" />
              </td>
            </tr>
            {/* Line 7 */}
            <tr>
              <td>4. Equipo de computadoras hard-software</td>
              <td>
                <input
                  type="number"
                  name="computadora"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
            {/* Line 8 */}
            <tr>
              <td>5. Alquiler de equipo de computadora hard-software</td>
              <td>
                <input
                  type="number"
                  name="alquiler"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
            {/* Line 9 */}
            <tr>
              <td>6. Pago de licencia programa de computadora</td>
              <td>
                <input
                  type="number"
                  name="licencia"
                  placeholder="$"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <br />
      <div id="custom-line" />
      <div>
        1/ / Favor de informar las cantidades correspondientes, si es que la
        empresa mantiene una partida de Inventarios, según el Estado de
        Situación.
        <br />
        <br />
        2/ Inclúyase como parte de ésta, la maquinaria y equipo que no es parte
        de la inversión en construcción y que está sujeta a un ajuste por
        depreciación, como por ejemplo: vehículo de motor, equipo pesado, equipo
        de oficina, etcétera.
        <br />
        <br />
        3/ Inclúyase como parte de ésta, la maquinaria y equipo que no es parte
        de la inversión en construcción y que está sujeta a un ajuste por
        depreciación, como por ejemplo: vehículo de motor, equipo pesado, equipo
        de oficina, etcétera.
        <br />
        <div>
          <section>
            <div className="big-box-bottom">
              <div className="left-signature">
                <input
                  type="text"
                  id="signature"
                  name="company_name"
                  placeholder="Company name"
                  required
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Nombre de la empresa pública
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="tel"
                  id="position"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minLength={12}
                  maxLength={12}
                  name="phone"
                  placeholder="123-456-7890"
                  required
                />
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Número de teléfono
                  <br />
                </p>
              </div>
            </div>
            <div className="big-box-bottom" id="signature-bottom">
              <div className="left-signature">
                <input
                  type="text"
                  id="date"
                  name="name_title"
                  placeholder="Name-Position"
                  required
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Nombre y título de la persona que suministra la información
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="date"
                  id="phone"
                  name="date"
                  placeholder="Date"
                  required
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Date
                  <br />
                </p>
              </div>
            </div>
          </section>
          <section className="submit-button-container">
            <input
              type="submit"
              defaultValue="SUBMIT"
              className="submit-button"
            />
          </section>
        </div>
      </div>
    </form>
  </main>
</>
    
  );
}

export default JP_536_2_qtr;