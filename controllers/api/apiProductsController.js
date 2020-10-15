const { product } = require ('../../database/models');
const { Op } = require("sequelize")

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
        
        product.findAndCountAll( { order: ['id'], include: 'variety' })
        .then (products => {
            if (products) {
                res.status(200).json(
                    {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: products.count 
        
                        },
                        data: products.rows
                        
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
