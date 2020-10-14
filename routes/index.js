var express = require('express');
var router = express.Router();
const CustomerController = require('../controllers/customer');
const BeerController = require('../controllers/beer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/clube', function(req, res, next) {
  res.render('clube', { title: 'Express' });
});

router.get('/cervejas', function(req, res, next) {
  let cervejas = [
    {id:1, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:2, name:'Cerveja Colorado Indica 600ml', img:'images/colorado_indica.webp', fabricante: 'Colorado', tipo: 'IPA', price: 11.92},
    {id:3, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'Trigo', price: 19.50},
    {id:4, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:5, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'Pilsen', price: 19.50},
    {id:6, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'Trigo', price: 19.50}
  ];

  res.render('cervejas', {cervejas: cervejas});
  // BeerController.get
});

router.get('/kits', function(req, res, next) {
  res.render('kits', { title: 'Express' });
});

router.get('/acessorios', function(req, res, next) {
  res.render('acessorios', { title: 'Express' });
});

// Clientes
router.post('/customers', CustomerController.create);

module.exports = router;
