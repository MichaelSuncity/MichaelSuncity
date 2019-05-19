-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 19 2019 г., 23:58
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
-- База данных: `lesson6`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `author` varchar(128) COLLATE utf8_bin NOT NULL,
  `comment` varchar(3000) COLLATE utf8_bin NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(128) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `author`, `comment`, `time`, `image`) VALUES
(1, 'Алексей', ' fdsfsd fdsf ыва ываы ваыва sfsd dsf ыва выа ыва ыва ываы fsd fsdf ывав ыа', '2019-05-19 19:45:52', 'images/4taiga.jpg'),
(2, 'Владимир', 'праврпвпрврпловрао hgkjdhfkj hgjdfjghdfjh плорвлорло прваолр плорлов лорвалопло влоапловалопрлова khdkfhgdhs jslkfjklsdj fjskdjf hdsghfjsdhgjhsdkhf ksdhghdsk ghkjshdgkjhdskjghkjdsh', '2019-05-19 22:06:39', 'images/2tundra.jpg'),
(3, 'Татьяна', 'аыоаоывоа лывпва оплваопо воапоаовп ооывапо овыаповаоыпо ылофало лылвао sfsjfkjsdkfjasfd', '2019-05-19 22:07:07', 'images/1arcticDesert.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
