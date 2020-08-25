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
        //console.log('entró')
        

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
    // update: (req, res) => {
    //     let product = {
    //         id: parseInt(req.params.id),
    //         name: req.body.name,
    //         price: parseFloat(req.body.price),
    //         discount: req.body.discount,
    //         description: req.body.description,
    //         size: parseInt(req.body.size),
    //         type: parseInt(req.body.type),
    //         categories: parseCategories(req.body.categories)
    //     };
    //     let productId = productsModel.update(productId);
    //     // Eliminar imágenes actuales
    //     if(req.body.removeCurrentImages) {
    //         deleteImages(proudctId);
    //     }
    //     // Guardar nuevas imágenes
    //     req.files.forEach(file => productImagesModel.create({ prodId: id, name: file.filename }));
    //     res.redirect('/products/' + id);
    // },
    destroy: (req, res) => {
        
        let productId = req.params.productId;
        deleteImages(productId);
        productsModel.delete(productId);
        res.redirect('/products');
    }
    
}
