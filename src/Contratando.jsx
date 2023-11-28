import React from 'react';
import axios from 'axios';
import styles from './Contratando.module.css';

const Contratando = () => {
  const [nome, setNome] = React.useState('');

  const [email, setEmail] = React.useState('');

  const [escolha, setEscolha] = React.useState('');
  const [exp, setExp] = React.useState('');
  const [publicidade, setPublicidade] = React.useState('');
  const [enviado, setEnviado] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!nome && !email && !escolha && !exp && !publicidade) {
      console.error('Por Favor, preencha todos os campos obrigatórios');
    }
    try {
      await axios.post('https://formspree.io/f/xeqbwlyl', {
        nome,
        email,
        escolha,
        exp,
        publicidade,
      });
      setEnviado(true);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div className={styles.form}>
      {enviado ? (
        <p>Mensagem enviada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ marginTop: '2rem' }} required>
            Nome Completo
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

          <label>
            <br />
            Escolha a área de interesse:
            <br />
            <select
              required
              value={escolha}
              onChange={({ target }) => setEscolha(target.value)}
            >
              <option value="" disabled>
                escolha uma opção
              </option>
              <option value="Auxiliar de Cozinha">Auxiliar de Cozinha</option>
              <option value="Pizzaiolo">Pizzaiolo</option>
              <option value="Motoboy">Motoboy</option>
              <option value="Atendente">Atendente</option>
              <option value="Garçom">Garçom</option>
              <option value="Chapeiro">Chapeiro</option>
            </select>
          </label>
          <label>
            <br />
            Você tem experiência?
            <br />
            <select
              value={exp}
              onChange={({ target }) => setExp(target.value)}
              required
            >
              <option value="" disabled>
                escolha uma opção
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </label>
          <label>
            <br />
            Você aceita receber informações sobre publicidade da empresa?
            <select
              value={publicidade}
              onChange={({ target }) => setPublicidade(target.value)}
              required
            >
              <option value="" disabled>
                escolha uma opção
              </option>
              <option value="Aceito">Aceito</option>
              <option value="Não aceito">Não Aceito</option>
            </select>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Contratando;
