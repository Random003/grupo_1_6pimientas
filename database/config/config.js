module.exports = {

  "development": {
    "username": "root",
    "password": null,
    // para funcionamiento con password determinado (colocar password en linea siguiente)
    // "password": "root",
    "database": "pimientas",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "timestamps": false,
      "undescored" : true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}