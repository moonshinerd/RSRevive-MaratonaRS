const db = require('../config/db');

const createUserTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Usuario (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    senha TEXT,
    telefone TEXT,
    cidade TEXT,
    data_criacao TEXT
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Usuario:', err.message);
    }
  });
};

module.exports = {
  createUserTable
};
