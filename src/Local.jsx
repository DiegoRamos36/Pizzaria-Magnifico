import React, { useState, useEffect } from 'react';
import styles from './Local.module.css';

const Local = ({ attInfoModal }) => {
  const [modal, setModal] = useState(false);
  const [localizado, setLocalizado] = useState(false);
  const [ref, setRef] = useState('');
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('localData')) || {};
    setRef(savedData.ref || '');
    setNome(savedData.nome || '');
    setCidade(savedData.cidade || '');
    setEndereco(savedData.endereco || '');
    setNumero(savedData.numero || '');
    setLocalizado(savedData.localizado || false);
    attInfoModal({
      ref: savedData.ref || '',
      endereco: savedData.endereco || '',
      numero: savedData.numero || '',
      cidade: savedData.cidade || '',
      nome: savedData.nome || '',
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      'localData',
      JSON.stringify({
        ref,
        endereco,
        numero,
        cidade,
        nome,
        localizado: true,
      }),
    );
    attInfoModal({
      ref,
      endereco,
      numero,
      cidade,
      nome,
    });
    setLocalizado(true);
    setModal(false);
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
          src="https://raw.githubusercontent.com/DiegoRamos36/Pizzaria-Magnifico/63174490f689ce1ac356613221b3388df9132ea1/src/Img/local.svg"
          style={{ height: '35px', width: '35px' }}
          alt=""
        />
        <p style={{ color: '#00ff00', fontFamily: 'Oswald' }}>Logado</p>
      </span>
    );
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/DiegoRamos36/Pizzaria-Magnifico/63174490f689ce1ac356613221b3388df9132ea1/src/Img/localAdd.svg"
        style={{ height: '35px', width: '35px' }}
        alt=""
        onClick={openModal}
      />
      <p style={{ color: '#ccc', fontFamily: 'Oswald' }}>Logado</p>
      {modal && (
        <div className={styles.modal}>
          <form className={styles.modalContent} onSubmit={handleSubmit}>
            <span className={styles.close} onClick={openModal}>
              &times;
            </span>
            <span>
              <img
                src="https://raw.githubusercontent.com/DiegoRamos36/Pizzaria-Magnifico/63174490f689ce1ac356613221b3388df9132ea1/src/Img/motoboy.svg"
                alt=""
              />
              <h2>Onde levaremos a felicidade?</h2>
            </span>
            <div className={styles.fields}>
              <label>
                <p>Nome</p>
                <input
                  type="text"
                  onChange={({ target }) => setNome(target.value)}
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
                <p>Ponto de Referência</p>
                <input
                  type="text"
                  onBlur={({ target }) => {
                    setRef(target.value);
                    console.log(ref);
                  }}
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
