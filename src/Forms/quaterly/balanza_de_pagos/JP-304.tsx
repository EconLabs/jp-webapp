import React from 'react';
import "../../../styles/JP-304.css"

const JP_304: React.FC = () => {
  return (
    <div className='page'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          JP-304 Encuesta sobre el Valor de la Inversión en Obras de Construcción
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" type="image/x-icon" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" type="image/x-icon" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" type="image/x-icon" href="/images/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" type="image/x-icon" href="/images/android-chrome-512x512.png" />
        <link rel="stylesheet" href="/css/forms/balanza_de_pagos/JP-304.css" />
        <link rel="stylesheet" href="/css/website.css" />
      </head>

      {/* Encabezado */}
      <section className="header">
        <table>
          <tbody>
            <tr>
              <td id="header_left">
                JP-304 Rev.
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
                RELACIÓN DE APORTACIONES FEDERALES APROBADAS, RECIBIDAS Y GASTADAS
                <br />
                Orden Ejecutiva 12372
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

      {/* Formulario */}
      <main>
        <form method="POST" action="/api/submit-form" className="form">
          <section className="trimester">
            Trimestre de
            <select id="meses" name="start_month" required>
              {[
                "enero", "febrero", "marzo", "abril", "mayo", "junio", 
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
              ].map((mes, index) => (
                <option key={index} value={mes}>{mes}</option>
              ))}
            </select>
            a
            <select id="meses" name="end_month" required>
              {[
                "enero", "febrero", "marzo", "abril", "mayo", "junio", 
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
              ].map((mes, index) => (
                <option key={index} value={mes}>{mes}</option>
              ))}
            </select>
            de
            <input
              type="number"
              id="year"
              name="year"
              min={1000}
              max={9999}
              placeholder="year"
              required
            />
          </section>

          <table>
            <tbody>
              <tr>
                <th id="left_box" colSpan={2}>
                  Nombre de la Agencia, Corporación o Municipio:{" "}
                  <input
                    className="header_input"
                    type="text"
                    id="nombre"
                    name="name"
                    placeholder="Company Name"
                    required
                  />
                </th>
                <th id="right_box">
                  Dirección:{" "}
                  <input
                    className="header_input"
                    type="text"
                    id="direccion"
                    name="direction"
                    placeholder="Address"
                    required
                  />
                </th>
              </tr>
              <tr>
                <th id="left_box">
                  Persona de Contacto:{" "}
                  <input
                    className="header_input"
                    type="text"
                    id="contacto"
                    name="liaison_officer"
                    placeholder="Liaison Officer"
                    required
                  />
                </th>
                <th id="no_border">
                  Título:{" "}
                  <input
                    className="header_input"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                  />
                </th>
                <th id="right_box">
                  Teléfono:{" "}
                  <input
                    className="header_input"
                    type="tel"
                    id="telefono"
                    name="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    minLength={12}
                    maxLength={12}
                    placeholder="123-456-7890"
                    required
                  />
                </th>
              </tr>
            </tbody>
          </table>

          <section>
            <p>
              I. APORTACIONES FEDERALES DIRECTAS (de la agencia federal a la dependencia estatal):
              En miles de dólares ($000)
            </p>
          </section>

          {/* Tabla de aportaciones federales */}
          <table>
            <thead>
              <tr>
                {Array.from({ length: 10 }, (_, i) => (
                  <th key={i} id="table_header">{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {[
                  "Nombre de la Agencia Federal",
                  "Número de Catálogo y Título del Programa Federal",
                  '"SAI Number"',
                  "Título del Programa Local",
                  "Aportación Federal Aprobada",
                  "Fecha de Aprobación",
                  "Aportación Federal Recibida",
                  "Fecha de Recibo",
                  "Aportación Federal Gastada",
                  "Fecha del Gasto"
                ].map((header, index) => (
                  <th key={index} id="table_header">
                    <p>{header}</p>
                  </th>
                ))}
              </tr>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(10)].map((_, colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="text"
                        id={`input_box_${rowIndex + 1}_${colIndex + 1}`}
                        name={`field_${rowIndex + 1}_${colIndex + 1}`}
                        placeholder="Ingrese datos"
                        required
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <section className="submit-button-container">
            <input type="submit" value="SUBMIT" className="submit-button" />
          </section>
        </form>
      </main>
    </div>
  );
};

export default JP_304;
