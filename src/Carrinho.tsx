import React, { CSSProperties } from "react";
import styles from "./Carrinho.module.css";
import AbriCartSVG from "./AbriCartSVG";
import FecharCartSVG from "./FecharCartSVG";
import PagarCartSVG from "./PagarCartSVG";
import {
  IProduto,
  funcionais,
  pagar,
  removerDoCarrinho,
  totalCarrinho,
} from "./App";

interface CarrinhoProps {
  carrinho: IProduto[];
  removerDoCarrinho: removerDoCarrinho;
  pagar: pagar;
  totalCarrinho: totalCarrinho;
}

const Carrinho: React.FC<CarrinhoProps> = ({
  carrinho,
  removerDoCarrinho,
  pagar,
  totalCarrinho,
}) => {
  const [accordeon, setAccordeon] = React.useState(false);
  const [itens, setItens] = React.useState(0);

  React.useEffect(() => {
    const novaQuantidade = carrinho.reduce(
      (total, item) => total + (item.quantidade ?? 0),
      0
    );
    setItens(novaQuantidade);
  }, [carrinho]);
  return (
    <div>
      {accordeon ? (
        <section className={styles.carrinhoSection + " animeLeft"}>
          <div className={styles.title}>
            <h2>Carrinho</h2>
            <h5>total: {Math.floor(totalCarrinho())}</h5>
          </div>
          <ul className={styles.itens}>
            {carrinho.map((item) => (
              <li key={`${item.tipo} ${item.id}`}>
                <p>
                  <span
                    className={styles.remove}
                    onClick={() => removerDoCarrinho(item)}
                  >
                    x
                  </span>{" "}
                  {item.nome}: ({item.quantidade})
                </p>
              </li>
            ))}
          </ul>

          <div className={styles.carrinhoButton}>
            <span
              style={{ marginRight: "5rem" }}
              className={styles.carrinhoPagar}
              onClick={pagar}
            >
              <PagarCartSVG />
            </span>
            <p
              onClick={() => setAccordeon(false)}
              className={styles.carrinhoPagar}
            >
              <FecharCartSVG />
            </p>
          </div>
        </section>
      ) : (
        <button
          onClick={() => setAccordeon(true)}
          className={styles.carrinhoIcon}
        >
          <AbriCartSVG />
          {itens > 0 && (
            <div className={styles.containerCart}>
              <span className={styles.contadorItens}>{itens}</span>
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default Carrinho;
