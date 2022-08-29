const express = require('express');
const router = express.Router();

const items = [
  {id: 1, name: 'productos1'},
  {id: 2, name: 'productos2'},
  {id: 3, name: 'productos3'}
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



