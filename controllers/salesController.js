const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const salesModel = jsonTable('sales');

// module.exports = {
//     index: (req, res, next) => {
//         res.render('sales');
//     },
   

// }
module.exports = {
    sales: (req, res) => {
        let sales = salesModel.all();
        res.render('sales', { sales } );
    },

    // sales:  (req, res) => {
    //     let salesId = req.params.salesId; 

    //     let sales = []

    //     //let salesToEdit = sales[salesId];

        
    //     res.render('salesToEdit', {salesToEdit: salesToEdit});
        
    //     res.render('salesId'); 
        
    //     res.render("sales");
    // },
    add:  (req, res) => {

        let salesId = req.params.salesId; 

        let sales =  {
            "name": req.body.name,
            "promo": req.body.promo,
            "pricePromo": req.body.pricePromo,
            "image": null
        }
        //let prueba = productsModel.readFile();
       
        res.render('/sales');
    },

    edit:  (req, res) => {

        let salesId = req.params.salesId; 

        let sales =  {
            "name": req.body.name,
            "promo": req.body.promo,
            "pricePromo": req.body.pricePromo,
            "image": null
        }

       // let productsToEdit = products.[productId];

       //res.render("productsToEdit", {productsToEdit: productsToEdit});

        res.render('edit');
    },
    store: (req, res, next) => {
        
        let sales = req.body;
        sales.image = 'default.png';
        if (req.file) {
            sales.image = req.file.filename;
        }
        let newId = salesModel.create(sales);
        
    res.redirect('/sales');

    }
    
}