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

    add:  (req, res) => {
        

        // let sales =  {
        //     "name": req.body.name,
        //     "promo": req.body.promo,
        //     "pricePromo": req.body.pricePromo,
        //     "image": null
        // }
    
       
        res.render('addSales')           
    },

    edit:  (req, res) => {


       let sale = salesModel.find(req.params.id);
       res.render("edit", { sale } );

    
    },
    store: (req, res, next) => {
        
        let sales = req.body;
        sales.image = 'default.png';
        if (req.file) {
            sales.image = req.file.filename;
        }
        let newId = salesModel.create(sales);
        
    res.redirect('/sales');

    },
    salesAdmin: (req, res) => {
        let sales= salesModel.all();
        res.render('salesAdmin', { sales } );
    },
    update: (req, res) => {
        let sales = req.body
        sales.id = req.params.id
        
        if (req.file) {
            sales.image = req.file.filename;
        }
        let salesEdit = salesModel.update(sales);

        
        res.redirect('/sales');

        
    },

    destroy: (req, res) => {
        salesModel.delete(req.params.id);
        res.redirect('/sales');
    }
    
}