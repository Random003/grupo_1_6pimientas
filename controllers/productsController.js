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

        let idPromociones = req.params.idPromociones; 

        let promociones = [
            {
                "id": "1",
                "name": "Caseritos",
                "description": "20 % OFF EN LA SEGUNDA UNIDAD!",
                "price": 595,
                "image": null
            },
            {
                "id": "2",
                "name": "Ravioles",
                "description": "20 % OFF EN LA SEGUNDA UNIDAD!",
                "price": 445,
                "image": null
            }
           
        ]

        let promocionesToEdit = promociones.[idPromociones];

        // res.render('promocionesToEdit', (aca habría que hacer las vista ejs de productos y ahí modificar), {promocionesToEdit: promocionesToEdit});
        res.render('idPromociones'); 
        
        res.render("promociones");
    },
    add:  (req, res) => {
        res.render("add");
    },
    edit:  (req, res) => {

        let idProduct = req.params.idProduct; 

        let products = [
            {
                "id": "1",
                "name": "Sorrentino",
                "description": "Pasta rellena de forma circular.",
                "variety":["Jamón y Muzarella", "Calabaza y Muzarella", "Quatro Quesos"],
                "presentation": "14 unidades",
                "performance": "rinde para 2 personas",
                "price": 350,
                "image": null
            },
            {
                "id": "2",
                "name": "Caseritos",
                "description": "Pasta rellena de forma rectangular.",
                "variety":["Carne Braseada", "Verdura"],
                "presentation": "3 planchas",
                "performance": "rinde para 2 personas",
                "price": 330,
                "image": null
            },
            {
                "id": "3",
                "name": "Ravioles",
                "description": "Pasta rellena de forma cuadrada.",
                "variety":["Pollo Braseado", "Cerdo Braseado", "Ricota y nuez"],
                "presentation": "3 planchas",
                "performance": "rinde para 2 personas",
                "price": 260,
                "image": null
            },
            {
                "id": "4",
                "name": "Fideos al huevo",
                "description": "Realizados con huevo.",
                "variety":["Spaguetti", "Tallarín", "Pappardelle"],
                "presentation": "Paquete de 500 grs.",
                "performance": "rinde para 2 personas",
                "price": 160,
                "image": null
            },
            {
                "id": "5",
                "name": "Fideos de espinaca",
                "description": "Realizados con huevo.",
                "variety":["Spaguetti", "Tallarín", "Pappardelle"],
                "presentation": "Paquete de 500 grs.",
                "performance": "rinde para 2 personas",
                "price": 180,
                "image": null
            },
            {
                "id": "6",
                "name": "Ñoquis",
                "description": "Realizados con papa de manera artesanal.",
                "variety": null,
                "presentation": "Bandeja de 500 grs.",
                "performance": "rinde para 2 personas",
                "price": 190,
                "image": null
            },
            {
                "id": "7",
                "name": "Salsas",
                "description": "Salsas listas para acompañar nuestras pastas.",
                "variety": ["Bolognesa", "Fileto", "Blanca"],
                "presentation": "Pote de 250 grs.",
                "performance": "rinde para 2 personas",
                "price": 160,
                "image": null
            },
            {
                "id": "8",
                "name": "Lasagnas",
                "description": "Lasagnas listas para calentar y servir",
                "variety": ["Carne", "Verdura"],
                "presentation": "Bandeja de 250 grs.",
                "performance": "rinde para 1 personas",
                "price": 220,
                "image": null
            }
        ];

        let productsToEdit = products.[idProduct];

       // res.render(productsToEdit (aca habría que hacer las vista ejs de productos y ahí modificar), {productsToEdit: productsToEdit});

        res.render(idProduct);
    }
}