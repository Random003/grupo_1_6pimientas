const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const indexModel = jsonTable('index');

module.exports = {
    
    home1: (req, res) => {
        //let indexModel = indexModel.all();
        res.render('home1')
    },
    // indexPop: (req, res, next) => {
    //     // para que haga el JSON dejar este solamente
    //     // res.send(req.body);
    //     // para que mande directamente a la pagina principal dejar solo este
    //     res.render('index');
    //   },
    home2: (req, res) => {
        
        res.render('home2')
    },

}

