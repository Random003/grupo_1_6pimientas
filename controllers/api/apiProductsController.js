const { product } = require ('../../database/models');
const { Op } = require("sequelize")
const fs = require('fs');
const path = require('path');

module.exports = {
    productsAll: (req, res) => {
        
        if(req.params.id) {
            product.findByPk (req.params.id, { include: 'variety' } )
            .then (products => {
                if (products) {
                    res.status(200).json(
                        {
                            meta: {
                                url: req.originalUrl,
                                status: 200,
                                count: 1 
            
                            },
                            data: products
                            
                        }    
                    );
    
                } else {
                    res.status(400).json( {error: 'No results found'} );
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json( { error: 'Could not connect to database' } );;
            })
        };
        
        product.findAll( { order: ['id'], include: 'variety' })
        .then (products => {
            if (products) {
                res.status(200).json(
                    {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: products.length 
        
                        },
                        data: products
                        
                    }    
                );

            } else {
                res.status(400).json( {error: 'No results found'} );
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json( { error: 'Could not connect to database' } );;
        })
    },


    lastProduct: (req, res) => {
        product.findAll( { order: [ ['id', 'DESC'] ], limit: [1], raw: true}) //, nest: true, include: 'variety' 
        .then (products => {
            let appPath = 'http://localhost:5001/images/products/'
            let imageURL =  appPath + products[0].image;
            let lastProduct = products[0];
            lastProduct.imageURL = imageURL;

            console.log(lastProduct);
            if (product) {
                res.status(200).json(
                    {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: 1 
        
                        },
                        data: lastProduct
                        
                    }    
                );

            } else {
                res.status(400).json( {error: 'No results found'} );
            }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json( { error: 'Could not connect to database' } );;
        })
    }


}
