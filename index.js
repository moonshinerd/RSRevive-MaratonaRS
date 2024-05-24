const sqlite3 = require('sqlite3').verbose();

// Criar um novo banco de dados (ou abrir um existente)
let db = new sqlite3.Database('./meu-banco-de-dados.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabelas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Usuario (
      id_user INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      senha TEXT,
      telefone TEXT,
      cidade TEXT,
      data_criacao TEXT
  );`);

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
  );`);

  db.run(`CREATE TABLE IF NOT EXISTS Cursos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_do_curso TEXT,
      area TEXT,
      duracao TEXT,
      descricao TEXT,
      conteudo TEXT
  );`);

  db.run(`CREATE TABLE IF NOT EXISTS Empresa (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      link_site_empresa TEXT,
      link_logo TEXT
  );`);

  db.run(`CREATE TABLE IF NOT EXISTS Aplica (
      id_user INTEGER,
      id_vaga INTEGER,
      data_aplicacao TEXT,
      PRIMARY KEY (id_user, id_vaga),
      FOREIGN KEY (id_user) REFERENCES Usuario (id_user),
      FOREIGN KEY (id_vaga) REFERENCES Vaga (id_vaga)
  );`);

  db.run(`CREATE TABLE IF NOT EXISTS Curso_Empresa (
      id_curso INTEGER,
      id_empresa INTEGER,
      PRIMARY KEY (id_curso, id_empresa),
      FOREIGN KEY (id_curso) REFERENCES Cursos (id),
      FOREIGN KEY (id_empresa) REFERENCES Empresa (id)
  );`);
});

// Inserir dados na tabela Usuario
let stmt = db.prepare(`INSERT INTO Usuario (nome, email, senha, telefone, cidade, data_criacao) VALUES (?, ?, ?, ?, ?, ?)`);
stmt.run('Victor Schmidt', 'victor@example.com', 'senha123', '123456789', 'Brasília', '2024-05-24');
stmt.finalize();

// Consultar dados da tabela Usuario
db.each(`SELECT id_user, nome, email FROM Usuario`, (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`${row.id_user}: ${row.nome} - ${row.email}`);
});

// Fechar o banco de dados
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Fechado o banco de dados SQLite.');
});
