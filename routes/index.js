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
  
  router.post('/nuevos-productos', (req, res, next) => {
    const { nuevoItem }  = req.body;
    items.push({
      id: items.length +1,
      name: nuevoItem
    });
    res.redirect('/products');
  })

});


module.exports = router;



