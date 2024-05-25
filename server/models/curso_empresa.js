const db = require('../config/db');

const createCursoEmpresaTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS Curso_Empresa (
    id_curso INTEGER,
    id_empresa INTEGER,
    PRIMARY KEY (id_curso, id_empresa),
    FOREIGN KEY (id_curso) REFERENCES Cursos (id),
    FOREIGN KEY (id_empresa) REFERENCES Empresa (id)
  );`, (err) => {
    if (err) {
      console.error('Erro ao criar tabela Curso_Empresa:', err.message);
    }
  });
};

module.exports = {
  createCursoEmpresaTable
};
