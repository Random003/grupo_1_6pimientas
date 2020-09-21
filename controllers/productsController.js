const fs = require('fs');
const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');
const { product, variety, product_variety } = require ('../database/models');
const { promiseImpl } = require('ejs');

module.exports = {
    products : (req, res) => {
        //let products = productsModel.all();
        product.findAll( { order: ['id'], include: 'variety' })
            .then (products => {
                res.render('./products/products', { products } );
                
            });
    },

    productCart:  (req, res) => {
        res.render('./products/productCart');
    },
    
    add:  (req, res) => {
        res.render("./products/add");
    },
    edit:  (req, res) => {

        //let productId = req.params.id; 
        //let product = productsModel.find(req.params.id);
        
        product.findByPk(req.params.id, { include: 'variety' } )
            .then (productEdit => {
                res.render("./products/edit", { product: productEdit } );
            });
    },

    store: async (req, res, next) => {
        let newProduct = req.body;
                
        newProduct.image = 'default.png';
        if (req.file) {
            newProduct.image = req.file.filename;
        }
        let newProduct_db = await product.create(newProduct);
        let tempVarieties = [
            { name: req.body.variety[0], product_id: newProduct_db.id },
            { name: req.body.variety[1], product_id: newProduct_db.id },
            { name: req.body.variety[2], product_id: newProduct_db.id },
            { name: req.body.variety[3], product_id: newProduct_db.id },
            { name: req.body.variety[4], product_id: newProduct_db.id },
            { name: req.body.variety[5], product_id: newProduct_db.id }
        ];
        // limpio objeto name con instancias vacías
        let newVarieties = tempVarieties.filter (tempVariety => tempVariety.name);

        //actualizo producto
        
                
        //si hay variedades las creo junto con su nueva asociación en tabla product_variety  
        if (newVarieties) {
            let newVarieties_db = await variety.bulkCreate(newVarieties);
        }
       
        //product.create(newProduct);
        res.redirect('products');

    },
    productAdmin: (req, res) => {
        let products = productsModel.all();
        res.render('./products/productsAdmin', { products } );
    },
    update: async (req, res) => {
        //let product = req.body
        //product.id = req.params.id
        // if (req.file) {
        //     product.image = req.file.filename;
        // }
        // let productEdit = productsModel.update(product);

        let editProduct = req.body;
                
        if (req.file) {
            editProduct.image = req.file.filename;
        }
        //genero objeto con id de variedades
        let tempIdVarieties = [
            { id: req.body.id_variety[0] },
            { id: req.body.id_variety[1] },
            { id: req.body.id_variety[2] },
            { id: req.body.id_variety[3] },
            { id: req.body.id_variety[4] },
            { id: req.body.id_variety[5] }
        ];
        // limpio objeto id con instancias vacías
        let newIdVarieties = tempIdVarieties.filter (tempIdVariety => tempIdVariety.id);
        // borro variedades antiguas y relación con productos
        for (x = 0; x < newIdVarieties.length; x++) {
            await variety.destroy( { where: { id: newIdVarieties[x].id}})
        }

        //genero objeto con nombres de variedades
        let tempVarieties = [
            { name: req.body.variety[0], product_id: req.params.id },
            { name: req.body.variety[1], product_id: req.params.id },
            { name: req.body.variety[2], product_id: req.params.id },
            { name: req.body.variety[3], product_id: req.params.id },
            { name: req.body.variety[4], product_id: req.params.id },
            { name: req.body.variety[5], product_id: req.params.id }
        ];
        // limpio objeto name con instancias vacías
        let newVarieties = tempVarieties.filter (tempVariety => tempVariety.name);

        //actualizo producto
        let newProduct_db = await product.update(editProduct, { where: { id: req.params.id } });
                
        //si hay variedades las creo junto con su nueva asociación en tabla product_variety  
        if (newVarieties) {
            let newVarieties_db = await variety.bulkCreate(newVarieties);
        }
   
        res.redirect('/products');

        
    },

    destroy: async (req, res) => {
        //productsModel.delete(req.params.id);
        existingProduct = await product.findByPk(req.params.id);
        if(existingProduct.image != 'default.png') {
            let imagePath = path.join(__dirname, '../public/images/products/' + existingProduct.image);
        }
        
        
        // borrar producto
        product.destroy({ where: { id: req.params.id } })
        .then(deletedGroup => {
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
        });
        // borrar categorías
        
        res.redirect('/products');
    }
    
}
