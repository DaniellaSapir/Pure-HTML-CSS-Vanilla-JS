-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 09, 2020 at 08:36 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `workiz`
--
CREATE DATABASE IF NOT EXISTS `workiz` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `workiz`;

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
CREATE TABLE IF NOT EXISTS `leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `workshop` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` VALUES(1, 'daniella.sapir@gmail.com', 'Daniella Sapir', '0547558425', '', NULL);
INSERT INTO `leads` VALUES(2, 'daniella.sapir@gmail.com', 'Daniella Sapir', '0547558425', '', '2020-10-04');
INSERT INTO `leads` VALUES(3, 'blabla@bla.com', 'Handy Andy', '4524643475', '', '2020-04-05');
COMMIT;
