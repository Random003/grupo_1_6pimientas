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

        // res.render('promocionesToEdit', (aca habría que hacer las vista ejs de productos y ahí modificar), {promocionesToEdit: promocionesToEdit});
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

       // res.render("productsToEdit" (aca habría que hacer las vista ejs de productos y ahí modificar), {productsToEdit: productsToEdit});

        res.render(productId);
    }
}