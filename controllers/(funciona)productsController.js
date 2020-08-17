module.exports = {
    product1 : (req, res) => {
        res.render('productDetail1');
    },
    product2:  (req, res) => {
        res.render('productDetail2');
    },
    productCart:  (req, res) => {
        res.render('productCart');
    },
    promociones:  (req, res) => {
        res.render("promociones");
    },
    add:  (req, res) => {
        res.render("add");
    },
    edit:  (req, res) => {
        res.render("edit");
    }
}