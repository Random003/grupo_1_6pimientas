const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const salesModel = jsonTable('sales');
const { sales } = require('../database/models');
const db = require('../database/models');
//let db = require('../database/models')
// module.exports = {
//     index: (req, res, next) => {
//         res.render('sales');
//     },
   

// }
module.exports = {
    sales: (req, res) => {
       // let sales = salesModel.all();
        sales.findAll()
            .then(function (sales_db) {
                res.render('./sales/sales', { sales: sales_db } );
            });
             
    },

    add:  (req, res) => {
        
    
       
        res.render('./sales/addSales')           
    },

    edit:  (req, res) => {


       let sales = salesModel.find(req.params.id);
       res.render('./sales/editSales', { sales } );

    
    },
    store: (req, res, next) => {
        
        // sales.create({
        //     id: req.body.id,
        //     name: req.body.name,
        //     discount: req.body.discount,
        //     price: req.body.price,
        // })
        // res.redirect('../sales');
        
        
        let sales = req.body;
        sales.image = 'default.png';
        if (req.file) {
            sales.image = req.file.filename;
        }
        let newId = salesModel.create(sales);
        
    res.redirect('../sales');

    },
    salesAdmin: (req, res) => {

        // sales.findAll()
        //     .then(function (sales_db)){
        //         res.render('./sales/salesAdmin', { sales } );
        //     }

        let sales= salesModel.all();
        res.render('./sales/salesAdmin', { sales } );
    },
    update: (req, res) => {
        let sales = req.body
        sales.id = req.params.id
        
        if (req.file) {
            sales.image = req.file.filename;
        }
        let salesEdit = salesModel.update(sales);

        
        res.redirect('../sales');

        
    },

    destroy: (req, res) => {

        // sales.delete({
        //     where: { id: req.params.id }
        // });
        // // .then(function (sales)){
        // //   res.redirect('/sales')
        // // }


        salesModel.delete(req.params.id);
        res.redirect('/sales');
    }
    
}