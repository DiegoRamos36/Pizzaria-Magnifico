import React from 'react';
import styles from './Sobre.module.css';
import Head from './Head';
const Sobre = () => {
  return (
    <section className={styles.mainContent + ' animeLeft'}>
      <div className={styles.preContent + ' animeLeft'}>
        <img src="https://i.imgur.com/2iPFzOq.jpg" alt="" />
        <p>
          A gastronomia, ao longo dos anos, tem experimentado uma evolução
          constante, e a revolução tecnológica emerge como um dos catalisadores
          mais significativos dessa transformação. Este ensaio busca explorar
          como a <span className={styles.destaque}>tecnologia</span> está
          redefinindo a arte culinária, transformando cozinhas em{' '}
          <span className={styles.destaque}>laboratórios de inovação</span> e
          proporcionando experiências gastronômicas sem precedentes.
          <br /> A nossa pizzaria trouxe consigo uma gama de utensilios que
          elevaram a cozinha a um novo patamar de inovação. Desde{' '}
          <span className={styles.destaque}>
            fogões de indução de alta potência{' '}
          </span>{' '}
          até{' '}
          <span className={styles.destaque}>fornos de convecção precisos</span>,
          os chefs agora têm à disposição equipamentos que não apenas aceleram o
          processo de preparo, mas também permitem um controle preciso da
          temperatura e do tempo, garantindo resultados consistentes.
          <br />
          Nossos clientes tambem não ficam de fora, aqui na{' '}
          <span className={styles.destaque}>Dom El Magnifico</span> prezamos
          totalmente o você, com estudos de massas 100%{' '}
          <span className={styles.destaque}>naturais</span> pensado
          exclusivamente nos nossos fiéis clientes que estão sempre ajudando na
          divulgação e na melhoria do nosso trabalho. Esperamos poder contar com
          todos para a melhora do nosso estabelecimento.
        </p>
      </div>
      <div className={styles.cards + ' animeLeft'}>
        <div className={styles.contents + ' animeLeft'}>
          <div className={styles.background + ' animeLeft'}>
            <img
              src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/queijo.svg"
              alt=""
            />
            <p>
              O queijo é um dos ingredientes mais importantes de uma pizza, e a
              Pizzaria Dom El Magnifico não economiza no quesito qualidade. A
              casa utiliza uma variedade de queijos italianos, como mussarela,
              parmesão, gorgonzola e provolone. O queijo da Dom El Magnifico é
              sempre bem derretido e saboroso. Ele é distribuído de forma
              uniforme pela pizza, garantindo que cada fatia tenha o mesmo
              sabor.
            </p>
          </div>
        </div>
        <div className={styles.contents + ' animeLeft'}>
          <div className={styles.background + ' animeLeft'}>
            <img
              src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/tomate.svg"
              alt=""
            />
            <p>
              O tomate da El Magnifico é sempre saboroso e fresco. Ele tem um
              sabor doce e ácido, com uma textura suave e cremosa. O molho de
              tomate é bem equilibrado, com o sabor do tomate sendo o destaque.
              Na pizza Marguerita da Dom El Magnifico, o tomate é o grande
              destaque. O molho de tomate é bem espesso e saboroso, e o tomate
              fresco adiciona um toque de frescor e leveza à pizza.
            </p>
          </div>
        </div>
        <div className={styles.contents + ' animeLeft'}>
          <div className={styles.background + ' animeLeft'}>
            <img
              src="https://raw.githubusercontent.com/DiegoRamos36/Dom-El-Magnifico/ef736c42c74d4d1686ca66058c5923b1a41c24ed/src/Img/alface.svg"
              alt=""
            />
            <p>
              O alface da Dom El Magnifico é sempre fresco e crocante. Ele tem
              um sabor suave e neutro, que não interfere no sabor dos outros
              ingredientes da pizza. Na pizza Portuguesa da Dom El Magnifico, o
              alface é um dos ingredientes principais. O alface é usado como
              base da pizza, e é coberto com molho de tomate, queijo e outros
              ingredientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
