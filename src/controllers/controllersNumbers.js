module.exports = class controllersNumbers{
  //Cadastro de professor
  static async checkPar(req,res){
      const {numbers} = req.body;

      //Verifica se numbers é um numero
      if(typeof numbers !== "number"){
          res.status(400).json({message:"Dados inválidos"});
      }

      //Verifica se o numero é par
      if(numbers % 2 === 0){
          res.status(200).json({resultado: "numero par"});
      }

      else{
          res.status(200).json({resultado:"numero ímpar"});
      }
  }

  static async checkPrimo(req, res){
      const {numbers} = req.body;
      if(typeof numbers !== "number"){
          res.status(400).json({message:"Dados inválidos"});
      }
      for (let i = 2; i <= Math.sqrt(numbers); i++){
          if (numbers % i === 0){
              res.status(200).json({resultado: "Não é um número primo"});
          }
      }
      return res.status(200).json({resultado: "É um número primo"});
  }


 
};