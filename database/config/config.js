module.exports = {

  "development": {
    "username": "root",
    "password": null,
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

//Hay que ver si es que los datos estan bien, estan segun lo que hicimos esta tarde pero workbench hace lo que quiere aveces jajajaj
