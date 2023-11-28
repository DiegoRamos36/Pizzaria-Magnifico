import React from 'react';
import styles from './Carrinho.module.css';
import AbriCartSVG from './AbriCartSVG';
import FecharCartSVG from './FecharCartSVG';
import PagarCartSVG from './PagarCartSVG';

const Carrinho = ({
  infoModal,
  carrinho,
  removerDoCarrinho,
  pagar,
  totalCarrinho,
}) => {
  const [accordeon, setAccordeon] = React.useState(false);
  const [itens, setItens] = React.useState(0);

  React.useEffect(() => {
    const novaQuantidade = carrinho.reduce(
      (total, item) => total + item.quantidade,
      0,
    );
    setItens(novaQuantidade);
  }, [carrinho]);
  return (
    <div>
      {accordeon ? (
        <section className={styles.carrinhoSection + ' animeLeft'}>
          <h2>Carrinho</h2>
          <ul>
            {carrinho.map((item) => (
              <li key={`${item.tipo} ${item.id}`}>
                <p>
                  <span
                    className={styles.remove}
                    onClick={() => removerDoCarrinho(item)}
                  >
                    x
                  </span>{' '}
                  {item.nome}: ({item.quantidade})
                </p>
              </li>
            ))}
          </ul>
          <h4>Total: {Math.floor(totalCarrinho())}</h4>
          <div className={styles.carrinhoButton}>
            <span
              style={{ marginRight: '5rem' }}
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
          {itens > 0 && <span className={styles.contadorItens}>{itens}</span>}
        </button>
      )}
    </div>
  );
};

export default Carrinho;
