const db = require('../config/db');

const createPossuiTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Possui (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idconteudo INTEGER,
    FOREIGN KEY (idconteudo) REFERENCES Cursos (id)
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Possui:', err.message);
    }
  });
};

module.exports = {
  createPossuiTable
};
