
const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/productos", (req, res) => {
    res.sendFile(__dirname + "/views/productos.html");
});

app.get("/productos2", (req, res) => {
    res.sendFile(__dirname + "/views/productos2.html");
});

app.get("/bolsa", (req, res) => {
    res.sendFile(__dirname + "/views/bolsa_de_compras.html");
});

app.get("/promociones", (req, res) => {
    res.sendFile(__dirname + "/views/promociones.html");
});

// PARA VER MENU SACAR DESPUÉS

app.get("/menu", (req, res) => {
    res.sendFile(__dirname + "/views/menu.html");
});

app.get("*", (req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});


app.post("/", (req, res) => {
    // para que haga el JSON dejar este solamente
    // res.send(req.body);
    // para que mande directamente a la pagina principal dejar solo este
    res.sendFile(__dirname + "/views/index.html");
});


app.listen(5001, () => { console.log("Escuchando en el puerto 5001; recordá de colocar -npm run startdev- y después en el navegador -localhost/5001-.")})