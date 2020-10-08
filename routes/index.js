var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/clube', function(req, res, next) {
  res.render('clube', { title: 'Express' });
});

router.get('/cervejas', function(req, res, next) {
  res.render('cervejas', { title: 'Express' });
});

router.get('/kits', function(req, res, next) {
  res.render('kits', { title: 'Express' });
});

router.get('/acessorios', function(req, res, next) {
  res.render('acessorios', { title: 'Express' });
});
module.exports = router;
