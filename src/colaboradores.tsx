import { useNavigate } from 'react-router-dom';

function Colaboradores() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' , }}>
      <h1>Colaboradores</h1>

      <button onClick={() => navigate('/')}>Ir a Inicio</button>
      <button onClick={() => navigate('/proyectos')}>Ir a Proyectos</button>
      <button onClick={() => navigate('/cuestionarios')}>Ir a Cuestionarios</button>

    </div>
  );
}

export default Colaboradores;