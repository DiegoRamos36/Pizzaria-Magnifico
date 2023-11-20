import React from 'react';
import styles from './Sobre.module.css';
import Head from './Head';
const Sobre = () => {
  return (
    <section className={styles.content}>
      <div className={styles.firstContent}>
        <h1>L&apos;inizio</h1>
        <p></p>
      </div>
      <div className={styles.secondContent}>
        <h4>
          Em meio às colinas exuberantes e à atmosfera vibrante de uma região do
          Rio de Janeiro profundamente imersa na rica cultura italiana, surgiu a
          visão do Dom El Magnífico. Influenciado pelos cenários pitorescos e
          pelos costumes acolhedores. Os aromas tentadores da culinária italiana
          se misturavam ao calor tropical, criando uma sinfonia gastronômica
          única. As fachadas coloridas do Dom El Magnífico refletiam a alegria
          contagiante das ruas cariocas, enquanto os murais artísticos contavam
          histórias de uma fusão encantadora entre a tradição italiana e a
          energia pulsante do Rio de Janeiro.
        </h4>
        <br />
        <h4>
          A decoração do restaurante refletia a sofisticação das ruas italianas,
          com fachadas coloridas, murais artísticos e mesas adornadas com
          toalhas de linho branco, transportando os clientes para um pedacinho
          da Itália em pleno coração carioca. O cardápio do Dom El Magnífico era
          uma celebração da diversidade da cozinha italiana, desde as clássicas
          massas artesanais até os pratos contemporâneos que refletiam a fusão
          de sabores entre as tradições italianas e os ingredientes locais
          frescos.
        </h4>
        <br />
        <h4>
          Cada prato contava uma história, uma narrativa que misturava o passado
          e o presente em uma experiência culinária única. Os habitantes locais,
          bem como os turistas que buscavam uma experiência gastronômica
          autêntica, abraçaram calorosamente o Dom El Magnífico. O restaurante
          tornou-se um ponto de encontro para aqueles que buscavam não apenas
          uma refeição deliciosa, mas também uma imersão na cultura italiana em
          meio ao cenário tropical do Rio de Janeiro.
        </h4>
      </div>
      <div className={styles.thirdContent}>
        <h1>Obiettivo</h1>
        <img
          src="https://www.melhoresdestinos.com.br/wp-content/uploads/2022/11/pizza-capa-2022-04.jpg"
          alt=""
        />
      </div>
      <div className={styles.fourthContent}>
        <h4>
          Buscamos proporcionar não apenas uma experiência gastronômica
          excepcional, mas também criar momentos memoráveis para todos que
          escolhem a Dom El Magnifico. Acreditamos que a qualidade dos
          ingredientes, o cuidado na preparação e a paixão pela culinária se
          refletem no sorriso de nossos clientes.
        </h4>
        <br />
        <h4>
          Nossa equipe está comprometida em oferecer um atendimento caloroso e
          amigável, garantindo que cada cliente se sinta bem-vindo e apreciado.
          Valorizamos a diversidade de paladares e procuramos atender a uma
          ampla gama de preferências, garantindo que haja algo especial para
          todos em nosso cardápio.
        </h4>
        <br />
        <h4>
          Além disso, estamos sempre abertos a feedbacks e sugestões, pois
          acreditamos que a constante busca pela excelência é fundamental.
          Queremos aprimorar continuamente nossos serviços e pratos para superar
          as expectativas de nossos clientes.
        </h4>
        <br />
        <h4>
          Agradecemos por escolher a Pizzaria Dom El Magnifico e esperamos ter a
          oportunidade de encantar você com nossas deliciosas pizzas e
          atendimento excepcional. Estamos ansiosos para continuar a
          compartilhar momentos felizes e memoráveis com você e todos os nossos
          clientes.
        </h4>
      </div>
      <div className={styles.lastContent}>
        <h1>Grazie!</h1>
      </div>
    </section>
  );
};

export default Sobre;
