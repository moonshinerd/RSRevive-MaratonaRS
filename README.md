
# RSRevive-MaratonaRS
## RecomeçoRS
Repositório do projeto RecomeçoRS, uma plataforma para auxiliar na reintegração das vítimas das enchentes no Rio Grande do Sul. Oferecemos cursos, vagas de emprego e oportunidades de trabalho voluntário para reconstruir as comunidades afetadas.

## Como executar o projeto
Para executar o projeto, é necessário iniciar tanto o servidor (backend) quanto a aplicação web (frontend) simultaneamente, onde o frontend fará requisições ao backend.

### Web (Frontend)
1. Certifique-se de ter a última versão do Node.js e npm instalados na sua máquina.
2. Navegue até a pasta `web` e execute o comando:
   ```sh
   npm install
   ```
   para instalar as dependências da aplicação.
3. Com as dependências instaladas, execute:
   ```sh
   npm run dev
   ```
   Isso iniciará o servidor local e exibirá a porta onde a aplicação está sendo hospedada.

### Server (Backend)
1. Certifique-se de ter a última versão do Node.js e npm instalados na sua máquina.
2. Navegue até a pasta `server` e execute o comando:
   ```sh
   npm install
   ```
   para instalar as dependências.
3. Com as dependências instaladas, execute:
   ```sh
   node server.js
   ```
   Isso iniciará o servidor local e exibirá a porta onde o backend está sendo hospedado.

Após seguir esses passos, a aplicação estará pronta para uso na porta local em que o frontend se encontra.
