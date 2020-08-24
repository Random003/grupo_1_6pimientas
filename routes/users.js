var express = require('express');
var router = express.Router();
const userController = require ('../controllers/usersControllers');
const validateUsers = require ('../validators/users')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/login", userController.login);

router.post('/login', validateUsers.login, userController.authenticate)

router.get("/register", userController.register);

router.get("/add", userController.createAdmin);
//router.post("/", userController.userAdmin); para guardar

router.get("/", userController.createAdmin);

router.get("/edit", userController.editAdmin);

module.exports = router;
