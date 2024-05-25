const db = require('../config/db');

const createAplicaTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Aplica (
    id_user INTEGER,
    id_vaga INTEGER,
    data_aplicacao TEXT,
    PRIMARY KEY (id_user, id_vaga),
    FOREIGN KEY (id_user) REFERENCES Usuario (id_user),
    FOREIGN KEY (id_vaga) REFERENCES Vaga (id_vaga)
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Aplica:', err.message);
    }
  });
};

module.exports = {
  createAplicaTable
};
