import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona suavização.
    });
  };

  return (
    <footer>
      <div className={styles.rodapeContainer}>
        <div className={styles.rodapeLogo}>
          <img
            src="https://i.imgur.com/5oqmuYM.png"
            alt="Logo Magnifico"
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles.rodapeInfo}>
          <p>&copy; 2023 | Dom El Magnifico</p>
          <p>Endereço: Nova Piam, 1180 - Belford Roxo, Rio de Janeiro</p>
          <p>Telefone: (21) 98173-4706</p>
        </div>
        <div className={styles.rodapeSocial}>
          <NavLink to="https://www.facebook.com/profile.php?id=100003943035687">
            <img
              src="https://i.imgur.com/bV2TOiO.png"
              alt="Criador"
              style={{ width: '50px' }}
            />
          </NavLink>
          <NavLink to="https://twitter.com/Diego_R4mos">
            <img
              src="https://i.imgur.com/4x2lJsA.png"
              alt="Criador"
              style={{ width: '50px', height: '45px' }}
            />
          </NavLink>
          <NavLink to="https://www.instagram.com/diego.ferreira36/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            <img
              src="https://i.imgur.com/ic4E0oE.png"
              alt="Criador"
              style={{ width: '50px' }}
            />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
