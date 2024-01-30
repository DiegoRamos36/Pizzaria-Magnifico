import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import Head from "./Head";
import { IProduto, IinfoModal } from "./App";

interface ProdutoProps {
  chosen: string;
  infoModal?: IinfoModal;
}

const Produto: React.FC<ProdutoProps> = ({ chosen, infoModal }) => {
  const [pizza, setPizza] = React.useState<IProduto | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const { id } = useParams();

  const enviarMensagem = (event: React.FormEvent) => {
    const number = "+5521981734706";
    const mensagem = `Olá, gostaria de fazer um pedido de: \n ${
      chosen.charAt(0).toUpperCase() + chosen.slice(1)
    }\n ${event.currentTarget} \n Para o endereço:  \n ${
      infoModal?.endereco
    }, ${infoModal?.numero} \n`;
    // const mensagem = `Olá, gostaria de um ${chosen}: ${target.value} Para o endereço: ${infoModal.endereco} N/Casa: ${infoModal.numero}`;
    const linkWhatsApp = `https://wa.me/${number}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.location.href = linkWhatsApp;
  };

  React.useEffect(() => {
    async function fetchProduto(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPizza(json);
      } catch (erro) {
        setError(`Um Error ocorreu ${erro}`);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(
      `https://magnificosdb-2debd-default-rtdb.firebaseio.com/${chosen}/${id}.json`
    );
  }, [id, chosen]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (pizza === null) return null;
  return (
    <section className={styles.container + " animeLeft"}>
      <Head title={`DEM - ${pizza.nome}`} description={`${pizza.nome}`} />
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
              Pedir Separadamente
            </button>
            <Link to={"/"} className={styles.voltar}>
              Voltar
            </Link>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Produto;
