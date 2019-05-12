-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 12 2019 г., 22:59
-- Версия сервера: 5.6.43
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `gallery`
--

-- --------------------------------------------------------

--
-- Структура таблицы `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `address` varchar(128) COLLATE utf8_bin NOT NULL,
  `size` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8_bin NOT NULL,
  `count_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `image`
--

INSERT INTO `image` (`id`, `address`, `size`, `name`, `count_id`) VALUES
(1, 'images/1arcticDesert.jpg', 215, '1arcticDesert', 0),
(2, 'images/2tundra.jpg', 215, '2tundra', 0),
(3, 'images/3lesotundra.jpg', 278, '3lesotundra', 0),
(4, 'images/4taiga.jpg', 275, '4taiga', 0),
(5, 'images/5les.jpg', 236, '5les', 0),
(6, 'images/6step.jpg', 252, '6step', 80),
(7, 'images/7desert.jpg', 826, '7desert', 0),
(8, 'images/8savanna.jpg', 222, '8savanna', 20),
(9, 'images/9ekvatorLes.jpg', 250, '9ekvatorLes', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
