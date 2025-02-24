import { Routes, Route } from 'react-router-dom';
import Home from './home'; //  Home component
import Cuestionarios from './cuestionarios'; //  Cuestionarios component
import Proyectos from './proyectos'; //  Cuestionarios component
import Colaboradores from './colaboradores'; //  Cuestionarios component

          {/* Import all links to projects */}
import HumanDevelopmentIndex from './proyectos/indice_desarrollo_humano';
import DatosDemograficos from './proyectos/datos_demograficos';


          {/* Import all links to forms */}
import JP_541 from  './Forms/yearly/construccion/JP-541';

import JP_361 from  './Forms/yearly/balanza_de_pagos/JP-361';
import JP_362 from  './Forms/yearly/balanza_de_pagos/JP-362';
import JP_363 from  './Forms/yearly/balanza_de_pagos/JP-363';
import JP_364 from  './Forms/yearly/balanza_de_pagos/JP-364';
import JP_375 from  './Forms/yearly/balanza_de_pagos/JP-375';
import JP_383 from  './Forms/yearly/balanza_de_pagos/JP-383';
import JP_529 from  './Forms/yearly/balanza_de_pagos/JP-529';
import JP_539_2 from  './Forms/yearly/balanza_de_pagos/JP-539-2';
import JP_544_1 from  './Forms/yearly/balanza_de_pagos/JP-544-1';
import JP_544_2 from  './Forms/yearly/balanza_de_pagos/JP-544-2';
import JP_544 from  './Forms/yearly/balanza_de_pagos/JP-544';
import JP_547 from  './Forms/yearly/balanza_de_pagos/JP-547';

import JP_304 from  './Forms/quaterly/balanza_de_pagos/JP-304';
import JP_361_qtr from  './Forms/quaterly/balanza_de_pagos/JP-361-qtr';
import JP_362_qtr from  './Forms/quaterly/balanza_de_pagos/JP-362-qtr';
import JP_363_qtr from  './Forms/quaterly/balanza_de_pagos/JP-363-qtr';
import JP_364_qtr from  './Forms/quaterly/balanza_de_pagos/JP-364-qtr';
import JP_375_qtr from  './Forms/quaterly/balanza_de_pagos/JP-375-qtr';
import JP_529_qtr from  './Forms/quaterly/balanza_de_pagos/JP-529-qtr';
import JP_536_2_qtr from  './Forms/quaterly/balanza_de_pagos/JP-536-2-qtr';
import JP_544_qtr from  './Forms/quaterly/balanza_de_pagos/JP-544-qtr';

import IP_110 from  './Forms/yearly/ingreso_neto/IP-110';
import IP_210 from  './Forms/yearly/ingreso_neto/IP-210';
import IP_220 from  './Forms/yearly/ingreso_neto/IP-220';
import IP_230 from  './Forms/yearly/ingreso_neto/IP-230';
import IP_310 from  './Forms/yearly/ingreso_neto/IP-310';
import IP_310b from  './Forms/yearly/ingreso_neto/IP-310b';
import IP_420 from  './Forms/yearly/ingreso_neto/IP-420';
import IP_440 from  './Forms/yearly/ingreso_neto/IP-440';
import IP_440g from  './Forms/yearly/ingreso_neto/IP-440g';
import IP_480 from  './Forms/yearly/ingreso_neto/IP-480';
import IP_480a from  './Forms/yearly/ingreso_neto/IP-480a';
import IP_490 from  './Forms/yearly/ingreso_neto/IP-490';
import IP_510 from  './Forms/yearly/ingreso_neto/IP-510';
import IP_520 from  './Forms/yearly/ingreso_neto/IP-520';
import IP_520a from  './Forms/yearly/ingreso_neto/IP-520a';
import IP_520s from  './Forms/yearly/ingreso_neto/IP-520s';
import IP_530 from  './Forms/yearly/ingreso_neto/IP-530';
import IP_540 from  './Forms/yearly/ingreso_neto/IP-540';
import IP_540a from  './Forms/yearly/ingreso_neto/IP-540a';
import IP_540J from  './Forms/yearly/ingreso_neto/IP-540J';
import IP_540P from  './Forms/yearly/ingreso_neto/IP-540P';
import IP_540S from  './Forms/yearly/ingreso_neto/IP-540S';
import IP_540v from  './Forms/yearly/ingreso_neto/IP-540v';
import IP_610 from  './Forms/yearly/ingreso_neto/IP-610';
import IP_620 from  './Forms/yearly/ingreso_neto/IP-620';
import IP_710 from  './Forms/yearly/ingreso_neto/IP-710';
import IP_720 from  './Forms/yearly/ingreso_neto/IP-720';
import IP_810 from  './Forms/yearly/ingreso_neto/IP-810';
import JP_560_2 from  './Forms/yearly/ingreso_neto/JP-560-2';
import JP_560_63110 from  './Forms/yearly/ingreso_neto/JP-560-63110';
import JP_560_63111 from  './Forms/yearly/ingreso_neto/JP-560-63111';
import JP_560_63210 from  './Forms/yearly/ingreso_neto/JP-560-63210';

