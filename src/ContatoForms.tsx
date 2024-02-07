import React, { useState } from "react";
import axios from "axios";
import styles from "./ContatoForms.module.css";

const ContatoForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post("https://formspree.io/f/xeqbwlyl", {
        nome,
        email,
        mensagem,
      });

      setEnviado(true);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <div className={styles.form}>
      {enviado ? (
        <p>Mensagem enviada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <br />
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Mensagem
            <br />
            <textarea onChange={(e) => setMensagem(e.target.value)}></textarea>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContatoForm;
