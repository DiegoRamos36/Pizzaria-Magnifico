import React, { useState, useEffect } from 'react';
import styles from './MuralDeImagens.module.css';
const images = [
  'https://github.com/DiegoRamos36/Pizzaria-Magnifico/blob/main/src/Img/newbanner3.jpg?raw=true',
  'https://github.com/DiegoRamos36/Pizzaria-Magnifico/blob/main/src/Img/newbanner.jpg?raw=true',
  'https://github.com/DiegoRamos36/Pizzaria-Magnifico/blob/main/src/Img/newbanner1.jpg?raw=true',
];
function MuralDeImagens() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const changeImage = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % images.length;
    }
    setCurrentImageIndex(newIndex);
  };

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

  return (
    <div className={styles.mural}>
      <img
        src={images[currentImageIndex]}
        alt={`Imagem ${currentImageIndex + 1}`}
      />
    </div>
  );
}

export default MuralDeImagens;
