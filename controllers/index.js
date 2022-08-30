const items = [
    {id: 1, name: 'Arroz'},
    {id: 2, name: 'Carne'},
    {id: 3, name: 'Lentejas'}
  ];

const index = (req, res) => {
    res.render('index', { 
        title: 'My WebStore'
    })
}

const ListOfProducts = (req, res, next ) => {
    res.render('products', {
      title: 'Lista de Productos',
      items: items
    }); 
  }

 const  newProduct = (req, res, next) => {
    const { nuevoItem }  = req.body;
    items.push({
      id: items.length +1,
      name: nuevoItem
    });
    res.redirect('/products');
  }

module.exports = {
    index,
    ListOfProducts,
    newProduct
}