import React from 'react';
import "../../../styles/JP-361-qrt.css"

const JP_361_qrt: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          JP-361 - Quarterly Transactions in Puerto Rico of External Insurance Companies
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/images/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" href="/images/android-chrome-512x512.png" />
        <link rel="stylesheet" href="/css/forms/balanza_de_pagos/JP-361-qrt.css" />
        <link rel="stylesheet" href="/css/website.css" />
      </head>

      {/* Header */}
      <section className="header">
        <div className="left-header">
          <strong>Puerto Rico Planning Board</strong>
          <br />
          Program of Economic and Social Analysis
          <br />
          P.O. Box 41119, San Juan, Puerto Rico 00940
          <br />
          Subprogram of Economic Analysis
        </div>
        <div className="right-header">
          <img
            src="https://assets-global.website-files.com/60ddbc422188bb3fab87d219/60ddbc422188bbbe5a87d251_gobierno-de-puerto-rico.png"
            alt="Logo"
          />
        </div>
      </section>

      {/* Formulario */}
      <main>
        <form method="POST" action="/api/submit-form">
          <h2 className="header-bottom">
            TRANSACTIONS IN PUERTO RICO OF EXTERNAL INSURANCE COMPANIES
          </h2>

          {/* Tabla de ingresos y gastos */}
          <div className='talble-container'>
            <table>
              <tbody>
                <tr>
                  <th colSpan={2}>Part I : Income and Expenses</th>
                  <th id="center_dropdown_year">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <input
                        className='year_input'
                        type="number"
                        name="income_expenses_year_1"
                        min={1000}
                        max={9999}
                        placeholder="Year"
                        required
                      />
                      <select name="dropdown_fiscal_year_1" className='dropdown_fiscal_year' required>
                        {["Q1-(Jan-Mar)", "Q2-(Apr-Jun)", "Q3-(Jul-Sep)", "Q4-(Oct-Dec)"].map((q, i) => (
                          <option key={i} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                </tr>

                {/* Ingresos */}
                <tr>
                  <td colSpan={2}><strong>A. Income</strong></td>
                  <td />
                </tr>
                {["Life", "Disability", "Auto", "Other", "Interest", "Rent of land and building", "Other (Specify)"].map((item, i) => (
                  <tr key={i}>
                    <td colSpan={2}>   {item}</td>
                    <td>
                      <input type="number" name={`income_${item.toLowerCase().replace(/ /g, "_")}`} placeholder="$" required />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}><strong>Total income</strong></td>
                  <td><input type="number" name="total_income" placeholder="$" required /></td>
                </tr>

                {/* Gastos */}
                <tr>
                  <td colSpan={2}><strong>B. Expenses</strong></td>
                  <td />
                </tr>
                {["Life", "Disability", "Auto", "Other", "Salaries", "Interest", "Rent", "Depreciation", "Donations", "Commissions to Employees", "Commissions to Brokers", "Other operational expenses"].map((item, i) => (
                  <tr key={i}>
                    <td colSpan={2}>   {item}</td>
                    <td>
                      <input type="number" name={`expenses_${item.toLowerCase().replace(/ /g, "_")}`} placeholder="$" required />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}><strong>Total expenses</strong></td>
                  <td><input type="number" name="total_expenses" placeholder="$" required /></td>
                </tr>
                <tr>
                  <td colSpan={2}><strong>Net profit or loss</strong></td>
                  <td><input type="number" name="net_profit" placeholder="$" required /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tabla de balances */}
          <div className='talble-container' id='table-2'>
            <table>
              <tbody>
                <tr>
                  <th colSpan={4}>PART II :</th>
                  <th id="center-item">Outstanding Balance</th>
                  <th id="center-item">Interest Received</th>
                </tr>
                <tr>
                  <td colSpan={4}>A. Residential Mortgages serviced directly by your firm:</td>
                  <td />
                  <td />
                </tr>
                {["F.H.A. guaranteed", "Veterans Administration", "Conventional", "Other"].map((item, i) => (
                  <tr key={i}>
                    <td colSpan={4}>   {item}</td>
                    <td><input type="number" name={`${item.toLowerCase().replace(/ /g, "_")}_1`} placeholder="$" required /></td>
                    <td><input type="number" name={`${item.toLowerCase().replace(/ /g, "_")}_2`} placeholder="$" required /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Firmas y fecha */}
          <section>
            <div className="big-box-bottom">
              <div className="left-signature-1">
                <input type="text" id="signature" name="signature" placeholder="Name" required />
                <hr />
                <p>Name of person filling the questionnaire</p>
              </div>
              <div className="right-signature-1">
                <input type="text" id="position" name="position" placeholder="Position" required />
                <hr />
                <p>Position</p>
              </div>
            </div>
            <div className="big-box-bottom" id="signature-bottom">
              <div className="left-signature-2">
                <input type="date" id="date" name="date" required />
                <hr />
                <p>Date</p>
              </div>
              <div className="right-signature-2">
                <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="123-456-7890" required />
                <hr />
                <p>Phone Number</p>
              </div>
            </div>
          </section>

          {/* Botón de envío */}
          <section className="submit-button-container">
            <input type="submit" value="SUBMIT" className="submit-button" />
          </section>
        </form>
      </main>
    </div>
  );
};

export default JP_361_qrt;
