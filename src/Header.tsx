import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Local from "./Local";
import Carrinho from "./Carrinho";
import {
  IProduto,
  IinfoModal,
  adicionarAoCarrinho,
  pagar,
  removerDoCarrinho,
  totalCarrinho,
} from "./App";

interface HeaderProps {
  setInfoModal: React.Dispatch<React.SetStateAction<IinfoModal | undefined>>;
  carrinho: IProduto[];
  setCarrinho: React.Dispatch<React.SetStateAction<IProduto[]>>;
  removerDoCarrinho: removerDoCarrinho;
  pagar: pagar;
  adicionarAoCarrinho: adicionarAoCarrinho;
  totalCarrinho: totalCarrinho;
}

const Header: React.FC<HeaderProps> = ({
  setInfoModal,
  carrinho,
  setCarrinho,
  removerDoCarrinho,
  pagar,
  adicionarAoCarrinho,
  totalCarrinho,
}) => {
  const [scroll, setScroll] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY; //Obtem o valor do scroll
      const maxScroll = 1000;
      const newOpacity = 1 - scrollPos / maxScroll;
      const opacity = newOpacity < 0.8 ? 0.8 : newOpacity;

      setScroll(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav style={{ opacity: scroll }} className={styles.navigation}>
      <span className={styles.titulo}>
        <img
          src="https://i.imgur.com/xLNT3JO.png"
          alt=""
          onClick={() => (window.location.href = "/")}
        />
      </span>

      <div className={styles.icons}>
        <NavLink to={"/"}>Cardapio</NavLink>
        <NavLink to={"contato"}>Contato</NavLink>
        <NavLink to={"sobre"}>Sobre</NavLink>
        <span className={styles.local}>
          <Local setInfoModal={setInfoModal} />
        </span>
        <Carrinho
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          pagar={pagar}
          totalCarrinho={totalCarrinho}
        />
      </div>

      <span className={styles.burger}>
        <Carrinho
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          pagar={pagar}
          totalCarrinho={totalCarrinho}
        />
        <BurgerMenu setInfoModal={setInfoModal} />
        <span className={styles.localResp}>
          <Local setInfoModal={setInfoModal} />
        </span>
      </span>
    </nav>
  );
};

export default React.memo(Header);
