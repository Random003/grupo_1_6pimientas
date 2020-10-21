const { user } = require ('../../database/models');
const { Op } = require("sequelize")

 
 module.exports = {
     usersAll: (req, res) => {

         if(req.params.id) {
             user.findByPk (req.params.id )
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

         user.findAll({ order: ['id'] })
         .then (users => {
             if (users) {
                 res.status(200).json(
                     {
                         meta: {
                             url: req.originalUrl,
                             status: 200,
                             count: users.length
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
             return res.status(500).json( { error: 'Could not connect to database' } );
         })
     }


 }

//  podriamos poner los nombres en castellano