CREATE DATABASE  IF NOT EXISTS `pimientas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */;
USE `pimientas`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
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
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_shopping_bag_products`
--

LOCK TABLES `detail_shopping_bag_products` WRITE;
/*!40000 ALTER TABLE `detail_shopping_bag_products` DISABLE KEYS */;
INSERT INTO `detail_shopping_bag_products` VALUES (204,228,4),(218,242,2),(219,243,2),(221,245,1),(222,246,2),(223,247,2),(224,248,2),(225,249,2),(226,250,2),(227,251,3),(228,252,3),(229,253,3),(230,254,3),(231,255,3),(232,256,3),(233,257,2),(234,258,3),(235,259,5),(236,260,14),(237,261,4),(238,262,2),(239,263,2),(240,264,3),(241,265,2),(242,266,5),(244,268,3),(245,269,3),(246,270,3),(247,271,3),(248,272,3),(249,273,3),(250,274,4),(251,275,4),(252,276,2),(253,277,7),(254,278,7),(255,279,7),(256,280,4),(257,281,5),(258,282,5),(259,283,5),(260,284,2),(261,285,2),(262,286,3),(263,287,7),(264,288,7),(265,289,7),(266,290,7),(267,291,2),(268,292,2),(269,293,3),(270,294,2),(271,295,4),(272,296,4),(273,297,4),(274,298,4),(275,299,2),(276,300,1),(277,301,3),(278,302,1),(279,303,3),(280,304,2),(281,305,3),(286,310,3),(290,314,3),(291,315,3),(293,317,3),(294,318,3),(296,320,3),(297,321,3),(298,322,3),(299,323,4),(300,324,4),(301,325,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=326 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detail_shopping_bags`
--

LOCK TABLES `detail_shopping_bags` WRITE;
/*!40000 ALTER TABLE `detail_shopping_bags` DISABLE KEYS */;
INSERT INTO `detail_shopping_bags` VALUES (228,5,4,NULL,10,NULL),(242,4,2,NULL,1,NULL),(243,4,2,NULL,1,NULL),(245,6,1,NULL,1,NULL),(246,7,2,NULL,1,NULL),(247,8,2,NULL,1,NULL),(248,10,2,NULL,1,NULL),(249,10,2,NULL,1,NULL),(250,11,2,NULL,1,NULL),(251,12,3,NULL,1,NULL),(252,12,3,NULL,1,NULL),(253,13,3,NULL,1,NULL),(254,23,3,NULL,1,NULL),(255,24,3,NULL,1,NULL),(256,24,3,NULL,1,NULL),(257,25,2,NULL,1,NULL),(258,25,3,NULL,1,NULL),(259,26,5,NULL,1,NULL),(260,27,14,NULL,1,NULL),(261,28,4,NULL,1,NULL),(262,29,2,NULL,1,NULL),(263,30,2,NULL,1,NULL),(264,30,3,NULL,1,NULL),(265,31,2,NULL,1,NULL),(266,32,5,NULL,1,NULL),(268,33,3,NULL,1,NULL),(269,33,3,NULL,1,NULL),(270,33,3,NULL,1,NULL),(271,34,3,NULL,1,NULL),(272,34,3,NULL,1,NULL),(273,34,3,NULL,1,NULL),(274,34,4,NULL,1,NULL),(275,34,4,NULL,1,NULL),(276,35,2,NULL,1,NULL),(277,36,7,NULL,1,NULL),(278,36,7,NULL,1,NULL),(279,36,7,NULL,1,NULL),(280,37,4,NULL,1,NULL),(281,37,5,NULL,1,NULL),(282,37,5,NULL,1,NULL),(283,37,5,NULL,1,NULL),(284,38,2,NULL,1,NULL),(285,38,2,NULL,1,NULL),(286,39,3,NULL,1,NULL),(287,39,7,NULL,1,NULL),(288,39,7,NULL,1,NULL),(289,39,7,NULL,1,NULL),(290,39,7,NULL,1,NULL),(291,40,2,NULL,1,NULL),(292,41,2,NULL,1,NULL),(293,41,3,NULL,1,NULL),(294,42,2,NULL,1,NULL),(295,42,4,NULL,1,NULL),(296,43,4,NULL,1,NULL),(297,44,4,NULL,1,NULL),(298,44,4,NULL,1,NULL),(299,5,2,NULL,1,NULL),(300,45,1,NULL,1,NULL),(301,46,3,NULL,1,NULL),(302,47,1,NULL,1,NULL),(303,44,3,NULL,1,NULL),(304,48,2,NULL,1,NULL),(305,49,3,NULL,1,NULL),(310,49,3,NULL,1,NULL),(314,49,3,NULL,1,NULL),(315,49,3,NULL,1,NULL),(317,49,3,NULL,1,NULL),(318,49,3,NULL,1,NULL),(320,50,3,NULL,1,NULL),(321,50,3,NULL,1,NULL),(322,51,3,NULL,1,NULL),(323,52,4,NULL,1,NULL),(324,52,4,NULL,1,NULL),(325,53,1,NULL,1,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,' Sorrentinos','Pasta rellena de forma circular.','14 unidades','Rinde para 2 personas',350,'product-1603403789264.jpg'),(2,'Caseritoss  ','Pasta rellena de forma rectangular.','3 planchas','Rinde para 2 personas',330,'product-1601089622097.jpg'),(3,'Ravioles','Pasta rellena de forma cuadrada.','3 planchas','Rinde para 2 personas',260,'ravioles.jpg'),(4,'Fideos al huevo','Realizados con huevo.','Paquete de 500 grs.','Rinde para 2 personas',160,'fideos.jpg'),(5,'Fideos de espinaca ','Realizados con huevo.','Paquete de 500 grs.','Rinde para 2 personas',180,'fideos.jpg'),(6,'Ñoquis ','Realizados con papa de manera artesanal.','Bandeja de 500 grs.','Rinde para 2 personas',190,'product-1601088191782.jpg'),(7,'Salsas','Salsas listas para acompañar nuestras pastas.','Pote de 250 grs.','Rinde para 2 personas',160,'salsas.jpg'),(8,'Lasagnas','Lasagnas listas para calentar y servir','Bandeja de 250 grs.','Rinde para 1 personas',220,'lasagna.jpg'),(10,'Ultimo producto','Descripción de producto de prueba ','16 unidades','2 personas',300,'product-1601089757187.jpg'),(14,'Ñoquis de espinaca ','Nóquis de espinaca realizados de manera artesanal, 100% papa!','Bandeja de 500 grs','Para 2 personas',200,'product-1603294355836.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'Caseritos','20 % OFF EN LA SEGUNDA UNIDAD!',595,'sales-1603483657796.jpg'),(2,'RAvioels','',445,'sales-1603483667383.jpg'),(22,'Promocion de prueba','asdasd',5002,'sales-1603484547609.jpg'),(24,'sdfsdfsdf','sfdfsdfsd',33,'sales-1603488767991.jpg'),(25,'Cambio de imagen','asdasdas',1,'sales-1603486970336.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_bags`
--

LOCK TABLES `shopping_bags` WRITE;
/*!40000 ALTER TABLE `shopping_bags` DISABLE KEYS */;
INSERT INTO `shopping_bags` VALUES (1,'2020-09-21 00:00:00',1,'retira en sucursal','fábrica','efectivo','cerrado',100),(4,'2020-10-24 00:05:08',1,'retira en sucursal','fábrica','efectivo','cerrado',660),(5,'2020-10-26 04:27:00',10,'retira en sucursal','fábrica','efectivo','cerrado',2120),(6,'2020-10-24 00:09:23',1,'retira en sucursal','fábrica','efectivo','cerrado',350),(7,'2020-10-24 00:10:40',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(8,'2020-10-24 00:11:07',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(10,'2020-10-24 00:35:47',1,'retira en sucursal','fábrica','efectivo','cerrado',660),(12,'2020-10-24 00:46:30',1,'retira en sucursal','fábrica','efectivo','cerrado',520),(13,'2020-10-24 01:42:13',1,'retira en sucursal','fábrica','efectivo','cerrado',260),(23,'2020-10-24 02:47:51',1,'retira en sucursal','fábrica','efectivo','cerrado',260),(24,'2020-10-24 02:51:23',1,'retira en sucursal','fábrica','efectivo','cerrado',520),(25,'2020-10-24 02:51:39',1,'retira en sucursal','fábrica','efectivo','cerrado',590),(26,'2020-10-24 02:51:48',1,'retira en sucursal','fábrica','efectivo','cerrado',900),(27,'2020-10-24 02:51:56',1,'retira en sucursal','fábrica','efectivo','cerrado',200),(28,'2020-10-25 15:29:22',1,'retira en sucursal','fábrica','efectivo','cerrado',320),(29,'2020-10-25 22:39:52',1,'retira en sucursal','fábrica','efectivo','cerrado',1320),(30,'2020-10-25 22:48:57',1,'retira en sucursal','fábrica','efectivo','cerrado',1630),(31,'2020-10-25 22:51:59',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(32,'2020-10-25 22:55:07',1,'retira en sucursal','fábrica','efectivo','cerrado',1800),(33,'2020-10-26 00:40:54',1,'retira en sucursal','fábrica','efectivo','cerrado',1560),(34,'2020-10-26 00:52:33',1,'retira en sucursal','fábrica','efectivo','cerrado',1100),(35,'2020-10-26 00:59:11',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(36,'2020-10-26 01:15:44',1,'retira en sucursal','fábrica','efectivo','cerrado',0),(37,'2020-10-26 01:17:29',1,'retira en sucursal','fábrica','efectivo','cerrado',0),(38,'2020-10-26 01:21:03',1,'retira en sucursal','fábrica','efectivo','cerrado',660),(39,'2020-10-26 01:48:45',1,'retira en sucursal','fábrica','efectivo','cerrado',2280),(40,'2020-10-26 01:50:28',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(41,'2020-10-26 01:52:25',1,'retira en sucursal','fábrica','efectivo','cerrado',590),(42,'2020-10-26 01:53:18',1,'retira en sucursal','fábrica','efectivo','cerrado',490),(43,'2020-10-26 01:53:42',1,'retira en sucursal','fábrica','efectivo','cerrado',160),(44,'2020-10-26 05:09:07',1,'retira en sucursal','fábrica','efectivo','cerrado',580),(45,'2020-10-26 04:28:23',12,'retira en sucursal','fábrica','efectivo','cerrado',5250),(46,'2020-10-26 04:31:23',12,'retira en sucursal','fábrica','efectivo','cerrado',12740),(47,'2020-10-26 04:31:52',12,'retira en sucursal','fábrica','efectivo','cerrado',3850),(48,'2020-10-26 05:09:54',1,'retira en sucursal','fábrica','efectivo','cerrado',330),(49,'2020-10-27 01:10:25',1,'retira en sucursal','fábrica','efectivo','cerrado',1560),(50,'2020-10-27 01:12:59',1,'retira en sucursal','fábrica','efectivo','cerrado',520),(51,'2020-10-27 01:13:04',1,'retira en sucursal','fábrica','efectivo','cerrado',260),(52,'2020-10-27 01:16:29',1,'retira en sucursal','fábrica','efectivo','cerrado',320),(53,'2020-10-27 01:19:05',1,NULL,NULL,'','abierto',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tokens`
--

LOCK TABLES `user_tokens` WRITE;
/*!40000 ALTER TABLE `user_tokens` DISABLE KEYS */;
INSERT INTO `user_tokens` VALUES (71,1,'1KugT4GcfZeDjT2OfZvsOXPNRVN+X78WHVY9peVl2LMMAJ+1Sx1N0VDDIC46ZKU3nyEeaOJ8UMfrrBmmK6pPBw==');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucho','l@gmail.com','$2a$12$N9niEosX8puUQEkksUGxrOl8q9N5Fl1TbbXEI6q5Zeztz4reXL0Zy','Huarpes',2830,'1','Mendoza','Mendoza','user','user-1603688921476.png'),(2,'Luis Rufino','luis@gmail.com','$2a$12$CaB/2Vgbe0jZbY.zN6HoEeaokrO06I/v6ER/YeHzCaEtYO8KgHHou','Huarpes',2830,'1','Mendoza','Mendoza','admin','user-1603288401907.jpg'),(8,'Random','random@email.com','$2a$12$l0JG4Qn6oMTcv4zhT9OdhuHDH9zVt6CR1acZOXGNYUiLsjgZe/7fm','calle',321,'1','Departamento','Ciudad','admin','user_3.png'),(9,'Babart','babart@babart.com','$2a$12$ofa88oGISrRe4PLBKBuAeOsdFUg0H2hP8zQcy0G2u8u2TxfoJlhSG','LaCalle',123,'1','ese','Muchas','admin','user-1599802507754.jpg'),(10,'user','user@user.com','$2a$12$fDPCyLGuMPN3K5AcehAdguMVhVuGBQEnhzLCrxzlNgxVRmnZ7We1m','Calle ',1234,'1','Mendoza','Mendoza','user','user_1.png'),(11,'admin','admin@admin.com','$2a$12$CiHLD.JToU.qdhV7D3hF2eejf3XKdOMIsrcdiUjlYGWEho/SsvnmO','Calle ',1234,'1','Mendoza','Mendoza','admin','user_1.png'),(12,'Martín Perez','prueba@prueba.com','$2a$12$DVUuJI8Y70SGF.U.RcC79OFwB6A8Dl5K8PQmm7x.0BvwkUxg6u1Iq','asasas',1,'','','','user','default.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varieties`
--

LOCK TABLES `varieties` WRITE;
/*!40000 ALTER TABLE `varieties` DISABLE KEYS */;
INSERT INTO `varieties` VALUES (6,'Pollo Braseado',3),(7,'Cerdo Braseado',3),(8,'Ricota y nuez',3),(9,'Spaguetti',4),(10,'Tallarín',4),(11,'Pappardelle',4),(12,'Bolognesa',7),(13,'Fileto',7),(14,'Blanca',7),(15,'Carne',8),(33,'Agregado de Variedad',9),(34,'Agregado de variedad 3',9),(41,'Spaguetti',5),(42,'Pappardelle',5),(64,'Var 1',13),(65,'Var 2',13),(68,'Carne Braseada',2),(69,'Verdura',2),(88,'Jamón y Queso',10),(89,'Palta y tomates',10),(93,'Variedad Espinaca',14),(94,'Papa',14),(95,'Morrones',14),(119,'Jamón y Muzarella',1),(120,'Calabaza y Muz',1),(121,'Quatro Quesos',1),(122,'Palta y tomate',1);
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

-- Dump completed on 2020-10-26 22:38:28
