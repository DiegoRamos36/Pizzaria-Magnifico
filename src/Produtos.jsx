import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import MuralDeImagens from './MuralDeImagens';

const Produtos = ({ infoModal }) => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [chosen, setChosen] = React.useState('pizzas');
  const [hoveredPzz, setHoveredPzz] = React.useState(false);
  const [hoveredApr, setHoveredApr] = React.useState(false);
  const [hoveredClz, setHoveredClz] = React.useState(false);
  const [hoveredBB, setHoveredBB] = React.useState(false);
  const [carrinho, setCarrinho] = React.useState([]);
  const [accordeon, setAccordeon] = React.useState(false);

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
      }\n Total: ${Math.round(totalCarrinho())} reais`;
      const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
        mensagem,
      )}`;
      window.location.href = linkWhatsApp;
    }
    /* 
    const number = '+5521981734706';
    const mensagem = `Olá, gostaria de fazer um pedido: `;
    // const mensagem = `Olá, gostaria de um ${chosen}: ${target.value} Para o endereço: ${infoModal.endereco} N/Casa: ${infoModal.numero}`;
   const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
      mensagem,
    )}`;
    window.location.href = linkWhatsApp; */
  };
  React.useEffect(() => {
    fetch(
      `https://magnificosdb-2debd-default-rtdb.firebaseio.com/${chosen}.json`,
    )
      .then((r) => r.json())
      .then((json) => {
        setDados(json);
        setLoading(false);
      });
  }, [chosen]);

  if (loading)
    return (
      <div className={styles.content + ' animeLeft'}>
        <Head title="DEM - Cardápio" decription="Cardapio do site dem" />
        <Loading />
      </div>
    );

  return (
    <div>
      <div className={styles.initContent + ' animeLeft'}>
        <MuralDeImagens />
      </div>
      {accordeon ? (
        <section className={styles.carrinhoSection + ' animeLeft'}>
          <h2>Itens no Carrinho:</h2>
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
            <span className={styles.carrinhoPagar} onClick={pagar}>
              Pagar: R$ {Math.round(totalCarrinho())}
            </span>
            <p
              onClick={() => setAccordeon(false)}
              className={styles.carrinhoPagar}
            >
              Fechar Carrinho
            </p>
          </div>
        </section>
      ) : (
        <button
          onClick={() => setAccordeon(true)}
          className={styles.carrinhoIcon}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/126/126510.png"
            alt=""
          />
        </button>
      )}
      <span className={styles.buttons + ' animeLeft'}>
        <button
          onClick={() => {
            setChosen('pizzas');
          }}
          onMouseOver={() => {
            setHoveredPzz(true);
          }}
          onMouseOut={() => {
            setHoveredPzz(false);
          }}
          style={{
            backgroundColor: hoveredPzz ? '#ff0000' : '#bb0000',
            marginLeft: '2.5rem',
          }}
        >
          Pizzas
        </button>

        <button
          onClick={() => {
            setChosen('aperitivos');
          }}
          onMouseOver={() => {
            setHoveredApr(true);
          }}
          onMouseOut={() => {
            setHoveredApr(false);
          }}
          style={{ backgroundColor: hoveredApr ? '#eeee00' : '#ffaa00' }}
        >
          Aperitivos
        </button>
        <button
          onClick={() => {
            setChosen('calzones');
          }}
          onMouseOver={() => {
            setHoveredClz(true);
          }}
          onMouseOut={() => {
            setHoveredClz(false);
          }}
          style={{ backgroundColor: hoveredClz ? '#00ff00' : '#00c000' }}
        >
          Calzones
        </button>
        <button
          onClick={() => {
            setChosen('bebidas');
          }}
          onMouseOver={() => {
            setHoveredBB(true);
          }}
          onMouseOut={() => {
            setHoveredBB(false);
          }}
          style={{
            backgroundColor: hoveredBB ? '#003Fff' : '#0000bb',
          }}
        >
          Bebidas
        </button>
      </span>

      <section className={styles.content + ' animeLeft'}>
        <Head title="DEM - Cardápio" decription="Cardapio do site dem" />
        {dados.map((dado) => (
          <div key={dado.id} className={styles.produtos + ' animeLeft'}>
            <Link
              to={
                chosen.toLocaleLowerCase() == 'pizzas'
                  ? `pizzas/${dado.id}`
                  : chosen.toLocaleLowerCase() == 'aperitivos'
                  ? `aperitivos/${dado.id}`
                  : chosen.toLocaleLowerCase() === 'calzones'
                  ? `calzones/${dado.id}`
                  : `bebidas/${dado.id}`
              }
              key={dado.id}
            >
              Ir para página do produto
            </Link>
            <img src={dado.foto} alt="" width="80px" height="300px" />
            <h2 className={styles.nome}>{dado.nome}</h2>
            <p className={styles.preco}>R$ {dado.preco}</p>
            <button
              onClick={() => adicionarAoCarrinho(dado)}
              className={styles.button}
            >
              Adicionar ao carrinho.
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Produtos;
