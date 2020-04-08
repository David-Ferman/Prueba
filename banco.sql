-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-04-2020 a las 00:49:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envios`
--

CREATE TABLE `envios` (
  `id` int(11) NOT NULL,
  `fromAccount` varchar(255) DEFAULT NULL,
  `toAccount` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `envios`
--

INSERT INTO `envios` (`id`, `fromAccount`, `toAccount`, `amount`) VALUES
(1, '749303', '1749234', '100'),
(2, '749303', '1749234', '100'),
(3, '84927494', '1749234', '1000'),
(4, '84927494', '1749234', '1000'),
(5, '84927494', '1749234', '3000'),
(6, '84927494', '1749234', '7000'),
(7, '84927494', '1749234', '3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `saldocuenta`
--

CREATE TABLE `saldocuenta` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `cuenta` varchar(255) DEFAULT NULL,
  `saldo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `saldocuenta`
--

INSERT INTO `saldocuenta` (`id`, `usuario`, `cuenta`, `saldo`) VALUES
(1, 'Ferman', '749303', '$3042'),
(2, 'Pablo', '1749234', '$14941'),
(3, 'Paco', '7930284', '$55373'),
(4, 'Pedro Mendoza', '84927494', '$57'),
(5, 'Martin', '2949475', '$8000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `envios`
--
ALTER TABLE `envios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `saldocuenta`
--
ALTER TABLE `saldocuenta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `envios`
--
ALTER TABLE `envios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `saldocuenta`
--
ALTER TABLE `saldocuenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
