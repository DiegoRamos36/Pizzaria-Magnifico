import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import Head from './Head';

const Produto = ({ logado, setLogado, chosen, infoModal }) => {
  const [pizza, setPizza] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  console.log(infoModal.endereco);
  const { id } = useParams();

  const enviarMensagem = ({ target }) => {
    const number = '+5521981734706';
    const mensagem = `Olá, gostaria de fazer um pedido de: \n ${
      chosen.charAt(0).toUpperCase() + chosen.slice(1)
    }\n ${target.value} \n Para o endereço:  \n ${infoModal.endereco}, ${
      infoModal.numero
    } \n`;
    // const mensagem = `Olá, gostaria de um ${chosen}: ${target.value} Para o endereço: ${infoModal.endereco} N/Casa: ${infoModal.numero}`;
    const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
      mensagem,
    )}`;
    window.location.href = linkWhatsApp;
  };

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPizza(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(
      `https://magnificosdb-2debd-default-rtdb.firebaseio.com/${chosen}/${id}.json`,
    );
  }, [id, chosen]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (pizza === null) return null;
  if (logado === false) return null;
  return (
    <section className={styles.container + ' animeLeft'}>
      <Head title={`DEM - ${pizza.nome}`} decription={`${pizza.nome}`} />
      <div className={styles.pizza}>
        <span className={styles.title}>
          <h1>{pizza.nome}</h1>
          <img src={pizza.foto} alt="" />
        </span>

        <span className={styles.desc}>
          <p className={styles.descricao}>{pizza.descricao}</p>
          <span className={styles.preco}>R$ {pizza.preco}</span>
          <div className={styles.buttons}>
            <button
              value={pizza.nome}
              className={styles.comprar}
              onClick={enviarMensagem}
            >
              Pedir
            </button>
            <Link to={'/'} className={styles.voltar}>
              Voltar
            </Link>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Produto;
