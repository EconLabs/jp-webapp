import "../../../styles/JP-363-qrt.css";


function JP_363_qtr() {
  return (
        <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        JP-363 Transactions in Puerto Rico of External Insurance Companies Quaterly
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        
      />
      <link
        rel="apple-touch-icon"
        type="image/x-icon"
        
      />
      <link
        rel="apple-touch-icon"
        type="image/x-icon"
        
      />
      <link
        rel="apple-touch-icon"
        type="image/x-icon"
        
      />
      <link
        rel="apple-touch-icon"
        type="image/x-icon"
        
      />
      {/* Header */}
      <section className="header">
        <div className="left-header">
          <strong>Puerto Rico Planning Board</strong>
          <br />
          Program of Economic and Social Planning
          <br />
          Subprogram of Economic Analysis
          <br />
          Roberto Sánchez Vilella Government Center
          <br />
          P.O. Box 41119 San Juan, Puerto Rico 00940
          <br />
        </div>
        <div className="right-header">
          <div>
            <img
              src="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico.png"
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <main>
        <form method="POST" action="{% url 'web_app:JP-363' %}">
          <section>
            <p id="title">
              JP-363: INVESTMENT IN SECURITIES OF THE CENTRAL GOVERNMENT,
              MUNICIPIOS***, PUBLIC CORPORATIONS AND OTHER AGENCIES
              <br />
              Quaterly
            </p>
            <table id='table-container'>
              <tbody>
                <tr id="table-header">
                  <th rowSpan={3}> INVESTMENT IN: </th>
                  <th colSpan={2}>
                    {" "}
                    OUTSTANDING BALANCES (PAR VALUE)
                    <br /> (IN THOUSANDS OF DOLLARS)
                  </th>
                  <th rowSpan={3}>
                    {" "}
                    NAME OF AGENT OR BROKER SERVIVING YOU IN PUERTO RICO**{" "}
                  </th>
                </tr>
                <tr id="table-header">
                  <th> BONDS* </th>
                  <th> NOTES </th>
                </tr>
                <tr id="table-header">
                  <th>
                    {" "}
                    <select id="quater_select" name="dropdown_fiscal_year_1">
                      <option value="">Select Trimester</option>
                      <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                      <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                      <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                      <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                    </select>
                    <input
                      type="number"
                      id="year"
                      name="bonds_year_left"
                      min={1000}
                      max={9999}
                      placeholder="Year"
                      
                    />
                  </th>
                  <th>
                    {" "}
                    <select id="quater_select" name="dropdown_fiscal_year_2">
                      <option value="">Select Trimester</option>
                      <option value="Q1-(Jan-Mar)">Q1-(Jan-Mar)</option>
                      <option value="Q2-(Apr-Jun)">Q2-(Apr-Jun)</option>
                      <option value="Q3-(Jul-Sep)">Q3-(Jul-Sep)</option>
                      <option value="Q4-(Oct-Dec)">Q4-(Oct-Dec)</option>
                    </select>
                    <input
                      type="number"
                      id="year"
                      name="bonds_year_right"
                      min={1000}
                      max={9999}
                      placeholder="Year"
                      
                    />
                  </th>
                </tr>
                {/* LINE 1 */}
                <tr>
                  <th id="invest-column"> 1. Central Government</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="CG_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="CG_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="CG_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 2 */}
                <tr>
                  <th id="invest-column"> 2. Municipios</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="town_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="town_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="town_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 3 */}
                <tr>
                  <th id="invest-column"> 3. Public Corporations</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PC_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PC_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="PC_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 4 */}
                <tr>
                  <th id="invest-column">a. P.R. Electric Power Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="EPA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="EPA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="EPA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 5 */}
                <tr>
                  <th id="invest-column">b. P.R. Highway Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="HA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="HA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="HA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 6 */}
                <tr>
                  <th id="invest-column">c. P.R. Aqueduct and Sewer Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="ASA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="ASA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="ASA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 7 */}
                <tr>
                  <th id="invest-column">d. Public Building Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PBA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PBA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="PBA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 8 */}
                <tr>
                  <th id="invest-column">e. P.R. Ports Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="PA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="PA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 9 */}
                <tr>
                  <th id="invest-column">f. P.R. Telephone Authority</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="TA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="TA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="TA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 10 */}
                <tr>
                  <th id="invest-column">g. P.R. Industrial Development Company</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="IDC_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="IDC_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="IDC_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 11 */}
                <tr>
                  <th id="invest-column">h. P.R. Government Development Bank</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="GDB_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="GDB_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="GDB_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 12 */}
                <tr>
                  <th id="invest-column">i. P.R. Housing Finance Corporation</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="HFC_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="HFC_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="HFC_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 13 */}
                <tr>
                  <th id="invest-column">
                    <input
                      type="text"
                      id="input-box"
                      name="other"
                      placeholder="j. Other"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_bonds"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_notes"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="other_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 14 */}
                <tr>
                  <th id="invest-column">
                    <input
                      type="text"
                      id="input-box"
                      name="other_PC_1"
                      placeholder="k. Other"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_PC_1_bonds"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_PC_1_notes"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="other_PC_1_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 15 */}
                <tr>
                  <th id="invest-column">
                    <input
                      type="text"
                      id="input-box"
                      name="other_PC_2"
                      placeholder="l. Other"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_PC_2_bonds"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other_PC_2_notes"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="other_PC_2_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 16 */}
                <tr>
                  <th id="invest-column">4. G.N.M.A. Mortgage Bank Securities</th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="GNMA_bonds"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="GNMA_notes"
                      placeholder="$"
                      
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="GNMA_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
                {/* LINE 17 */}
                <tr>
                  <th id="invest-column">
                    <input
                      type="text"
                      id="input-box"
                      name="other5"
                      placeholder="5. Other"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other5_bonds"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="number"
                      id="input-box"
                      name="other5_notes"
                      placeholder="$"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      id="input-box"
                      name="other5_name_service"
                      placeholder="Name"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </section>
          {/* INSTRUCTION */}
          <section>
            <p id="instruction">
              <strong>*</strong> Please, inform under this column the par value of
              bonds which are not savings bonds. <br />
              <strong>**</strong> The name of the agent or broker if needed to avoid
              duplicity, since we obtain information from various sources. <br />
              <strong>***</strong> Municipios are equivalent as U.S. counties.
            </p>
          </section>
          <section>
            <div className="big-box-bottom">
              <div className="left-signature">
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  placeholder="Name"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Name of person filling the questionnaire
                  <br />
                </p>
              </div>
              <div className="right-signature">
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Position"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Position
                  <br />
                </p>
              </div>
            </div>
            <div className="big-box-bottom" id="signature-bottom">
              <div className="left-signature">
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Date"
                  
                />{" "}
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Date
                  <br />
                </p>
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
                  
                />
                {/* Signature Input */}
                <hr /> {/* Signature Line */}
                <p>
                  Phone Number
                  <br />
                </p>
              </div>
            </div>
          </section>
          <section className="submit-button-container">
            <input type="submit" defaultValue="SUBMIT" className="submit-button" />
          </section>
        </form>
      </main>
    </>

    
  );
}

export default JP_363_qtr;