const express = require('express');
const app = express();
const userModel = require('./models/user');
const vagaModel = require('./models/vaga');
const cursoModel = require('./models/curso');
const empresaModel = require('./models/empresa');
const aplicaModel = require('./models/aplica');
const cursoEmpresaModel = require('./models/curso_empresa');

// Criar tabelas do banco de dados
userModel.createUserTable();
vagaModel.createVagaTable();
cursoModel.createCursoTable();
empresaModel.createEmpresaTable();
aplicaModel.createAplicaTable();
cursoEmpresaModel.createCursoEmpresaTable();

// Outras configurações e middlewares
// ...

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
