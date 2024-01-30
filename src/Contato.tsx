import React from 'react';
import styles from './Contato.module.css';
import { NavLink } from 'react-router-dom';
import GoogleMaps from './GoogleMaps';
import ContatoForm from './ContatoForms';
import Contratando from './Contratando';

//-22.750662148057195, -43.39674977633698
//AIzaSyDU7nccS5aOHCfU7HwSyboVVW-yp92nDe4 API GOOGLE
const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <div className={styles.mainCard}>
        <div className={styles.cardContato}>
          <div className={styles.cardHeader}>
            <h1>Trabalhe Conosco</h1>
          </div>
          <Contratando />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1>Redes Sociais</h1>
        </div>
        <ul className={styles.social}>
          <li>
            <img src="https://i.imgur.com/ic4E0oE.png" alt="Insta" />
            <NavLink to="">@pizzariaMagnifico</NavLink>
          </li>
          <li>
            <img
              src="https://github.com/DiegoRamos36/Pizzaria-Magnifico/blob/main/src/Img/x.png?raw=true"
              alt=""
            />{' '}
            <NavLink to="">@DomElMagnifico</NavLink>
          </li>
          <li>
            <img
              src="https://github.com/DiegoRamos36/Pizzaria-Magnifico/blob/main/src/Img/linkedin.png?raw=true"
              alt=""
            />
            <NavLink to="">Diego Ramos</NavLink>
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1/1257.png"
              alt=""
            />
            <NavLink to="">(21)98173-4706</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1>Encontre-nos</h1>
        </div>
        <span className={styles.maps}>
          <GoogleMaps />
        </span>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1>Mensagem</h1>
        </div>
        <ContatoForm />
      </div>
    </section>
  );
};

export default Contato;
