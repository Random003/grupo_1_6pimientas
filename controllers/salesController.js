const path = require('path');
const jsonTable = require('../database/jsonTable');
//const { read } = require('fs');
const salesModel = jsonTable('sales');
const { sales } = require('../database/models');
const { validationResult } = require('express-validator');
//const db = require('../database/models');
//const { promiseImpl } = require('ejs');
//const { Op } = require("sequelize")

module.exports = {
    sales: (req, res) => {
        // let sales = salesModel.all();

        sales.findAll({ order: ['id'] })
            .then(sales => {
                res.render('./sales/sales', { sales });

            });
    },


    add: (req, res) => {

        res.render('./sales/addSales')
    },

    edit: (req, res) => {



        sales.findByPk(req.params.id)
            .then(salesEdit => {
                res.render("./sales/editSales", { sales: salesEdit });
            });


        //    let sales = salesModel.find(req.params.id);
        //    res.render('./sales/editSales', { sales } );


    },
    store: async (req, res) => {
        let errorsStoreSales = validationResult(req);
        if (!errorsStoreSales.isEmpty()) {
            res.render('./sales/addSales', { errors: errorsStoreSales.mapped(), sales: req.body });
        } else {
            let newSale = req.body;
            newSale.image = 'default.png';
            if (req.file) {
                newSale.image = req.file.filename;
            }
            let newSale_db = await sales.create(newSale);
            res.redirect('sales');
        }
    },

    salesAdmin: (req, res) => {
        let sales = salesModel.all();
        res.render('./sales/salesAdmin', { sales });
    },

    update: async (req, res) => {
        let errorsStoreSales = validationResult(req);
        if (!errorsStoreSales.isEmpty()) {
            res.render('./sales/editSales', { errors: errorsStoreSales.mapped(), sales: req.body });

        } else {
            let editSale = req.body;
            if (req.file) {
                editSale.image = req.file.filename;
            } else {
                let sale_old_db = await sales.findByPk(req.params.id);
                editSale.image = sale_old_db.image;
            }
    
    
            //actualizo la promoción
            let newSale_db = await sales.update(editSale, { where: { id: req.params.id } });
    
            res.redirect('/sales');
        }
    },

    destroy: async (req, res) => {

        existingSale = await sales.findByPk(req.params.id);
        if (existingSale.image != 'default.png') {
            let imagePath = path.join(__dirname, '../public/images/products/' + existingSale.image);
        }


        // borrar producto
        sales.destroy({ where: { id: req.params.id } })
            .then(deletedGroup => {
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath)
                }
            });
        // borrar categorías

        res.redirect('/sales');


        // salesModel.delete(req.params.id);
        // res.redirect('/sales');
    }

}