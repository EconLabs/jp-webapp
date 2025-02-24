import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Cuestionarios() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Cuestionarios</h1>

      {/* Buttons using useNavigate */}
      <button onClick={() => navigate('/')}>Ir a Inicio</button>
      <button onClick={() => navigate('/proyectos')}>Ir a Proyectos</button>
      <button onClick={() => navigate('/colaboradores')}>Ir a Colaboradores</button>

      <div>
        
        <h2>Construcción</h2>

          {/* Link to Form JP_541 */}
          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-541">Encuesta sobre el Valor de la Inversión en Obras de Construcción</Link>
          </div>

        
        <h2>Balanza de Pagos Yearly</h2>

          {/* Links to yearly BP Forms */}

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-361">JP-361</Link></div>
    
          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-362">JP-362</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-363">JP-363</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-364">JP-364</Link></div>

          <div style={{ marginTop: '20px' }}>
          <Link to="/JP-375">JP-375</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-383">JP-383</Link></div>

          <div style={{ marginTop: '20px' }}>
          <Link to="/JP-529">JP-529</Link></div>

          <div style={{ marginTop: '20px' }}>
          <Link to="/JP-536-2">JP-536-2</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-544-1">JP-544-1</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-544-2">JP-544-2</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-544">JP-544</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-547">JP-547</Link></div>

        <h2>Balanza de Pagos Quaterly</h2>

          {/* Links to quaterly BP Forms */}

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-304">JP-304</Link></div>
    
          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-361-qtr">JP-361-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-362-qtr">JP-362-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-363-qtr">JP-363-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-364-qtr">JP-364-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-375-qtr">JP-375-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-529-qtr">JP-529-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-536-2-qtr">JP-536-2-qtr</Link></div>
          
          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-544-qtr">JP-544-qtr</Link></div>

        <h2>Ingreso Neto Yearly</h2>

          {/* Links to quaterly IP Forms */}

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-110">IP-110</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-210">IP-210</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-220">IP-220</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-230">IP-230</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-310">IP-310</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-310b">IP-310b</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-420">IP-420</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-440">IP-440</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-440g">IP-440g</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-480">IP-480</Link></div>

            <div style={{ marginTop: '20px' }}>
            <Link to="/IP-480a">IP-480a</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-490">IP-490</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-510">IP-510</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-520">IP-520a</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-520s">IP-520s</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-530">IP-530</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540">IP-540</Link></div>

            <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540a">IP-540a</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540J">IP-540J</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540P">IP-540P</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540S">IP-540S</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-540v">IP-540v</Link></div>

          
          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-610">IP-610</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-710">IP-710</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-720">IP-720</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-810">IP-810</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-560-2">JP-560-2</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-560-63110">JP-560-63110</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-560-63111">JP-560-63111</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/JP-560-63210">JP-560-63210</Link></div>

        <h2>Ingreso Neto Quaterly</h2>

          {/* Links to quaterly IP Forms */}

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-110-qtr">IP-110-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-210-qtr">IP-210-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-220-qtr">IP-220-qtr</Link></div>

          <div style={{ marginTop: '20px' }}>
            <Link to="/IP-230-qtr">IP-230-qtr</Link></div>


      </div>

    </div>

  );
}

export default Cuestionarios;