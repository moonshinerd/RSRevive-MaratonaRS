const db = require('../config/db');

const createEmpresaTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Empresa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    link_site_empresa TEXT,
    link_logo TEXT
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Empresa:', err.message);
    }
  });
};

module.exports = {
  createEmpresaTable
};
