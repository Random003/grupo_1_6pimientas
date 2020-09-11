const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const indexModel = jsonTable('index');

module.exports = {
    
    home1: (req, res) => {
        //let indexModel = indexModel.all();
        res.render('./home/home1')
    },

}

