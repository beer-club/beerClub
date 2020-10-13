var express = require('express');
var router = express.Router();
const CustomerController = require('../controllers/customer');

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
    {id:2, name:'Cerveja Antuérpia American IPA 500ml', img:'images/colorado_indica.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:3, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:4, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:5, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50},
    {id:6, name:'Cerveja Antuérpia American IPA 500ml', img:'images/antuerpia.webp', fabricante: 'Antuerpia', tipo: 'IPA', price: 19.50}
  ];

  res.render('cervejas', {cervejas: cervejas});
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
