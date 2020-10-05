CREATE DATABASE  IF NOT EXISTS `pimientas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */;
USE `pimientas`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: pimientas
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `detail_shopping_bag_products`
--

DROP TABLE IF EXISTS `detail_shopping_bag_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detail_shopping_bag_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `detail_shopping_bag_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_shopping_bag_products`
--

LOCK TABLES `detail_shopping_bag_products` WRITE;
/*!40000 ALTER TABLE `detail_shopping_bag_products` DISABLE KEYS */;
INSERT INTO `detail_shopping_bag_products` VALUES (204,228,4),(206,230,6),(211,235,4);
/*!40000 ALTER TABLE `detail_shopping_bag_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detail_shopping_bags`
--

DROP TABLE IF EXISTS `detail_shopping_bags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detail_shopping_bags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `shopping_bag_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variety_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `u_price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_shopping_bags`
--

LOCK TABLES `detail_shopping_bags` WRITE;
/*!40000 ALTER TABLE `detail_shopping_bags` DISABLE KEYS */;
INSERT INTO `detail_shopping_bags` VALUES (228,5,4,NULL,1,NULL),(230,4,6,NULL,1,NULL),(235,4,4,NULL,1,NULL);
/*!40000 ALTER TABLE `detail_shopping_bags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `presentation` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `performance` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sorrentinos         ','Pasta rellena de forma circular.','14 unidades','Rinde para 2 personas',350,'product-1601380420032.jpg'),(2,'Caseritoss  ','Pasta rellena de forma rectangular.','3 planchas','Rinde para 2 personas',330,'product-1601089622097.jpg'),(3,'Ravioles','Pasta rellena de forma cuadrada.','3 planchas','Rinde para 2 personas',260,'ravioles.jpg'),(4,'Fideos al huevo','Realizados con huevo.','Paquete de 500 grs.','Rinde para 2 personas',160,'fideos.jpg'),(5,'Fideos de espinaca ','Realizados con huevo.','Paquete de 500 grs.','Rinde para 2 personas',180,'fideos.jpg'),(6,'Ñoquis ','Realizados con papa de manera artesanal.','Bandeja de 500 grs.','Rinde para 2 personas',190,'product-1601088191782.jpg'),(7,'Salsas','Salsas listas para acompañar nuestras pastas.','Pote de 250 grs.','Rinde para 2 personas',160,'salsas.jpg'),(8,'Lasagnas','Lasagnas listas para calentar y servir','Bandeja de 250 grs.','Rinde para 1 personas',220,'lasagna.jpg'),(10,'Producto de Prueba','Descripción','16 unidades','2 personas',300,'product-1601089757187.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `discount` text COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'Caseritos','20 % OFF EN LA SEGUNDA UNIDAD!',595,'caseritos.jpg'),(2,'Ravioles','20 % OFF EN LA SEGUNDA UNIDAD!',445,'ravioles.jpg');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_bags`
--

DROP TABLE IF EXISTS `shopping_bags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_bags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date_purchase` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `delivery_type` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `delivery_address` varchar(250) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `way_to_pay` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `status` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `total` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_bags`
--

LOCK TABLES `shopping_bags` WRITE;
/*!40000 ALTER TABLE `shopping_bags` DISABLE KEYS */;
INSERT INTO `shopping_bags` VALUES (1,'2020-09-21 00:00:00',1,'retira en sucursal','','efectivo','cerrado',100),(4,'2020-10-03 16:15:57',1,NULL,NULL,'','abierto',NULL),(5,'2020-10-04 13:39:20',10,NULL,NULL,'','abierto',NULL);
/*!40000 ALTER TABLE `shopping_bags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tokens`
--

DROP TABLE IF EXISTS `user_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `token` varchar(250) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tokens`
--

LOCK TABLES `user_tokens` WRITE;
/*!40000 ALTER TABLE `user_tokens` DISABLE KEYS */;
INSERT INTO `user_tokens` VALUES (61,1,'Yr3Rigi5uHlxPJv2WQV22ZNtpKe8mm+A/SG2lb+sLCEpsCVBGjIkMAUpae0vEkQCNCw5RZBfj/KitKq7BSxK9g==');
/*!40000 ALTER TABLE `user_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucho','l@gmail.com','$2a$12$K4.CJ2wz6ZB5qX5wVgwwGeoprfCh1YlBKhQAjMJWzzZ72DDX9ANUK','Huarpes',2830,'1','Mendoza','Mendoza','user','user-1601088958088.png'),(2,'Luis Rufino','luis@gmail.com','$2a$12$h6S.39iBZZSRnbsDP4wa0u1K9415EtGIf75cn01Z46ZYAlkdPMEaO','Huarpes',2830,'1','Mendoza','Mendoza','admin','user-1601503651261.png'),(8,'Random','random@email.com','$2a$12$l0JG4Qn6oMTcv4zhT9OdhuHDH9zVt6CR1acZOXGNYUiLsjgZe/7fm','calle',321,'1','Departamento','Ciudad','admin','user_3.png'),(9,'Babart','babart@babart.com','$2a$12$ofa88oGISrRe4PLBKBuAeOsdFUg0H2hP8zQcy0G2u8u2TxfoJlhSG','LaCalle',123,'1','ese','Muchas','admin','user-1599802507754.jpg'),(10,'user','user@user.com','$2a$12$fDPCyLGuMPN3K5AcehAdguMVhVuGBQEnhzLCrxzlNgxVRmnZ7We1m','Calle ',1234,'1','Mendoza','Mendoza','user','user_1.png'),(11,'admin','admin@admin.com','$2a$12$CiHLD.JToU.qdhV7D3hF2eejf3XKdOMIsrcdiUjlYGWEho/SsvnmO','Calle ',1234,'1','Mendoza','Mendoza','admin','user_1.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varieties`
--

DROP TABLE IF EXISTS `varieties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `varieties` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (6,'Pollo Braseado',3),(7,'Cerdo Braseado',3),(8,'Ricota y nuez',3),(9,'Spaguetti',4),(10,'Tallarín',4),(11,'Pappardelle',4),(12,'Bolognesa',7),(13,'Fileto',7),(14,'Blanca',7),(15,'Carne',8),(33,'Agregado de Variedad',9),(34,'Agregado de variedad 3',9),(41,'Spaguetti',5),(42,'Pappardelle',5),(64,'Var 1',13),(65,'Var 2',13),(68,'Carne Braseada',2),(69,'Verdura',2),(82,'Jamón y Queso',10),(83,'Palta y tomates',10),(84,'Jamón y Muzarella',1),(85,'Calabaza y Muz',1),(86,'Quatro Quesos',1),(87,'Palta y tomate',1);
/*!40000 ALTER TABLE `varieties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pimientas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-04 22:47:43
