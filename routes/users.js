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
router.post("/", validateUsers.register, validateUsers.checkEmail, validateUsers.checkPass, userController.createUser); //guardo usuarios nuevos tipos User NO ADMIN
// ,
router.get("/add", userController.createAdmin);

router.get("/edit/:id", userController.editUser);
router.put('/edit/:id',validateUsers.editUser, validateUsers.checkEmailEdit, validateUsers.checkPassEdit, userController.updateUser)

router.get ('/logout', userController.logout);

module.exports = router;
