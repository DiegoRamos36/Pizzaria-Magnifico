import React from "react";
import styles from "./Produtos.module.css";
import Head from "./Head";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import MuralDeImagens from "./MuralDeImagens";
import { IProduto, adicionarAoCarrinho } from "./App";

interface ProdutosProps {
  adicionarAoCarrinho: adicionarAoCarrinho;
  carrinho: IProduto[];
}

const Produtos: React.FC<ProdutosProps> = ({
  adicionarAoCarrinho,
  carrinho,
}) => {
  const [dados, setDados] = React.useState<IProduto[]>();
  const [loading, setLoading] = React.useState(true);
  const [chosen, setChosen] = React.useState("pizzas");
  const [quantidadesNoCarrinho, setQuantidadesNoCarrinho] = React.useState<{
    [key: number]: number;
  }>({});

  type Quantidades = {
    [itemId: number]: number;
  };

  React.useEffect(() => {
    const novasQuantidades: Quantidades = {};
    carrinho.forEach((item) => {
      novasQuantidades[item.id] =
        item.quantidade !== undefined ? item.quantidade : 0;
    });
    setQuantidadesNoCarrinho(novasQuantidades);
  }, [carrinho]);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://magnificosdb-2debd-default-rtdb.firebaseio.com/${chosen}.json`
    )
      .then((r) => r.json())
      .then((json) => {
        setDados(json);
        setLoading(false);
      });
  }, [chosen]);

  return (
    <div>
      <div className={styles.initContent + " animeLeft"}>
        <MuralDeImagens />
      </div>

      <span className={styles.buttons + " animeLeft"}>
        <button
          onClick={() => {
            setChosen("pizzas");
          }}
          style={{
            backgroundColor: "#ff0000",
          }}
        >
          Pizzas
        </button>

        <button
          onClick={() => {
            setChosen("aperitivos");
          }}
          style={{ backgroundColor: "#ffaa00" }}
        >
          Aperitivos
        </button>
        <button
          onClick={() => {
            setChosen("calzones");
          }}
          style={{ backgroundColor: "#00c000" }}
        >
          Calzones
        </button>
        <button
          onClick={() => {
            setChosen("bebidas");
          }}
          style={{
            backgroundColor: "#0000bb",
          }}
        >
          Bebidas
        </button>
        <button
          onClick={() => {
            setChosen("doces");
          }}
          style={{
            backgroundColor: "#915FE8",
          }}
        >
          Doces
        </button>
      </span>

      <section className={styles.content + " animeLeft"}>
        <Head title="DEM - Pizzaria" description="Cardapio do site dem" />
        {dados &&
          dados.map((dado: IProduto) => (
            <div key={dado.tipo} className={styles.produtos + " animeLeft"}>
              <Link
                to={
                  chosen.toLocaleLowerCase() == "pizzas"
                    ? `pizzas/${dado.tipo}`
                    : chosen.toLocaleLowerCase() == "aperitivos"
                    ? `aperitivos/${dado.tipo}`
                    : chosen.toLocaleLowerCase() === "calzones"
                    ? `calzones/${dado.tipo}`
                    : chosen.toLocaleLowerCase() === "bebidas"
                    ? `bebidas/${dado.tipo}`
                    : `doces/${dado.tipo}`
                }
                key={dado.tipo}
              >
                Ir para página do produto
              </Link>
              <img
                src={dado.foto}
                alt={`${chosen}: ${dado.nome}`}
                width="80px"
                height="300px"
              />
              <h2 className={styles.nome}>{dado.nome}</h2>
              <p className={styles.preco}>R$ {dado.preco}</p>
              <button
                onClick={() => {
                  adicionarAoCarrinho(dado);
                }}
                className={styles.button}
              >
                Adicionar ao carrinho.{" "}
                {quantidadesNoCarrinho[dado.id] > 0 && (
                  <span className={styles.qtd}>
                    x{quantidadesNoCarrinho[dado.id]}
                  </span>
                )}
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Produtos;
