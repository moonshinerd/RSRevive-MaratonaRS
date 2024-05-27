import React from 'react';
import styles from './styles.module.css'; // Importando o CSS
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import logo from './components/RSRevive.png'

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
      </div>
      <Footer />
    </div>
  );
};
