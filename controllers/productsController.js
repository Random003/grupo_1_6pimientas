const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');

module.exports = {
    products : (req, res) => {
        let products = productsModel.all();
        res.render('products', { products } );
    },

    productCart:  (req, res) => {
        res.render('productCart');
    },
    
    add:  (req, res) => {
       
        res.render("add");
    },

    edit:  (req, res) => {

        let productId = req.params.productId; 
        let product = productsModel.find(productId);

        res.render("edit", { product } );
    },

    store: (req, res, next) => {
        console.log('entró')
        return 

        let product = req.body;
        product.image = 'default.png';
        if (req.file) {
            product.image = req.file.filename;
        }
        let newId = productsModel.create(product);
        
    res.redirect('/products');

    },
    productAdmin: (req, res, nex) => {
        let products = productsModel.all();
        res.render('productsAdmin', { products } );
    },
    destroy: (req, res) => {
        //aca no se si les parece llamarlo por el Id del  producto 
        
        let id = req.params.id;
        deleteImages(id);
        productsModel.delete(id);
        res.redirect('/products');
    }
    
}