import IP_110_qtr from  './Forms/quaterly/ingreso_neto/IP-110-qtr';
import IP_210_qtr from  './Forms/quaterly/ingreso_neto/IP-210-qtr';
import IP_220_qtr from  './Forms/quaterly/ingreso_neto/IP-220-qtr';
import IP_230_qtr from  './Forms/quaterly/ingreso_neto/IP-230-qtr';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuestionarios" element={<Cuestionarios />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/colaboradores" element={<Colaboradores />} />
      <Route path="/proyectos/indice_desarrollo_humano" element={<HumanDevelopmentIndex/>} />
      <Route path="/proyectos/datos_demograficos" element={<DatosDemograficos/>} />


      <Route path="/JP-541" element={<JP_541 />} />

      <Route path="/JP-361" element={<JP_361 />} />
      <Route path="/JP-362" element={<JP_362 />} />
      <Route path="/JP-363" element={<JP_363 />} />
      <Route path="/JP-364" element={<JP_364 />} />
      <Route path="/JP-375" element={<JP_375 />} />
      <Route path="/JP-383" element={<JP_383 />} />
      <Route path="/JP-529" element={<JP_529 />} />
      <Route path="/JP-539-2" element={<JP_539_2 />} />
      <Route path="/JP-544-1" element={<JP_544_1 />} />
      <Route path="/JP-544-2" element={<JP_544_2 />} />
      <Route path="/JP-544" element={<JP_544 />} />
      <Route path="/JP-547" element={<JP_547 />} />
      <Route path="/JP-304" element={<JP_304 />} />
      <Route path="/JP-361-qtr" element={<JP_361_qtr />} />
      <Route path="/JP-362-qtr" element={<JP_362_qtr />} />
      <Route path="/JP-363-qtr" element={<JP_363_qtr />} />
      <Route path="/JP-364-qtr" element={<JP_364_qtr />} />
      <Route path="/JP-375-qtr" element={<JP_375_qtr />} />
      <Route path="/JP-529-qtr" element={<JP_529_qtr />} />
      <Route path="/JP-536-2-qtr" element={<JP_536_2_qtr />} />
      <Route path="/JP-544-qtr" element={<JP_544_qtr />} />
      <Route path="/IP-110" element={<IP_110 />} />
      <Route path="/IP-210" element={<IP_210 />} />
      <Route path="/IP-220" element={<IP_220 />} />
      <Route path="/IP-230" element={<IP_230 />} />
      <Route path="/IP-310" element={<IP_310 />} />
      <Route path="/IP-310b" element={<IP_310b />} />
      <Route path="/IP-420" element={<IP_420 />} />
      <Route path="/IP-440" element={<IP_440 />} />
      <Route path="/IP-440g" element={<IP_440g />} />
      <Route path="/IP-480" element={<IP_480 />} />
      <Route path="/IP-480a" element={<IP_480a />} />
      <Route path="/IP-490" element={<IP_490 />} />
      <Route path="/IP-510" element={<IP_510 />} />
      <Route path="/IP-520" element={<IP_520 />} />
      <Route path="/IP-520a" element={<IP_520a />} />
      <Route path="/IP-520s" element={<IP_520s />} />
      <Route path="/IP-530" element={<IP_530 />} />
      <Route path="/IP-540" element={<IP_540 />} />
      <Route path="/IP-540a" element={<IP_540a />} />
      <Route path="/IP-540J" element={<IP_540J />} />
      <Route path="/IP-540P" element={<IP_540P />} />
      <Route path="/IP-540S" element={<IP_540S />} />
      <Route path="/IP-540v" element={<IP_540v />} />
      <Route path="/IP-610" element={<IP_610 />} />
      <Route path="/IP-620" element={<IP_620 />} />
      <Route path="/IP-710" element={<IP_710 />} />
      <Route path="/IP-720" element={<IP_720 />} />
      <Route path="/IP-810" element={<IP_810 />} />
      <Route path="/JP-560-2" element={<JP_560_2 />} />
      <Route path="/JP-560-63110" element={<JP_560_63110 />} />
      <Route path="/JP-560-63111" element={<JP_560_63111 />} />
      <Route path="/JP-560-63210" element={<JP_560_63210 />} />
      <Route path="/IP-110-qtr" element={<IP_110_qtr />} />
      <Route path="/IP-210-qtr" element={<IP_210_qtr />} />
      <Route path="/IP-220-qtr" element={<IP_220_qtr />} />
      <Route path="/IP-230-qtr" element={<IP_230_qtr />} />

    </Routes>
  );
}

export default App;
