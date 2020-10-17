var express = require('express');
var router = express.Router();
const CustomerController = require('../controllers/customer');
const SessionController = require('../controllers/session');
const KitController = require('../controllers/kit');
const BeerController = require('../controllers/beer');
const AcessorioController = require('../controllers/acessorios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/clube', function(req, res, next) {
  res.render('clube', { title: 'Express' });
});

router.get('/cervejas', BeerController.get);

router.get('/kits', KitController.get);

router.get('/acessorios', AcessorioController.get);

// Clientes
router.post('/customers', CustomerController.create);

// Session
router.post('/sessions', SessionController.login);

module.exports = router;
