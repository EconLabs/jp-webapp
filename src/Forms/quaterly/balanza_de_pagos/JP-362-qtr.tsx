import "../../../styles/JP-362-qrt.css"

function JP_362_qrt() {
  return (
    <form method="POST" action="/your-endpoint-here">
      {/* Header */}
      <section className="header">
        <table id="header_line">
          <tbody>
            <tr>
              <td id="header_left">
                JP-362
                <br />
                Rev. 7/17
                <br />
                
                <input
                  id="header_inputs_right"
                  type="number"
                  name="year_1"
                  min={1000}
                  max={9999}
                  placeholder="Año / Year"
                  required
                />
                <br/>
                <select name="dropdown_fiscal_year_1" className='dropdown_fiscal_year' required>
                  {["Q1-(Jan-Mar)", "Q2-(Apr-Jun)", "Q3-(Jul-Sep)", "Q4-(Oct-Dec)"].map((q, i) => (
                    <option key={i} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </td>
              <td id="header_center">
                <img
                  src="src/assets/JP_poster.jpg"
                  alt="Logo Junta Planificación"
                  id="header_image"
                />
                <br />
                TRANSACCIONES CON EL EXTERIOR PARA LA BALANZA DE PAGOS DE PUERTO
                RICO
                <br />
                (EN MILES DE DOLARES)
                <br />
                Quarterly
              </td>
              <td id="header_right">
                Junta de Planificación de Puerto Rico
                <br />
                Programa de Planificación Económica y Social
                <br />
                Subprograma de Análisis Económico
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Body */}
      <main>
        <section>
          <div className="body_header">
            <strong id="name">Nombre de la Empresa Pública:</strong>
            <input
              id="name_input"
              className="text-box space-between"
              name="company_name"
              placeholder="Nombre de Empresa Pública"
              required
            />
          </div>
        </section>
        <br />
        <div className="custom-line" />
        <section className="divider-container">
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Descripción</th>
                <th rowSpan={2}>Balance Inicial</th>
                <th rowSpan={2}>Emisiones</th>
                <th rowSpan={2}>Amortizaciones</th>
                <th rowSpan={2}>Balance Final</th>
                <th rowSpan={2}>Interés Pagado en el año</th>
                <th rowSpan={2}>Nombre del acreedor en el exterior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 id="table_title">
                    1. Deudas en el Exterior <br />
                    De Largo Plazo, Total
                  </h4>
                </td>
                <td>
                  <input type="number" name="debts_balance" placeholder="$" required />
                </td>
                <td>
                  <input type="number" name="debts_emision" placeholder="$" required />
                </td>
                <td>
                  <input type="number" name="debts_amortizacion" placeholder="$" required />
                </td>
                <td>
                  <input type="number" name="debts_final" placeholder="$" required />
                </td>
                <td>
                  <input type="number" name="debts_interes" placeholder="$" required />
                </td>
                <td>
                  <input type="text" name="debts_acreedor" placeholder="Nombre del acreedor" required />
                </td>
              </tr>
              {/* Puedes añadir más filas aquí siguiendo la misma estructura */}
            </tbody>
          </table>
        </section>

        {/* Signature Section */}
        <section>
          <div className="big-box-bottom">
            <div className="left-signature">
              <input type="text" id="signature" name="signature" placeholder="Name" required />
              <hr />
              <p>Name of person filling the questionnaire</p>
            </div>
            <div className="right-signature">
              <input type="text" id="position" name="position" placeholder="Position" required />
              <hr />
              <p>Position</p>
            </div>
          </div>
          <div className="big-box-bottom" id="signature-bottom">
            <div className="left-signature">
              <input type="date" id="date" name="date" placeholder="Date" required />
              <hr />
              <p>Date</p>
            </div>
            <div className="right-signature">
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                minLength={12}
                maxLength={12}
                name="phone"
                placeholder="123-456-7890"
                required
              />
              <hr />
              <p>Phone Number</p>
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <section className="submit-button-container">
          <input type="submit" value="SUBMIT" className="submit-button" />
        </section>
      </main>
    </form>
  );
}

export default JP_362_qrt;
