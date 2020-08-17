const fs = require('fs');

const path = require('path'); 

products: (req, res) {

    let products = fs.readFileSync(path.join(__dirname, '../database/products-example.json'), 'utf-8'); 

    products = JSON.parse(products); 

    let products = products.find(products => products.id == req.params.id); 

    res.render('/products/id:');

}

promociones: (req, res) {
   
    let promociones = fs.readFileSync(path.join(__dirname, '../database/sales-example.json'), 'utf-8'); 

    promociones = JSON.parse(promociones); 

    let promociones = products.find(promociones => promociones.id == req.params.id); 

    res.render('/promociones/id:');



}


//para funcionamiento de envío  de formularios

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

