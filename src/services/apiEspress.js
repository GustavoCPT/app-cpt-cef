//pegar dados do banco de dados MySQL utilizando Express (Rest API)

const express = require('express');
//vai deixar a gente acessar o Body das nossas requisições e usar os dados que forem inseridos
const bodyParser = require('body-parser');

const mysql = require('mysql');

//criando uma conexão com o banco de dados
const connection = mysql.createPool({
  host     : 'localhost', // O endereço da conexão (localhost).
  user     : 'leonardo', // O nome de usuário do banco.
  password : '123', // A senha do banco.
  database : 'localhost' // O nome do seu database.
});

const app = express();

// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/users', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
    
    // Executando a query MySQL (selecionar todos os dados da tabela usuário).
    connection.query('SELECT * FROM usuarios', function (error, results, fields) {
      // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
      
      // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
      res.send(results)
    });
  });
});

// Iniciando o servidor.
app.listen(3000, () => {
 console.log('Vai no navegador e entra em http://localhost:3000/users pra ver os usuários cadastrados.');
});


export default App;
