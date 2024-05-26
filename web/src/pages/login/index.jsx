import React from 'react';
import styles from './styles.module.css'; // Importando o CSS
import logo from './components/RSRevive.png'

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="SOSRS Logo" width="180" height="50" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles['login-form']}>
          <h2 style={{ color: 'black' }}>Bem vindo!</h2>
          <div className={styles['input-field']}>
            <label htmlFor="username" style={{ color: 'black' }}>Usuário:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className={styles['input-field']}>
            <label htmlFor="password" style={{ color: 'black' }}>Senha:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className={styles.center}>
            <button type="submit" className={styles.button}>Entrar</button>
          </div>
          <div style={{ marginTop: '15px' }} className={styles.links}>
            <a href="#">Esqueceu a senha?</a>
            <a> | </a>
            <a href="#">Não tem cadastro?</a>
          </div>
        </div>
      </div>
        <div className={styles.footer1}></div>
        <div className={styles.footer2}></div>
        <div className={styles.footer3}></div>
    </div>
  );
};
