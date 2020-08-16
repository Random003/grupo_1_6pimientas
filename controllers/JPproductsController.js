// INSTALAR
const fs = require('fs');
// INSTALAR
const path = require('path');

// estos 3 nose de donde aparecieron solitos jajaj 
const { groupCollapsed } = require('console');
const { allowedNodeEnvironmentFlags } = require('process');
const { create } = require('domain');


let productsModel {
    filePath: path.join(__dirname, "../database/products-example.json"),

    readFile() {
        let fileContents = fs.readFileSync (this.filePath, "utf8");
        if (fileContents) {
            return JSON.parse(fileContents);
        }
        return [];
    },

    writeFile(contents) {
        let productsJson = JSON.stringify(products, null, " ");
            // para ver beio el archivo json cdo es enorme (null, " ")
            fs.writeFileSync(this.filePath, productsJson);
    },

    nextId() {
        let rows = this.readFile();
        let lastRow = rows.pop();

        if (lastRow) {
            return ++lastRow.id;
        }

        return 1;
    },

    all() {
        return this.readFile();
    },

    find(id) {
        let rows = this.readFile();
        return rows.find(row => row.id == id);
    },

    create(row) {
        let rows = this.readFile();
        row.id = this.nextId();
        rows.push(row);
        this.writeFile(rows);

        return row.id;
    }
}








module.exports = {
    product1 : (req, res) => {
        
        let product = groupsModel.find(req.params.id);

        res.render('productDetail1', {product});
    },
    product2:  (req, res) => {

        // ver si solo mandarlo al uno y q todo lo haga ahi o si va al segundo

        res.render('productDetail2');
    },

    store: (req, res) => {
        let product = {
            "name": req.body.name,
            "description": req.body.description,
            "variety":req.body.variety,
            "presentation": req.body.presentation,
            "performance": req.body.performance,
            "price": req.body.price,
            "image": null
        }

        productId = productsModel.create(product);

        res.redirect("/products/" + productId)
    }



    // poner en app.js 

    // para que funciones el envio de formularios
    app.use(express.urlencoded({ extended: false }));
    app.use(methodOverride('_method'));



    // ver de modificar el nombre de add.ejs a create.ejs o no en views


    // los nombres que aparecen en el let product del store el atributo name de cada campo que sera el mismo de cada uno de los que estan en ese del add.ejs VER ESTO DE MODIFICAR O QUE HACER  
    // let product = {
    //     "id": 0,
    //     "name": req.body.name,
    //     "description": req.body.description,
    //     "variety":req.body.variety,
    //     "presentation": req.body.presentation,
    //     "performance": req.body.performance,
    //     "price": req.body.price,
    //     "image": null
    // }


    // ver si es que modificamos el nombre de products example a products asi modifico los nombres aca 


    // ver si la carpeta database no deberia llamarse data y database deberia ser lo primero llamado en un archibo productsModel.js 


    // modularizar la primera parte o no agregando al final el 

    // module.exports = groupsModel;

    // const groupsModel = require("../database/groupsModel");

    // ver si se instala npm path y npm fileSystem

//   ----------------------------

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