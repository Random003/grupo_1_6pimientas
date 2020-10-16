const { product } = require ('../../database/models');
const { Op } = require("sequelize")

module.exports = {
    salesAll: (req, res) => {
        
        if(req.params.id) {
            sales.findByPk (req.params.id )
            .then (sales => {
                if (sales) {
                    res.status(200).json(
                        {
                            meta: {
                                url: req.originalUrl,
                                status: 200,
                                count: 1 
            
                            },
                            data: sales
                            
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
        
        sales.findAndCountAll( { order: ['id'], include: 'discount' })
        .then (sales => {
            if (sales) {
                res.status(200).json(
                    {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                            count: products.count 
        
                        },
                        data: sales.rows
                        
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