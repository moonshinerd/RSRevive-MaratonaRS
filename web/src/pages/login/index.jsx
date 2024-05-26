import React, { useState } from 'react';
import styles from './styles.module.css'; // Importando o CSS
import logo from './components/RSRevive.png';
import { Header } from '../../components/header';
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setError('');
        console.log(data.message); // Login bem-sucedido
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor');
    }
  };

  return (
<div> {/* Envolve todos os elementos em um único elemento */}
      <Header /> {/* Inclui o componente Header dentro do retorno */}
      <div className={styles.container}>
        <div className={styles.container}>
          <div className={styles['login-form']}>
            <h2 style={{ color: 'black' }}>Bem vindo!</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div className={styles['input-field']}>
                <label htmlFor="username" style={{ color: 'black' }}>Usuário:</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={styles['input-field']}>
                <label htmlFor="password" style={{ color: 'black' }}>Senha:</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.center}>
                <button type="submit" className={styles.button}>Entrar</button>
              </div>
            </form>
            <div style={{ marginTop: '15px' }} className={styles.links}>
              <a href="#">Esqueceu a senha?</a>
              <a> | </a>
              <a href="/register">Não tem cadastro?</a>
            </div>
          </div>
        </div>
        <div className={styles.footer1}></div>
        <div className={styles.footer2}></div>
        <div className={styles.footer3}></div>
      </div>
    </div>
  );
};
