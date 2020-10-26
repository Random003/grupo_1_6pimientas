var express = require('express');
var router = express.Router();

const path = require ('path');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/users'),
    filename: function (req, file, cb) {
      cb(null, 'user' + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
  
var upload = multer({ storage });



const userController = require ('../controllers/usersControllers');
const validateUsers = require ('../validators/users/users')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/login", userController.login);

router.post('/login', validateUsers.login, userController.authenticate)

router.get("/register", userController.register);
router.post("/register", upload.single('image'), validateUsers.register, validateUsers.checkEmail, validateUsers.checkPass, userController.createUser); //guardo usuarios nuevos tipos User NO ADMIN
// ,
//router.get("/add", userController.createAdmin);

router.get('/usersAdmin', userController.showAll);

router.post("/edit", validateUsers.editUser, validateUsers.checkEmailEdit, validateUsers.checkPassEdit, userController.editUser);
router.put('/edit', upload.single('image'), validateUsers.editUser, validateUsers.checkEmailEdit, validateUsers.checkPassEdit, userController.updateUser)

router.delete('/delete/:id', userController.delete)

router.get ('/logout', userController.logout);


module.exports = router;