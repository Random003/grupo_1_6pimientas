const { product, shopping_bag, detail_shopping_bag, user, sequelize } = require('../../database/models');
const { Op } = require("sequelize")
const fs = require('fs');
const path = require('path');

module.exports = {
    productsAll: (req, res) => {
        if (req.params.id) {
            product.findByPk(req.params.id, { include: 'variety' })
                .then(products => {
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
                        res.status(400).json({ error: 'No results found' });
                    }
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).json({ error: 'Could not connect to database' });;
                })
        };
        product.findAll({ order: ['id'], include: 'variety' })
            .then(products => {
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
                    res.status(400).json({ error: 'No results found' });
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({ error: 'Could not connect to database' });;
            })
    },

    lastProduct: (req, res) => {
        product.findAll({ order: [['id', 'DESC']], limit: [1], raw: true }) //, nest: true, include: 'variety' 
            .then(products => {
                let appPath = 'http://localhost:5001/images/products/'
                let imageURL = appPath + products[0].image;
                let lastProduct = products[0];
                lastProduct.imageURL = imageURL;
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
                    res.status(400).json({ error: 'No results found' });
                }
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({ error: 'Could not connect to database' });;
            })
    },

    amountSales: (req, res) => {
        shopping_bag.sum('total')
            .then(amountSales => {
                res.status(200).json(
                    {
                        meta: {
                            url: req.originalUrl,
                            status: 200,
                        },
                        data: {
                            amountSales
                        }
                    }
                );
            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({ error: 'Could not connect to database' });;
            });



    },


    productSeller: (req, res) => {
        detail_shopping_bag.findAll({
            attributes: ['product_id', [sequelize.fn('sum', sequelize.col('quantity')), 'total'],],
            group: ['product_id'],
            raw: true,
            order: sequelize.literal('total DESC'),

        })
            .then(bestSeller => {
                product.findByPk(bestSeller[0].product_id)
                    .then(productBestSeller => {
                        product.findByPk(bestSeller[bestSeller.length - 1].product_id)
                            .then(productWorstSeller => {
                                res.status(200).json(
                                    {
                                        meta: {
                                            url: req.originalUrl,
                                            status: 200,

                                        },
                                        data: {
                                            productBS: productBestSeller.name,
                                            productWS: productWorstSeller.name

                                        }
                                    })

                            })
                            .catch(error => {
                                console.log(error);
                                return res.status(500).json({ error: 'Could not connect to database' });
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        return res.status(500).json({ error: 'Could not connect to database' });;
                    });


            })
            .catch(error => {
                console.log(error);
                return res.status(500).json({ error: 'Could not connect to database' });;
            });


    },
    usersSeller: (req, res) => {
        shopping_bag.findAll({
            attributes: ['user_id', [sequelize.fn('sum', sequelize.col('total')), 'totales'],],
            group: ['user_id'],
            where: { status: 'cerrado' },
            raw: true,
            order: sequelize.literal('totales DESC'),
        })
        .then(users => {
            user.findByPk(users[0].user_id)
                .then(bestUser => {
                    user.findByPk(users[users.length-1].user_id)
                        .then(worstUser => {
                            res.status(200).json(
                                {
                                    meta: {
                                        url: req.originalUrl,
                                        status: 200,
                
                                    },
                                    data: {
                                        userBS: bestUser.full_name,
                                        userWS: worstUser.full_name
                                    }
                                })
                        })
                        .catch(error => {
                            console.log(error);
                            return res.status(500).json({ error: 'Could not connect to database' });;
                        });
                })
                .catch(error => {
                    console.log(error);
                    return res.status(500).json({ error: 'Could not connect to database' });;
                });
           

        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({ error: 'Could not connect to database' });;
        });
        
    }
}
