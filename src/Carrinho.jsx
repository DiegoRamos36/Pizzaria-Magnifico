import React from 'react';
import styles from './Carrinho.module.css';

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
                <span
                  className={styles.remove}
                  onClick={() => removerDoCarrinho(item)}
                >
                  x
                </span>{' '}
                {item.nome} - Quantidade: {item.quantidade}
              </li>
            ))}
          </ul>
          <div className={styles.carrinhoButton}>
            <span
              style={{ marginRight: '5rem' }}
              className={styles.carrinhoPagar}
              onClick={pagar}
            >
              <img src="https://i.imgur.com/obEpVNK.png" alt="" />{' '}
              {Math.floor(totalCarrinho())}
            </span>
            <p
              onClick={() => setAccordeon(false)}
              className={styles.carrinhoPagar}
            >
              <img src="https://i.imgur.com/Dn0NXGc.png" alt="" />
            </p>
          </div>
        </section>
      ) : (
        <button
          onClick={() => setAccordeon(true)}
          className={styles.carrinhoIcon}
        >
          <img src="https://i.imgur.com/X45jcdJ.png" alt="" />{' '}
          {itens > 0 && <span className={styles.contadorItens}>{itens}</span>}
        </button>
      )}
    </div>
  );
};

export default Carrinho;
