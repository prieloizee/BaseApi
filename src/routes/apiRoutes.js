//Modulo Router do express
//Router sera utilixado para definir rotas especificas
const router = require('express').Router();

const controllerNumbers = require('../controllers/controllerNumbers');
const numbersController = require('../controllers/controllerNumbers');
//Importa a controller de professores onde contém a logica relacionada a professores
const teacherController = require('../controllers/controllerNumber');

// Rota POST para '/numbers'
router.post('/numbers/',controllerNumbers.postNumbers);
router.post('/teacher/',controllerNumbers.postNumbers);

module.exports = router
