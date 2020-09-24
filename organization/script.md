# **Grupo 1 "Seis Pimientas"**

## **Para Sprint 6**

### SCRIPT DE CREACIÓN DE ESTRUCTURA DE BASE DE DATOS:

CREATE DATABASE  IF NOT EXISTS `pimientas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */;
USE `pimientas`;


### CREACIÓN DE LA BASE DE DATOS Y DE TODAS LAS TABLAS - 

CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `presentation` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `performance` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


---

CREATE TABLE `varieties` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


---

CREATE TABLE `sales` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `discount` text COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


---

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `street` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `floor` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `department` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

---

CREATE TABLE `user_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `token` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

---

CREATE TABLE `shopping_bags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date_purchase` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `delivery_type` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `delivery_address` varchar(250) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `way_to_pay` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `status` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `total` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

---

CREATE TABLE `detail_shopping_bags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shopping_bag_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variety_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `u_price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

---

### TABLA DE USUARIOS: 

insert INTO users (id, name, email, password, street, number, floor, department, city, category, image) VALUES (10,'user','user@user.com','$2a$12$fDPCyLGuMPN3K5AcehAdguMVhVuGBQEnhzLCrxzlNgxVRmnZ7We1m','Calle ',1234,'1','Mendoza','Mendoza','user','user_1.png'),(11,'admin','admin@admin.com','$2a$12$CiHLD.JToU.qdhV7D3hF2eejf3XKdOMIsrcdiUjlYGWEho/SsvnmO','Calle ',1234,'1','Mendoza','Mendoza','admin','user_1.png');

---


### TABLA DE PRODUCTOS:

insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (1, "Sorrentinos", "Pasta rellena de forma circular.", "14 unidades", "Rinde para 2 personas", "Jamón y Muzarella" "Calabaza y Muzarella" "Quatro Quesos", 100, "sorrentinos1.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (2, "Caseritos", "Pasta rellena de forma rectangular.", "3 planchas", "Rinde para 2 personas", "Carne Braseada" "Verdura", 330, "caseritos.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (3, "Ravioles", "Pasta rellena de forma cuadrada.", "3 planchas", "Rinde para 2 personas", "Pollo Braseado" "Cerdo Braseado" "Ricota y nuez", 260, "ravioles.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (4, "Fideos al huevo", "Realizados con huevo.", "Paquete de 500 grs.", "Rinde para 2 personas", "Spaguetti" "Tallarín" "Pappardelle", 160, "fideos.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (5, "Fideos de espinaca", "Realizados con huevo.", "Paquete de 500 grs.", "Rinde para 2 personas", "Spaguetti" "Tallarín" "Pappardelle", 180, "fideos.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (6, "Ñoquis", "Realizados con papa de manera artesanal.", "Bandeja de 500 grs.", "Rinde para 2 personas", " ", 190, "noquis.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (7, "Salsas", "Salsas listas para acompañar nuestras pastas.", "Pote de 250 grs.", "Rinde para 2 personas", "Bolognesa" "Fileto" "Blanca", 160, "salsas.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (8, "Lasagnas", "Lasagnas listas para calentar y servir", "Bandeja de 250 grs.", "Rinde para 1 personas", "Carne" "Verdura", 220, "lasagna.jpg");
insert INTO products (id, name, description, presentation, performance, variety, price, image) VALUES (9, "Prueba sin foto", "descripción del producto ", "Bandeja de x grs.", "Rinde para 1 persona", "variedad 1" "variedad 2", 100, "default.png")

---


### TABLAS SECUNDARIAS - 

### VARIETIES:

INSERT INTO `varieties` VALUES (1,'Jamón y Muzarella'),(2,'Calabaza y Muzarella'),(3,'Quatro Quesos'),(4,'Carne Braseada'),(5,'Verdura'),(6,'Pollo Braseado'),(7,'Cerdo Braseado'),(8,'Ricota y nuez'),(9,'Spaguetti'),(10,'Tallarín'),(11,'Pappardelle'),(12,'Bolognesa'),(13,'Fileto'),(14,'Blanca'),(15,'Carne')



### SALES:

insert INTO sales (id, name, description, price, image) VALUES (1, "Caseritos", "20 % OFF EN LA SEGUNDA UNIDAD!", 595, "caseritos.jpg");
insert INTO sales (id, name, description, price, image) VALUES (2, "Ravioles", "20 % OFF EN LA SEGUNDA UNIDAD!", 445, "ravioles.jpg")

### SHOPPING_BAGS:

INSERT INTO `shopping_bags` VALUES (1,'2020-09-21 00:00:00',1,'retira en sucursal','','efectivo','cerrado',100);


### DETAIL_SHOPPING_BAGS:

INSERT INTO `detail_shopping_bags` VALUES (1,1,1,1,1,100);

