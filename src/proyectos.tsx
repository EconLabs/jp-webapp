import { useNavigate } from 'react-router-dom';

function Proyectos() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Proyectos</h1>

      <button onClick={() => navigate('/')}>Ir a Inicio</button>
      <button onClick={() => navigate('/cuestionarios')}>Ir a Cuestionarios</button>
      <button onClick={() => navigate('/colaboradores')}>Ir a Colaboradores</button>

    </div>
  );
}

export default Proyectos;