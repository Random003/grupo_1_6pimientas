var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/", (req, res) => {
  // para que haga el JSON dejar este solamente
  // res.send(req.body);
  // para que mande directamente a la pagina principal dejar solo este
  res.render('index');
});


module.exports = router;
