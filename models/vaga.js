const db = require('../config/db');

const createVagaTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Vaga (
    id_vaga INTEGER PRIMARY KEY AUTOINCREMENT,
    cidade TEXT,
    titulo TEXT,
    descricao TEXT,
    tipo TEXT,
    data_postagem TEXT,
    remuneracao TEXT,
    requisitos TEXT,
    contato TEXT,
    idUsuario INTEGER,
    FOREIGN KEY (idUsuario) REFERENCES Usuario (id_user)
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Vaga:', err.message);
    }
  });
};

module.exports = {
  createVagaTable
};
