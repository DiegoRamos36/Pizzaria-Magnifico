import React from 'react';
import styles from './Produtos.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import MuralDeImagens from './MuralDeImagens';
const Produtos = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [chosen, setChosen] = React.useState('pizzas');
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
      <button
        className={styles.pizza}
        onClick={() => {
          setChosen('pizzas');
        }}
      >
        Pizzas
      </button>

      <button
        className={styles.apr}
        onClick={() => {
          setChosen('aperitivos');
        }}
      >
        Aperitivos
      </button>

      <button
        className={styles.clz}
        onClick={() => {
          setChosen('calzones');
        }}
      >
        Calzones
      </button>

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
                  : `calzones/${dado.id}`
              }
              key={dado.id}
            >
              <img src={dado.foto} alt="" width="80px" height="300px" />
              <h2 className={styles.nome}>{dado.nome}</h2>
              <p className={styles.preco}>R$ {dado.preco}</p>
              <button className={styles.button}>Peça Já</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Produtos;
