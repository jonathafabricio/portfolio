// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import Home from './pages/Home/Home';
// import Projetos from './pages/Projetos/Projetos';
// import Certificados from './pages/Certificados/Certificados';
// import Cuartain from './components/Cuartain/Cuartain';
// // import Contato from './pages/Contato/Contato';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projetos" element={<Projetos />} />
//           <Route path="/certificados" element={<Certificados />} />
//           {/* <Route path="/contato" element={<Contato />} /> */}
//           {/* Adicione outras rotas conforme necessário  */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


//******************************** */

// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Projetos from './pages/Projetos/Projetos'; // Importe sua nova página aqui
// import Certificados from './pages/Certificados/Certificados';
// // import Contato from './pages/Contato/Contato';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projetos" element={<Projetos />} />
//           <Route path="/certificados" element={<Certificados />} />
//           {/* <Route path="/contato" element={<Contato />} /> */}
//           {/* Adicione outras rotas conforme necessário  */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;







//eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Certificados from './pages/Certificados/Certificados';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <Router>
      <div className="App">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;


