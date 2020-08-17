module.exports = {
    product1 : (req, res) => {
        res.render('productDetail1');
    },
    product2:  (req, res) => {
        res.render('productDetail2');
    },
    productCart:  (req, res) => {
        res.render('productCart');
    },
    promociones:  (req, res) => {

        let idPromociones = req.params.idPromociones; 

        let promociones = []

        let promocionesToEdit = promociones.[idPromociones];

        
        res.render('promocionesToEdit', {promocionesToEdit: promocionesToEdit});
        
        res.render('idPromociones'); 
        
        res.render("promociones");
    },
    add:  (req, res) => {
        res.render("add");
    },
    edit:  (req, res) => {

        let productId = req.params.productId; 

        let products =  {
            "name": req.body.name,
            "description": req.body.description,
            "variety":req.body.variety,
            "presentation": req.body.presentation,
            "performance": req.body.performance,
            "price": req.body.price,
            "image": null
        }

        let productsToEdit = products.[productId];

       res.render("productsToEdit", {productsToEdit: productsToEdit});

        res.render(productId);
    },
    productSearch: (req,res) {
        let busquedaProducto = req.query.buscar 
        
        //***buscar*** representaría el campo en el formulario de busqueda en la vista EJS. Aguardo a agregar  esa vista, si les parece la podemos meter en la parte de productos1/2. Aguardo comentarios, una vez hecho, se puede agregar la funcionalidad JS a la vista EJS.

        let busquedaProductoResults = [];

        for (let i=0, i < products.length, i++) {
            if (products[i].name.includes(busquedaProducto)) {
                busquedaProductoResults.push[i];
            }
        }
        res.render('busquedaProductoResults')
    }