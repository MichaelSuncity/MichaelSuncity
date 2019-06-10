<?php
$br = '<br>';
/* Задание №1
Объявить две целочисленные переменные $a и $b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
a. Если $a и $b положительные, вывести их разность.
b. Если $а и $b отрицательные, вывести их произведение.
c. Если $а и $b разных знаков, вывести их сумму.
Ноль можно считать положительным числом.*/
echo "Задание № 1 {$br}";
$a = 15;
$b = 5;
echo "число а = {$a} {$br}";
echo "число b = {$b} {$br}";
if ($a >= 0 && $b >= 0) {
    echo "разность чисел {$a} и {$b} равна " . ($a - $b) . "{$br} {$br}";
} elseif ($a < 0 && $b < 0) {
    echo "произведение чисел {$a} и {$b} равно " . ($a * $b) . "{$br} {$br}";
} else {
    echo "сумма чисел {$a} и {$b} равна " . ($a + $b) . "{$br} {$br}";
}

/* Задание №2
Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора
switch организовать вывод чисел от $a до 15.*/
echo "Задание № 2 {$br}";
$a = 0;
switch ($a) {
    case 0:
        echo $a++ . $br;
    case 1:
        echo $a++ . $br;
    case 2:
        echo $a++ . $br;
    case 3:
        echo $a++ . $br;
    case 4:
        echo $a++ . $br;
    case 5:
        echo $a++ . $br;
    case 6:
        echo $a++ . $br;
    case 7:
        echo $a++ . $br;
    case 8:
        echo $a++ . $br;
    case 9:
        echo $a++ . $br;
    case 10:
        echo $a++ . $br;
    case 11:
        echo $a++ . $br;
    case 12:
        echo $a++ . $br;
    case 13:
        echo $a++ . $br;
    case 14:
        echo $a++ . $br;
    case 15:
        echo $a . $br . $br;
}

/* Задание №3
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/
echo "Задание № 3 {$br}";
function summaNumbers ($x, $y) {
    return $x + $y;
}
function differenceNumbers ($x, $y) {
    return $x - $y;
}
function multiplicationNumbers ($x, $y) {
    return $x * $y;
}
function divisionNumbers ($x, $y) {
    return ($y == 0) ? "Ошибка. Знаменатель не можем быть равен нулю." : $x / $y; 
}
echo "Cумма чисел 5 и 5 равна" . summaNumbers (5, 5) . $br;
echo "Разность чисел 5 и 2 равна " . differenceNumbers (5, 2) . $br;
echo "Произведение чисел 6 и 3 равно " . multiplicationNumbers (6, 3) . $br;
echo "Деление числа 9 на 3 равно " . divisionNumbers (9, 3) . $br . $br;

/* Задание №4
Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation),
где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. В
зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
echo "Задание № 4 {$br}";
function mathOperation ($arg1, $arg2, $operation) {
    global $br;
    switch ($operation) {
        case '+':
            echo "Cумма чисел {$arg1} и {$arg2} равна " . summaNumbers ($arg1, $arg2) . $br;
        break;
        case '-':
            echo "Разность чисел {$arg1} и {$arg2} равна " . differenceNumbers ($arg1, $arg2) . $br;
        break;
        case '*':
            echo "Произведение чисел {$arg1} и {$arg2} равно " . multiplicationNumbers ($arg1, $arg2) . $br;
        break;
        case '/':
            echo "Деление числа {$arg1} на {$arg2} равно " . divisionNumbers ($arg1, $arg2) . $br . $br;
        break;
        default:
            echo "Нет такой арифметичеоской операции" . $br;
    }
}
mathOperation (10, 10, '+');
mathOperation (8, 3, '-');
mathOperation (2, 2, '*');
mathOperation (40, 0, '/');

/*Задание №5
5. ВАЖНОЕ! Написать функцию renderTemplate возвращающую шаблон в виде текста, 
вынесите весь повторяющийся код из шаблона страниц (doctype, menu, header, footer) в отдельный шаблон 
(layout), сделайте отдельный шаблон страницы с приветствием. Обеспечьте формирование результирующей страницы 
используя только функцию renderTemplate, т.е. в layout должен вставиться подшаблончик страницы с приветствием.*/
echo "Задание № 5 {$br}";

function renderTemplate ($page, $content = '') {
    ob_start();
    include "layout/{$page}" . ".php";
    return ob_get_clean();
}

$content = renderTemplate ("header") . renderTemplate ("menu") . renderTemplate ("footer");
echo renderTemplate ("doctype", $content);

/*Задание№6
С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power($val, $pow), где $val – заданное число, $pow – степень.*/
echo "Задание № 6 {$br}";
function power ($val, $pow) {
    if ($pow > 1) {
        return $val *= power ($val, $pow - 1);
    } elseif ($pow < -1) {
        $val = 1 / $val;
        $pow = $pow * (-1);
        return $val *= power ($val, $pow - 1);
    } elseif ($pow == 1) {
        return $val;
    } elseif ($pow == -1) {
        return 1 / $val;
    } elseif ($pow == 0) {
        return 1;
    }
}
$val = 2;
$pow = 5;
echo "Число {$val} в степени {$pow} равно " . power ($val, $pow) . "{$br} {$br}";