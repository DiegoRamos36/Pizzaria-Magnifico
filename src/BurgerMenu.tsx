import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "./BurguerMenu.module.css";
import { NavLink } from "react-router-dom";
import Local from "./Local";
import { IinfoModal } from "./App";

interface BurgerMenuProps {
  setInfoModal: React.Dispatch<React.SetStateAction<IinfoModal | undefined>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ setInfoModal }) => {
  const [aberto, setAberto] = useState(true);
  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <div>
      <FiMenu
        style={{ width: "2rem", height: "2rem" }}
        onClick={toggleMenu}
        className={styles.burguerIcon}
      />

      {aberto && (
        <div className={styles.menu}>
          <p onClick={toggleMenu}>x</p>
          <NavLink to={"/"}>Cardapio</NavLink>
          <NavLink to={"/contato"}>Contato</NavLink>
          <NavLink to={"/sobre"}>Sobre</NavLink>
          <span className={styles.local}>
            <Local setInfoModal={setInfoModal} />
          </span>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
