import React, { useState } from 'react';
import styles from './styles.module.css'; // Importando o CSS
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const Register = () => {
  const [nome, setnome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setcidade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, telefone, cidade, email, senha }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setError('');
        console.log(data.message); // Registro bem-sucedido
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor');
    }
  };

  return (
    <div>
      <Header></Header>
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles['register-form']}>
          <h2 style={{ color: 'black' }}>Registro</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleRegister}>
            <div className={styles['input-field']}>
              <label htmlFor="nome" style={{ color: 'black' }}>Nome:</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                value={nome}
                onChange={(e) => setnome(e.target.value)}
                required
              />
            </div>
            <div className={styles['input-field']}>
              <label htmlFor="telefone" style={{ color: 'black' }}>Telefone:</label>
              <input 
                type="text" 
                id="telefone" 
                name="telefone" 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                maxLength="11"
              />
            </div>
            <div className={styles['input-field']}>
              <label htmlFor="cidade" style={{ color: 'black' }}>Cidade:</label>
              <input 
                type="text" 
                id="cidade" 
                name="cidade" 
                value={cidade}
                onChange={(e) => setcidade(e.target.value)}
                required
              />
            </div>
            <div className={styles['input-field']}>
              <label htmlFor="email" style={{ color: 'black' }}>Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles['input-field']}>
              <label htmlFor="senha" style={{ color: 'black' }}>Senha:</label>
              <input 
                type="password" 
                id="senha" 
                name="senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <div className={styles.center}>
              <button type="submit" className={styles.button}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};
