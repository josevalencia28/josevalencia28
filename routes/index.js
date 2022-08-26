const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'My WebStore'
    })
});

router.get('/products', (req, res, next ) => {
  res.render('products', {
    title: 'Lista de Productos'
  });

  router.get('/precios', (req, res, next) => {
    res.render('precios', {
        title: 'precios'
    });
  })

});

module.exports = router;



