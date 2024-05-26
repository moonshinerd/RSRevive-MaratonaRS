const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const dbPath = path.resolve(__dirname, './data/database.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Criação da tabela de usuário se não existir
const createUserTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Usuario (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT,
    telefone TEXT,
    cidade TEXT,
    data_criacao TEXT
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Usuario:', err.message);
    } else {
      console.log('Tabela Usuario criada ou já existe.');
    }
  });
};

createUserTable();

app.use(bodyParser.json());
app.use(cors());

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  db.get('SELECT * FROM Usuario WHERE email = ? AND senha = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: 'Erro no servidor' });
    } else if (row) {
      res.json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
