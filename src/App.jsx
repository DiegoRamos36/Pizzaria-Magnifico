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
  const [carrinho, setCarrinho] = React.useState([]);
  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find(
      (item) => item.id === produto.id && item.tipo === produto.tipo,
    );
    if (produtoExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id && item.tipo === produto.tipo
          ? { ...item, quantidade: item.quantidade + 1 }
          : item,
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produto) => {
    const novoCarrinho = carrinho.filter(
      (item) => !(item.id === produto.id && item.tipo === produto.tipo),
    );
    setCarrinho(novoCarrinho);
  };
  const totalCarrinho = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0,
    );
  };
  const pagar = ({ target }) => {
    if (carrinho.length != 0) {
      const number = '+5521981734706';
      const mensagem = `Olá, gostaria de fazer um pedido de:\n ${carrinho.map(
        (item) => item.nome,
      )}\n para o endereço: ${infoModal.endereco}\n N/Casa: ${
        infoModal.numero
      } \n Ponto de Referência: ${infoModal.ref} \n Quem recebe: ${
        infoModal.nome
      }\n Total: ${Math.round(totalCarrinho())} reais`;
      const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
        mensagem,
      )}`;
      window.location.href = linkWhatsApp;
    }
  };

  const attInfoModal = (info) => {
    setInfoModal(info);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          removerDoCarrinho={removerDoCarrinho}
          pagar={pagar}
          adicionarAoCarrinho={adicionarAoCarrinho}
          totalCarrinho={totalCarrinho}
          attInfoModal={attInfoModal}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Produtos
                  carrinho={carrinho}
                  adicionarAoCarrinho={adicionarAoCarrinho}
                  infoModal={infoModal}
                />
              }
            />
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
            <Route
              path="bebidas/:id"
              element={<Produto infoModal={infoModal} chosen={'bebidas'} />}
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
