import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Context/UserContext';
import Produtos from './Produtos';
import Produto from './Produto';
import Footer from './Footer';
import Contato from './Contato';
import Sobre from './Sobre';

const App = () => {
  const [infoModal, setInfoModal] = React.useState(null);

  const attInfoModal = (info) => {
    setInfoModal(info);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header attInfoModal={attInfoModal} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route
              path="pizzas/:id"
              element={<Produto infoModal={infoModal} chosen={'pizzas'} />}
            />
            <Route
              path="aperitivos/:id"
              element={<Produto infoModal={infoModal} chosen={'aperitivos'} />}
            />
            <Route
              path="calzones/:id"
              element={<Produto infoModal={infoModal} chosen={'calzones'} />}
            />
            <Route path="contato" element={<Contato />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
