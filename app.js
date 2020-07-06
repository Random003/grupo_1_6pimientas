const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(4005, () => { console.log("Funciona, puerto 4005")})