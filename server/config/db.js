const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho absoluto para o arquivo do banco de dados
const dbPath = path.resolve(__dirname, '../data/database.db');

// Criar ou abrir o banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

module.exports = db;
