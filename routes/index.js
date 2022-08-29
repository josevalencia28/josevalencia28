const express = require('express');
const router = express.Router();

const items = [
  {id: 1, name: 'Arroz'},
  {id: 2, name: 'Carne'},
  {id: 3, name: 'Lentejas'}
];

router.get('/', (req, res) => {
    res.render('index', { 
        title: 'My WebStore'
    })
});

router.get('/products', (req, res, next ) => {
  res.render('products', {
    title: 'Lista de Productos',
    items: items
  });

});


module.exports = router;



