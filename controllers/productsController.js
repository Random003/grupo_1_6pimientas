const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');

module.exports = {
    products : (req, res) => {
        let products = productsModel.all();
        res.render('./products/products', { products } );
    },

    productCart:  (req, res) => {
        res.render('./products/productCart');
    },
    
    add:  (req, res) => {
       
        res.render("./products/add");
    },
    edit:  (req, res) => {

        //let productId = req.params.id; 
        let product = productsModel.find(req.params.id);
        res.render("./products/edit", { product } );
    },

    store: (req, res, next) => {
        let product = req.body;
        product.image = 'default.png';
        if (req.file) {
            product.image = req.file.filename;
        }
        let newId = productsModel.create(product);
        
        res.redirect('/products');

    },
    productAdmin: (req, res) => {
        let products = productsModel.all();
        res.render('./products/productsAdmin', { products } );
    },
    update: (req, res) => {
        let product = req.body
        product.id = req.params.id
        
        if (req.file) {
            product.image = req.file.filename;
        }
        let productEdit = productsModel.update(product);

        
        res.redirect('/products');

        
    },

    destroy: (req, res) => {

        productsModel.delete(req.params.id);
        res.redirect('/products');
    }
    
}
