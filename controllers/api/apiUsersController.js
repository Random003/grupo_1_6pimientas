const { product } = require ('../../database/models');
 const { Op } = require("sequelize")

 module.exports = {
     usersAll: (req, res) => {

         if(req.params.id) {
             users.findByPk (req.params.id )
             .then (users => {
                 if (users) {
                     res.status(200).json(
                         {
                             meta: {
                                 url: req.originalUrl,
                                 status: 200,
                                 count: 1 

                             },
                             data: users
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

         user.findAndCountAll({ order: ['id'] })
         .then (users => {
             if (users) {
                 res.status(200).json(
                     {
                         meta: {
                             url: req.originalUrl,
                             status: 200,
                             count: users.count 
                         },
                         data: users.rows
                     }    
                 );

             } else {
                 res.status(400).json( {error: 'No results found'} );
             }
         })
         .catch(error => {
             console.log(error);
             return res.status(500).json( { error: 'Could not connect to database' } );
         })
     }


 }

//  podriamos poner los nombres en castellano