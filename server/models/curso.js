const db = require('../config/db');

const createCursoTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Cursos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_do_curso TEXT,
    area TEXT,
    duracao TEXT,
    descricao TEXT,
    conteudo TEXT
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Cursos:', err.message);
    }
  });
};

module.exports = {
  createCursoTable
};
