import React, { useState, useEffect } from "react";
import styles from "./MuralDeImagens.module.css";
import Banner from "./Banner";
const images = [
  <Banner
    text1="Venha saborear nossas magníficas pizzas!"
    text2="Originárias da Itália, as pizzas conquistaram o mundo com sua massa fina e crocante, cobertas por uma variedade de ingredientes frescos e saborosos. Das clássicas margheritas aos extravagantes sabores gourmet, as pizzas são uma verdadeira festa para o paladar, oferecendo uma experiência gastronômica que une tradição e inovação em cada fatia."
    bgColor="inherit"
    cor1="#000"
    cor2="#262626"
    url="https://i.imgur.com/6tNnDQZ.png"
  />,
  <Banner
    text1="Incríveis calzones você só encontra aqui!"
    text2="Os calzones são uma deliciosa fusão entre a praticidade de uma pizza e a portabilidade de um sanduíche. Recheados com uma combinação tentadora de queijos, carnes, vegetais e molhos, esses quitutes assados são um prato versátil que agrada a todos os gostos, sendo uma opção reconfortante e satisfatória para qualquer refeição."
    bgColor="inherit"
    cor1="#000"
    cor2="#262626"
    url="https://i.imgur.com/GdFF8Lx.png"
  />,
  <Banner
    text1="Com as melhores bebidas você só encontra aqui"
    text2="Uma variedade refrescante e reconfortante de líquidos que satisfazem desde os paladares mais exigentes até aqueles que buscam uma simples hidratação. Das efervescentes sodas aos aromáticos vinhos, as bebidas oferecem uma vasta gama de sabores e experiências sensoriais."
    bgColor="inherit"
    cor1="#000"
    cor2="#262626"
    url="https://i.imgur.com/6vjHw5h.png"
  />,
  <Banner
    text1="Não sabe o que pedir? Peça de tudo!!"
    text2="Uma seleção cuidadosamente elaborada de delícias culinárias projetadas para abrir o apetite e encantar os paladares mais exigentes. Combinando uma variedade de sabores, texturas e apresentações, nossos aperitivos são o complemento perfeito para qualquer ocasião, desde encontros sociais descontraídos até eventos formais."
    bgColor="#fff"
    cor1="#000"
    cor2="#262626"
    url="https://i.imgur.com/Zrm2xJd.png"
  />,
  <Banner
    text1="Para os amantes do doce!"
    text2="Com uma ampla variedade de sabores, texturas e apresentações, as pizzas doces são um verdadeiro deleite para os sentidos, capazes de adoçar qualquer momento e tornar ocasiões especiais ainda mais memoráveis. Criada com paixão e dedicação para garantir uma experiência verdadeiramente excepcional. Utilizamos ingredientes premium e técnicas culinárias refinadas para garantir que cada doce seja uma explosão de sabor que conquiste até os paladares mais exigentes."
    bgColor="#fff"
    cor1="#000"
    cor2="#262626"
    url="https://i.imgur.com/QnY7gna.png"
  />,
];
const MuralDeImagens = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Calcula o próximo índice da imagem
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    // Limpe o intervalo quando o componente for desmontado
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={styles.mural}>{images[currentImageIndex]}</div>;
};

export default MuralDeImagens;
