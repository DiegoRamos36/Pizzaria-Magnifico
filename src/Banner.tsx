import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
interface BannerProps {
  bgColor: string;
  url: string;
  text1: string;
  text2: string;
  cor1: string;
  cor2: string;
}

const Banner: React.FC<BannerProps> = ({
  bgColor,
  url,
  text1,
  text2,
  cor1,
  cor2,
}) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.content}>
      <div className={styles.banner}>
        <img src={url} alt="produto principal" />
        <span>
          <h1 style={{ color: cor1 }}>{text1}</h1>
          <p style={{ color: cor2 }}>{text2}</p>
          <Link to={"/"}>Eu quero</Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
