import "../../../styles/JP-375-qtr.css";

function JP_375_qtr() {
  return (
    <>
  <meta charSet="UTF-8" />
  <title>
    JP-375 Encuesta sobre el valor pendiente de pago de hipotecas sobre
    viviendas
  </title>
  {/* Header */}
  <section className="header">
    <table>
      <tbody>
        <tr>
          <td id="header_left">
            JP-375
            <br />
            Abril 97
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
            <p>
              ENCUESTA SOBRE EL VALOR PENDIENTE DE PAGO DE HIPOTECAS SOBRE
              VIVIENDAS
              <br />
              (EN MILES DE DÓLARES)
            </p>
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
    <form method="POST" action="{% url 'web_app:JP-375-qtr' %}">
      <section className="divider-container">
        <table>
          <tbody>
            <tr>
              <th rowSpan={2}>
                <h3>Partida</h3>
              </th>
              <th rowSpan={2}>
                <select className="dropdown_fiscal" name="dropdown_fiscal_year_1">
                  <option value="">Select Trimester</option>
                  <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                  <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                  <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                  <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                </select>
                Año:{" "}
                <input
                  id="year"
                  type="number"
                  name="year_1"
                  
                  min={1000}
                  max={9999}
                  placeholder="Año"
                />
              </th>
              <th rowSpan={2}>
                <select className="dropdown_fiscal" name="dropdown_fiscal_year_2">
                  <option value="">Select Trimester</option>
                  <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                  <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                  <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                  <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                </select>
                Año:{" "}
                <input
                  id="year"
                  type="number"
                  name="year_2"
                  
                  min={1000}
                  max={9999}
                  placeholder="Año"
                />
              </th>
              <th rowSpan={2}>
                <select className="dropdown_fiscal" name="dropdown_fiscal_year_3">
                  <option value="">Select Trimester</option>
                  <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                  <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                  <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                  <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                </select>
                Año:{" "}
                <input
                  id="year"
                  type="number"
                  name="year_3"
                  
                  min={1000}
                  max={9999}
                  placeholder="Año"
                />
              </th>
            </tr>
            {/* Line 1 */}
            <tr></tr>
            <tr>
              <td>A. Hipoteca Poseídas por la Institución 1/</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 2 */}
            <tr>
              <td> 1. F.H.A.</td>
              <td>
                <input type="number" name="FHA_1" placeholder="$"  />
              </td>
              <td>
                <input type="number" name="FHA_2" placeholder="$"  />
              </td>
              <td>
                <input type="number" name="FHA_3" placeholder="$"  />
              </td>
            </tr>
            {/* Line 3 */}
            <tr>
              <td> 2. Adm. de Veteranos</td>
              <td>
                <input
                  type="number"
                  name="veteran_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 4 */}
            <tr>
              <td> 3. Banco de la Vivienda</td>
              <td>
                <input
                  type="number"
                  name="bank_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bank_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bank_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 5 */}
            <tr>
              <td> 4. Convencionales</td>
              <td>
                <input
                  type="number"
                  name="conventional_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 6 */}
            <tr>
              <td> 5. Otras</td>
              <td>
                <input type="number" name="other_1" placeholder="$" />
              </td>
              <td>
                <input type="number" name="other_2" placeholder="$" />
              </td>
              <td>
                <input type="number" name="other_3" placeholder="$" />
              </td>
            </tr>
            {/* Line 7 */}
            <tr>
              <td>B. Hipotecas Servidas, Total</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 8 */}
            <tr>
              <td> 1. A Residentes de Puerto Rico</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 9 */}
            <tr>
              <td>  a) Corporaciones 936</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 10 */}
            <tr>
              <td>   1) F.H.A.</td>
              <td>
                <input
                  type="number"
                  name="FHA_2_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_2_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_2_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 11 */}
            <tr>
              <td>   2) Adm. de Veteranos</td>
              <td>
                <input
                  type="number"
                  name="veteran_2_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_2_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_2_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 12 */}
            <tr>
              <td>   3) Convencionales</td>
              <td>
                <input
                  type="number"
                  name="conventional_2_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_2_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_2_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 13 */}
            <tr>
              <td>   4) Otras</td>
              <td>
                <input type="number" name="others_2_1" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_2_2" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_2_3" placeholder="$" />
              </td>
            </tr>
            {/* Line 14 */}
            <tr>
              <td>  b) Otros</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 15 */}
            <tr>
              <td>   1) F.H.A.</td>
              <td>
                <input
                  type="number"
                  name="FHA_3_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_3_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_3_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 16 */}
            <tr>
              <td>   2) Adm. de Veteranos</td>
              <td>
                <input
                  type="number"
                  name="veteran_3_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_3_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_3_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 17 */}
            <tr>
              <td>   3) Banco de la Vivienda</td>
              <td>
                <input
                  type="number"
                  name="bank_2_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bank_2_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bank_2_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 18 */}
            <tr>
              <td>   4) Convencionales</td>
              <td>
                <input
                  type="number"
                  name="conventional_3_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_3_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_3_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 19 */}
            <tr>
              <td>   5) Otras</td>
              <td>
                <input type="number" name="others_3_1" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_3_2" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_3_3" placeholder="$" />
              </td>
            </tr>
            {/* Line 20 */}
            <tr>
              <td> 2. A No-Residentes 2/</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 21 */}
            <tr>
              <td>  a) Valor de las Hipotecas</td>
              <td />
              <td />
              <td />
            </tr>
            {/* Line 22 */}
            <tr>
              <td>   1) F.H.A.</td>
              <td>
                <input
                  type="number"
                  name="FHA_4_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_4_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="FHA_4_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 23 */}
            <tr>
              <td>   2) Adm. de Veteranos</td>
              <td>
                <input
                  type="number"
                  name="veteran_4_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_4_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="veteran_4_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 24 */}
            <tr>
              <td>   3) Convencionales</td>
              <td>
                <input
                  type="number"
                  name="conventional_4_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_4_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="conventional_4_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
            {/* Line 25 */}
            <tr>
              <td>   4) Otras</td>
              <td>
                <input type="number" name="others_4_1" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_4_2" placeholder="$" />
              </td>
              <td>
                <input type="number" name="others_4_3" placeholder="$" />
              </td>
            </tr>
            {/* Line 26 */}
            <tr>
              <td>
                  b) Comisiones Recibidas de <br />
                   No-Residentes 3/
              </td>
              <td>
                <input
                  type="number"
                  name="commissions_1"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="commissions_2"
                  placeholder="$"
                  
                />
              </td>
              <td>
                <input
                  type="number"
                  name="commissions_3"
                  placeholder="$"
                  
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <br />
      <div id="custom-line" />
      <div>
        1/ Son aquellas hipotecas que la firma contabiliza como activos en su
        estado de situación.
        <br />
        <br />
        2/ Se consideran no-residentes aquellos individuos y firmas (incluyendo
        bancos y otras instituciones financieras) que no operan oficinas en
        Puerto Rico y por consiguiente, el pago por concepto de interés sobre
        estas hipotecas se les envía al exterior.
        <br />
        <br />
        3/ Favor informar las comisiones recibidas durante el año fiscal.
        <br />
        <div>
        <section>
            <div className="big-box-bottom">
              <div className="left-signature">
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  placeholder="Nombre"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                Nombre de persona que suministra la información
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Posición"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                Rango o posición que ocupa en la empresa
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

export default JP_375_qtr;