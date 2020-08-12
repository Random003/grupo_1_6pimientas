const fs = require('fs'); 

function logDBMiddleware (req, res, next) {


    next();
}



module.exports= logDBMiddleware; 