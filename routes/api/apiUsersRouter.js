const express = require('express');
 const router = express.Router();
 const apiUsersController = require('../../controllers/api/apiUsersController');





 router.get("/", (req, res) =>{ res.redirect('/')}); 

 router.post("/", apiUsersController.usersAll); 

 router.post("/:id", apiUsersController.usersAll); 


 module.exports = router; 