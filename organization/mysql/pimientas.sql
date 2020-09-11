-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: pimientas
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_520_ci,
  `variety` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `presentation` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `performance` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `price` varchar(45) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Sorrentinos','Pasta rellena de forma circular.','','14 unidades','Rinde para 2 personas','100','sorrentinos1.jpg'),(2,'Caseritos','Pasta rellena de forma rectangular.','','3 planchas','Rinde para 2 personas','330','caseritos.jpg'),(3,'Ravioles','Pasta rellena de forma cuadrada.','','3 planchas','Rinde para 2 personas','260','ravioles.jpg'),(4,'Fideos al huevo','Realizados con huevo.','','Paquete de 500 grs.','Rinde para 2 personas','160','fideos.jpg'),(5,'Fideos de espinaca','Realizados con huevo.','','Paquete de 500 grs.','Rinde para 2 personas','180','fideos.jpg'),(6,'Ñoquis','Realizados con papa de manera artesanal.','','Bandeja de 500 grs.','Rinde para 2 personas','190','noquis.jpg'),(7,'Salsas','Salsas listas para acompañar nuestras pastas.','','Pote de 250 grs.','Rinde para 2 personas','160','salsas.jpg'),(8,'Lasagnas','Lasagnas listas para calentar y servir','','Bandeja de 250 grs.','Rinde para 1 personas','220','lasagna.jpg'),(9,'Prueba sin foto','descripción del producto ','','Bandeja de x grs.','Rinde para 1 persona','100','default.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_variety`
--

DROP TABLE IF EXISTS `products_variety`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_variety` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `products.variety` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `variety.products` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_variety`
--

LOCK TABLES `products_variety` WRITE;
/*!40000 ALTER TABLE `products_variety` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_variety` ENABLE KEYS */;
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
  `discount` text COLLATE utf8mb4_unicode_520_ci,
  `price` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'Caseritos','20 % OFF EN LA SEGUNDA UNIDAD!','595','caseritos.jpg'),(2,'Ravioles','20 % OFF EN LA SEGUNDA UNIDAD!','445','ravioles.jpg');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `street` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `number` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `floor` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `department` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variety`
--

DROP TABLE IF EXISTS `variety`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variety` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variety`
--

LOCK TABLES `variety` WRITE;
/*!40000 ALTER TABLE `variety` DISABLE KEYS */;
INSERT INTO `variety` VALUES (1,'Jamón y Muzarella'),(2,'Calabaza y Muzarella'),(3,'Quatro Quesos'),(4,'Carne Braseada'),(5,'Verdura'),(6,'Pollo Braseado'),(7,'Cerdo Braseado'),(8,'Ricota y nuez'),(9,'Spaguetti'),(10,'Tallarín'),(11,'Pappardelle'),(12,'Bolognesa'),(13,'Fileto'),(14,'Blanca'),(15,'Carne');
/*!40000 ALTER TABLE `variety` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-11  3:28:24
