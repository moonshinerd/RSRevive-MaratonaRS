import React from 'react';
import styles from './styles.module.css'; // Importando o CSS
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import marcos from './components/Marcos.png'

export const AboutUs = () => {
  return (
    <div> 
      <Header /> 
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.container}>
        <div className={styles.graybox}>
          <p>Sobre Nós</p>
        </div>
        <div className={styles.textbox}>
          <p>O nosso grupo foi formado ao acaso, com jovens ativos e que se <br></br>solidarizaram com a causa. Todos somos estudantes que vimos <br></br>uma possibilidade para fazer a diferença enquanto aprimoramos <br></br>os nossos conhecimentos. Na equipe temos 7 graduandos em <br></br>Engenharia de Software, 2 graduandos em <br></br>Engenharia Aeroespacial e 1 graduando em Engenharia Mecânica.</p>
        </div>
        <div className={styles.container}>
          <div className={styles.graybox1}>
            <p>Afinal... quem somos?</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.graybox2}>
            <p>Marcos Goulart - 3º Semestre - Eng. Aeroespacial - UnB  <br></br><br></br>
            Atualmente participo de uma Empresa Júnior de Aeroespacial, já palestrei em eventos e gosto de me aventurar em projetos de Engenharia de Software. Sou natural de Varginha/MG e atualmente moro em Brasília/DF.</p>
          </div>
          <img src={marcos} className={styles.marcos} width="100%" height="100%"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};
