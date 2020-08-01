module.exports = {
    index: (req, res, next) => {
        res.render('index');
    },
    indexPop: (req, res, next) => {
        // para que haga el JSON dejar este solamente
        // res.send(req.body);
        // para que mande directamente a la pagina principal dejar solo este
        res.render('index');
      }
}