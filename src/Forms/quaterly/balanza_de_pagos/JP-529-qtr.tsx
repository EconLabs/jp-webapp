import "../../../styles/JP-529-qtr.css"

function JP_529_qtr() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JP-529</title>

  {/* Header */}
  <section className="header">
    <table className='header_table'>
      <tbody>
        <tr>
          <td id="header_left">
            JP-529 Rev. (7/2017)
            <br />
            Junta de Planificación
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
            <strong>
              Relación de Aportaciones y Donativos Federales Recibidos
              <br />
              quaterly
            </strong>
            <br />
            (INSTITUCIONES PRIVADAS)
            <br />
          </td>
          <td id="header_right">
            Centro Gubernamental Roberto Sánchez Vilella
            <br />
            Apartado 41119
            <br />
            San Juan, Puerto Rico 00940-1119
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Main */}
  <main>
    <form method="POST" action="{% url 'web_app:JP-529-qtr' %}">
      <section className="trimester">
        <select name="dropdown_fiscal_year_2" className='dropdown_fiscal_year'>
          <option value="">Select Trimester</option>
          <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
          <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
          <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
          <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
        </select>
        <input
          type="number"
          id="year"
          name="year1"
          min={1000}
          max={9999}
          placeholder="Año"
        />
      </section>
      <section className='main_table'>
        <table>
          <tbody>
            <tr>
              <th id="left_box" colSpan={2}>
                Nombre de la Institución:{" "}
                <input
                  type="text"
                  id="nombre"
                  name="company"
                  placeholder="Company Name"
                  
                />
              </th>
              <th id="right_box">
                Dirección:{" "}
                <input
                  type="text"
                  id="direccion"
                  name="address"
                  placeholder="Address"
                  
                />
              </th>
            </tr>
            <tr>
              <th id="left_box">
                Persona de Contacto:{" "}
                <input
                  type="text"
                  id="contacto"
                  name="liaison_officer"
                  placeholder="Liaison Officer"
                  
                />
              </th>
              <th id="no_border">
                Correo Electrónico:{" "}
                <input
                  type="text"
                  id="title"
                  name="email"
                  placeholder="sophie@email.com"
                  
                />
              </th>
              <th id="right_box">
                Teléfono:{" "}
                <input
                  type="tel"
                  id="telefono"
                  name="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minLength={12}
                  maxLength={12}
                  placeholder="123-456-7890"
                  
                />
              </th>
            </tr>
          </tbody>
        </table>
        <section>
          <br />
          Es Institución sin Fines de Lucro?
          <input
            type="radio"
            id="radio-3"
            name="choice"
            
            defaultValue="Si"
          />
          Sí
          <input
            type="radio"
            id="radio-3"
            name="choice"
            
            defaultValue="No"
          />
          No
          <p>
            <strong>I. APORTACIONES FEDERALES RECIBIDAS</strong>
            <br />
          </p>
          <ul>A. Aportaciones federales directas</ul>
          <ul>
            <h6>En miles de dólares ($000)</h6>
          </ul>
          <p />
        </section>
        <table>
          <tbody>
            <tr>
              <td id="table_header">
                <p>
                  Nombre de la
                  <br />
                  Agencia Federal
                </p>
              </td>
              <td id="table_header">
                <p>Programa Federal</p>
              </td>
              <td id="table_header">
                <p>Cantidad Recibida $</p>
              </td>
              <td id="table_header">
                <p>Fecha de Recibo</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a1"
                  placeholder="Federal Company Name"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a1"
                  placeholder="Federal Program"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a1"
                  placeholder="Recived Money"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="date_a1"
                  placeholder="MM/DD/YYYY"
                  
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a2"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a2"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a2"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a2" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a3"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a3"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a3"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a3" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a4"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a4"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a4"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a4" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a5"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a5"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a5"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a5" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a6"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a6"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a6"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a6" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a7"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a7"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a7"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a7" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_a8"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_a8"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_a8"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_a8" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <ul>B. Aportaciones a través de agencias locales</ul>
        <p />
        <table>
          <tbody>
            <tr>
              <td id="table_header">
                <p>
                  Nombre de la
                  <br />
                  Agencia Federal
                </p>
              </td>
              <td id="table_header">
                <p>Programa Federal</p>
              </td>
              <td id="table_header">
                <p>Cantidad Recibida $</p>
              </td>
              <td id="table_header">
                <p>Fecha de Recibo</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b1"
                  placeholder="Federal Company Name"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b1"
                  placeholder="Federal Program"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b1"
                  placeholder="Recived Money"
                  
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="date_b1"
                  placeholder="MM/DD/YYYY"
                  
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b2"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b2"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b2"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b2" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b3"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b3"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b3"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b3" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b4"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b4"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b4"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b4" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b5"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b5"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b5"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b5" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b6"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b6"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b6"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b6" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b7"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b7"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b7"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b7" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  type="text"
                  name="agencia_b8"
                  placeholder="Federal Company Name"
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="federal_program_b8"
                  placeholder="Federal Program"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  name="quantity_b8"
                  placeholder="Recived Money"
                />
              </td>
              <td>
                {" "}
                <input type="text" name="date_b8" placeholder="MM/DD/YYYY" />
              </td>
            </tr>
          </tbody>
        </table>
        </section>
      <p id="page-number">1</p>
    </form>
  </main>
  {/* --------------------------------- Second Table --------------------------------- */}
  <main id="second-table">
    <section>
      <br />
      <p>
        <strong>
          II. DONATIVOS RECIBIDOS Y ENVIADOS DE ESTADOS UNIDOS Y PAISES
          EXTRANJEROS
        </strong>
        <br />
      </p>
      <ul>A. Recibidos de Estados Unidos y países extranjeros</ul>
      <p />
    </section>
    <section className="divider-container">
      <table>
        <tbody>
          <tr>
            <th rowSpan={2}>Nombre de la Institución o Empresa Privada</th>
            <th rowSpan={2}>Cantidad $</th>
            <th rowSpan={2}>Fecha de Recibido</th>
          </tr>
          {/* Line 1 */}
          <tr />
          <tr>
            <td>
              <input
                type="text"
                name="instuition1"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money1" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date1" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 2 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition2"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money2" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date2" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 3 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition3"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money3" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date3" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 4 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition4"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money4" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date4" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 5 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition5"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money5" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date5" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <ul>B. Enviados a Estados Unidos y países extranjeros</ul>
      <p />
      <table>
        <tbody>
          <tr>
            <th rowSpan={2}>Nombre de la Institución o Empresa Privada</th>
            <th rowSpan={2}>Cantidad $</th>
            <th rowSpan={2}>Fecha de Recibido</th>
          </tr>
          {/* Line 1 */}
          <tr />
          <tr>
            <td>
              <input
                type="text"
                name="instuition6"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money6" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date6" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 2 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition7"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money7" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date7" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 3 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition8"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money8" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date8" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 4 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition9"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money9" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date9" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
          {/* Line 5 */}
          <tr>
            <td>
              <input
                type="text"
                name="instuition10"
                placeholder="Instuition's Name"
              />
            </td>
            <td>
              <input type="number" name="money10" placeholder="$" />
            </td>
            <td>
              <input type="text" name="date10" placeholder="MM/DD/YYYY" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
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
                  Nombre de la persona que suple la información:
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="date"
                  id="position"
                  name="date"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Fecha:
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
                  name="title"
                  placeholder="Titulo"
                />
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Titulo del puesto:
                  <br />
                </p>
              </div>
            </div>
          </section> 
    <section className="submit-button-container">
      <input type="submit" defaultValue="SUBMIT" className="submit-button" />
    </section>
    <p id="page-number">2</p>
  </main>
  {/* --------------------------------- Instructions PAGE 3--------------------------------- */}
  <main id="instruction-page">
    <p className="instruction-header" id="center_text">
      <br />
      INSTRUCCIONES PARA LLENAR EL FORMULARIO JP-529
      <br />
      INSTRUCCIONES PRIVADAS
      <br />
    </p>
    <b>
      <ul> I. APORTACIONES FEDERALES RECIBIDAS</ul>
    </b>
    <ul>
      <ul>A. Recibidos de Estados Unidos y países extranjeros</ul>
    </ul>
    <ul>
      <ul>
        <ul>
          Aquellas aportaciones que se reciben directamente de la agencia
          federal
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          1. <u>Nombre de la agencia federal</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Indique el nombre de la agencia federal de la cual se recibe
          directamente la aportación. Este es el caso en que <u>no media</u> el
          gobierno estatal o alguna otra dependecia.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          2. <u>Programa Federal</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Se refiere a aquellos programas para los cuales la institucón recibe
          fondos.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          3. <u>Cantidad recibida</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Indique el valor ($) de las aportaciones federales recibidas durante
          el periodo de tiempo que cubre este informe.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          4. <u>Fecha de recibo</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Indique la fecha exacta en que la institución recibió los fondos.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>B. Aportaciones a través de agencias locales</ul>
    </ul>
    <ul>
      <ul>
        <ul>
          1. <u>Nombre de la agencia local</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Se refiere a aquellas aportaciones que recibe de algunas agencias del
          gobierno del Estado Libre Asociado.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          2. <u>Programa Local</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul>
           Indique el nombre del proyecto local bajo el cual se recibe la
          aportación.
        </ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          3. <u>Cantidad recibida</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul> Igual a la Instrucción 1-A-3.</ul>
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <ul>
          4. <u>Fecha de recibo</u>
        </ul>
      </ul>
    </ul>
    <ul>
      <ul>
        <ul> Igual a la Instrucción 1-A-4.</ul>
      </ul>
    </ul>
    <br />
    <table>
      <tbody>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
    <b>
      <ul> II. DONATIVOS RECIBIDOS Y ENVIADOS</ul>
    </b>
    <ul>
      <ul>
        <u>A. Recibidos de Estados Unidos y países extranjeros</u>
      </ul>
    </ul>
    <ul>
      <ul>
         Se refiere a todo donativo que <u>recibe</u> la Institución procedente
        de otras Instituciones <u>no gubernamentales</u> ubicadas fuere de
        Puerto Rico durante el año que cubre el informe.
      </ul>
    </ul>
    <br />
    <ul>
      <ul>
        <u>B. Enviadas a Estados unidos y países extranjeros</u>
      </ul>
    </ul>
    <ul>
      <ul>
         Se refiere a todo donativo <u>enviados</u> a Instituciones ubicadas
        fuera de Puerto Rico durante el año que cubre el informe.
      </ul>
    </ul>
    <br />
    <br />
    <br />
    <table>
      <tbody>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
    <p id="page-number">3</p>
  </main>
</>
  );
}

export default JP_529_qtr;