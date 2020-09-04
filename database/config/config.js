module.exports = {

  "development": {
    "username": "root",
    "password": null,
    "database": "pimientas",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      // "timestamps": false,
      // "undescored" : true
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

//esta todo configurado para poder cargar nuestros datos en nuestra base de datos, que redundante cuack!
