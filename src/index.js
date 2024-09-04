//importa o modulo Express
const express = require("express");

//Define uma classe para organizar a logica de aplicação
class AppController {
  constructor() { //Cria uma nova instancia so Express dentro da classe
    
    this.express = express();
    //Chama o metodo middleares para configurar os middlears
    this.middlewares();
    //Chama o metodo routes para definir as rotas api
    this.routes();
  }
  middlewares() {
    //Permirtir qua a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  //Define as rotas da API
  routes() {
    const apiRoutes= require ('./routes/apiRoutes');
    this.express.use('/project-senai/api/v1/',apiRoutes);
    this.express.get("/health/", (req, res) => {
      res.send({ status: "OK", nome: "Priscila" });
    });
  }
}

module.exports = new AppController().express; // Exportando a instacia de express configurada, para que seja acessado em outros arquivos
