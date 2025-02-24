import React from 'react';
import { useNavigate } from 'react-router-dom';

function Proyectos() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Proyectos</h1>

      <button onClick={() => navigate('/')}>Ir a Inicio</button>
      <button onClick={() => navigate('/cuestionarios')}>Ir a Cuestionarios</button>
      <button onClick={() => navigate('/colaboradores')}>Ir a Colaboradores</button>


      <div>
        <button onClick={() => navigate('/proyectos/indice_desarrollo_humano')}>Índice de Desarrollo Humano</button>
        <button onClick={() => navigate('/proyectos/datos_demograficos')}>Datos Demográficos</button>
        </div>

    </div>
  );
}

export default Proyectos;