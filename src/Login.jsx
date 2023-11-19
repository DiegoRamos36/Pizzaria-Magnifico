import React, { useState } from 'react';
import styles from './Login.module.css';
import avatar from './Img/login.svg';
import google from './Img/google.png';
import linkedin from './Img/linkedin.png';
import github from './Img/github.png';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modal, setModal] = useState(false);
  const [logado, setlogado] = useState(false);

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        // Cadastro bem-sucedido
        alert('Cadastro realizado com sucesso');
        // Você pode redirecionar o usuário para a página de login ou outra página aqui
      } else {
        // Falha no cadastro
        alert('Erro no cadastro');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      alert('Erro na solicitação');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSenha(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/clientes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        // Autenticação bem-sucedida
        alert('Login bem-sucedido');
        setlogado(true);
      } else {
        // Autenticação falhou
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      alert('Erro na solicitação');
    }
  };

  const openModal = () => {
    setModal(!modal);
  };

  if (logado === true)
    return (
      <span className={styles.logado} onClick={() => setlogado(false)}>
        🚪
      </span>
    );
  return (
    <div>
      <img src={avatar} alt="" onClick={openModal} />
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={openModal}>
              &times;
            </span>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Logar</button>{' '}
            <button onClick={handleCadastro}>Cadastrar</button>
            <span style={{ margin: '1rem' }}>ou entre com:</span>
            <div className={styles.login}>
              <img
                src={google}
                alt=""
                style={{ width: '40px', height: '40px' }}
              />{' '}
              <img
                src={linkedin}
                alt=""
                style={{ width: '50px', height: '50px' }}
              />
              <img
                src={github}
                alt=""
                style={{ width: '50px', height: '50px' }}
              />
            </div>
            <span className={styles.senha}>esqueci minha senha</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
