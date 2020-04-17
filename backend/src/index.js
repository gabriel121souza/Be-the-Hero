const express = require ('express');
const cors = require ('cors');
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Metodos HTTP
 * 
 * rotas / Recursos
 * Get: Buscar/Listar uma informacao do backend
 * Post: criar uma informacao do backend
 * PUT: alterar uma informacao do backend 
 * Delete: deletar  uma informacao do backend
 */

 /**
  * Tipos de Parametros
  * Query Paramy: Parametro nomeados enviados na rota apos "?" (filtros, paginacao)
  * Route Params: parametros ultilizados para identificar recursos
  * Request Body: Corpo da Requisiçao, utilizado para criar ou alterar recursos 
  *  
  */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft, SQL Serve
  * NOSQL: MongoDB, CouchDB, etc
  */

 /**
  *Driver: SELECT * FROM users
  Query Builder: table('users'). select('*').where()
  */

 app.listen(3333);