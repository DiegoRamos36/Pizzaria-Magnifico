import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos";
import Produto from "./Produto";
import Footer from "./Footer";
import Contato from "./Contato";
import Sobre from "./Sobre";

export interface funcionais {
  removerDoCarrinho(produto: IProduto): void;
  pagar(event: React.MouseEvent): void;
  adicionarAoCarrinho(produto: IProduto): void;
  totalCarrinho(): number;
}

export interface removerDoCarrinho {
  (produto: IProduto): void;
}

export interface pagar {
  (event: React.MouseEvent): void;
}
export interface adicionarAoCarrinho {
  (produto: IProduto): void;
}
export interface totalCarrinho {
  (): number;
}
export type IProduto = {
  id: number;
  nome: string;
  foto: string;
  descricao: string;
  preco: number;
  tipo: string;
  quantidade?: number;
};

export type IinfoModal = {
  ref: string;
  nome: string;
  cidade: string;
  endereco: string;
  numero: number;
};

const App = () => {
  const [infoModal, setInfoModal] = React.useState<IinfoModal>();
  const [carrinho, setCarrinho] = React.useState<IProduto[]>([]);

  const adicionarAoCarrinho = (produto: IProduto) => {
    const produtoExistente = carrinho.find(
      (item) => item.id === produto.id && item.tipo === produto.tipo
    );
    if (produtoExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id && item.tipo === produto.tipo
          ? { ...item, quantidade: (item.quantidade ?? 0) + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerDoCarrinho = (produto: IProduto) => {
    const novoCarrinho = carrinho.filter(
      (item) => !(item.id === produto.id && item.tipo === produto.tipo)
    );
    setCarrinho(novoCarrinho);
  };
  const totalCarrinho = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * (item.quantidade ?? 0),
      0
    );
  };
  const pagar = (event: React.MouseEvent) => {
    if (carrinho.length != 0 && infoModal) {
      const number = "+5521981734706";
      const mensagem = `Olá, gostaria de fazer um pedido de:\n ${carrinho.map(
        (item) => item.nome
      )}\n para o endereço: ${infoModal?.endereco}\n N/Casa: ${
        infoModal.numero
      } \n Ponto de Referência: ${infoModal.ref} \n Quem recebe: ${
        infoModal.nome
      }\n Total: ${Math.round(totalCarrinho())} reais`;
      const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
        mensagem
      )}`;
      window.location.href = linkWhatsApp;
    } else {
      console.log("Preencha as informações necessárias");
    }
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
          setInfoModal={setInfoModal}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Produtos
                  carrinho={carrinho}
                  adicionarAoCarrinho={adicionarAoCarrinho}
                />
              }
            />
            <Route
              path="pizzas/:id"
              element={<Produto infoModal={infoModal} chosen={"pizzas"} />}
            />
            <Route
              path="aperitivos/:id"
              element={<Produto infoModal={infoModal} chosen={"aperitivos"} />}
            />
            <Route
              path="calzones/:id"
              element={<Produto infoModal={infoModal} chosen={"calzones"} />}
            />
            <Route
              path="bebidas/:id"
              element={<Produto infoModal={infoModal} chosen={"bebidas"} />}
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
