import React, { useState, useEffect } from 'react';
import styles from './Local.module.css';

const Local = ({ attInfoModal }) => {
  const [modal, setModal] = useState(false);
  const [localizado, setLocalizado] = useState(false);
  const [cep, setCep] = useState(0);
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('localData')) || {};
    setCep(savedData.cep || '');
    setBairro(savedData.bairro || '');
    setCidade(savedData.cidade || '');
    setEndereco(savedData.endereco || '');
    setNumero(savedData.numero || '');
    setLocalizado(savedData.localizado || false);
    attInfoModal({
      cep: savedData.cep || '',
      endereco: savedData.endereco || '',
      numero: savedData.numero || '',
      cidade: savedData.cidade || '',
      bairro: savedData.bairro || '',
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cep.length !== 8) {
      console.error('CEP inválido');
      return;
    } else {
      localStorage.setItem(
        'localData',
        JSON.stringify({
          cep,
          endereco,
          numero,
          cidade,
          bairro,
          localizado: true,
        }),
      );
      attInfoModal({
        cep,
        endereco,
        numero,
        cidade,
        bairro,
      });
      setLocalizado(true);
      setModal(false);
    }
  };

  const openModal = () => {
    setModal(!modal);
  };
  if (localizado)
    return (
      <span
        className={styles.localizado}
        onClick={() => {
          setLocalizado(false);
          localStorage.removeItem('localData');
        }}
      >
        <img
          src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/local.svg"
          style={{ height: '35px', width: '35px' }}
          alt=""
        />
        <p style={{ color: '#00ff00', fontFamily: 'Oswald' }}>Logado</p>
      </span>
    );
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/localAdd.svg"
        style={{ height: '35px', width: '35px' }}
        alt=""
        onClick={openModal}
      />
      <p style={{ color: '#ff0000', fontFamily: 'Oswald' }}>Logado</p>
      {modal && (
        <div className={styles.modal}>
          <form className={styles.modalContent} onSubmit={handleSubmit}>
            <span className={styles.close} onClick={openModal}>
              &times;
            </span>
            <span>
              <img
                src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/motoboy.svg"
                alt=""
              />
              <h2>Onde levaremos a felicidade?</h2>
            </span>
            <div className={styles.fields}>
              <label>
                <p>Cep</p>
                <input
                  type="text"
                  onBlur={({ target }) => {
                    setCep(target.value);
                    console.log(cep);
                  }}
                  maxLength={8}
                  required
                />
              </label>
              <label>
                <p>Endereço</p>
                <input
                  type="text"
                  onBlur={({ target }) => setEndereco(target.value)}
                />
              </label>
              <label>
                <p>N°</p>
                <input
                  type="text"
                  onBlur={({ target }) => setNumero(target.value)}
                />
              </label>
              <label>
                <p>Cidade</p>
                <input
                  type="text"
                  onBlur={({ target }) => setCidade(target.value)}
                />
              </label>
              <label>
                <p>Bairro</p>
                <input
                  type="text"
                  onChange={({ target }) => setBairro(target.value)}
                />
              </label>
              <button type="submit" className={styles.confirmar}>
                Confirmar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Local;
