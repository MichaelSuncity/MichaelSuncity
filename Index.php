<?php
$br ='<br>';
/* Задание №1
Объявить две целочисленные переменные $a и $b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
a. Если $a и $b положительные, вывести их разность.
b. Если $а и $b отрицательные, вывести их произведение.
c. Если $а и $b разных знаков, вывести их сумму.
Ноль можно считать положительным числом.*/
echo 'Задание № 1'.$br;
$a =15;
echo "число а=$a".$br;
$b = 5;
echo "число b=$b".$br;
if ($a>=0 && $b>=0){
    echo "разность чисел $a и $b равна ".($a-$b).$br.$br;
}elseif ($a<0 && $b<0){
    echo "произведение чисел $a и $b равно ".($a*$b).$br.$br;
}else{
    echo "сумма чисел $a и $b равна ".($a+$b).$br.$br;
}

/* Задание №2
Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора
switch организовать вывод чисел от $a до 15.*/
echo 'Задание №2'.$br;
$a =0;
switch($a){
    case 0:
        echo $a++.$br;
    case 1:
        echo $a++.$br;
    case 2:
        echo $a++.$br;
    case 3:
        echo $a++.$br;
    case 4:
        echo $a++.$br;
    case 5:
        echo $a++.$br;
    case 6:
        echo $a++.$br;
    case 7:
        echo $a++.$br;
    case 8:
        echo $a++.$br;
    case 9:
        echo $a++.$br;
    case 10:
        echo $a++.$br;
    case 11:
        echo $a++.$br;
    case 12:
        echo $a++.$br;
    case 13:
        echo $a++.$br;
    case 14:
        echo $a++.$br;
    case 15:
        echo $a.$br.$br;
}

/* Задание №3
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/
echo 'Задание №3'.$br;
function summaNumbers($x, $y){
    return $x + $y;
}
function differenceNumbers($x, $y){
    return $x - $y;
}
function multiplicationNumbers($x, $y){
    return $x * $y;
}
function divisionNumbers($x, $y){
    return $x / $y;
}
echo 'Cумма чисел 5 и 5 равна '.summaNumbers(5, 5).$br;
echo 'Разность чисел 5 и 2 равна '.differenceNumbers(5, 2).$br;
echo 'Произведение чисел 6 и 3 равно '.multiplicationNumbers(6, 3).$br;
echo 'Деление числа 9 на 3 равно '.divisionNumbers(9, 3).$br.$br;

/* Задание №4
Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation),
где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. В
зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/
echo 'Задание №4'.$br;
function mathOperation($arg1, $arg2, $operation){
    switch($operation){
        case 'сумма':
            echo "Cумма чисел $arg1 и $arg2 равна ".summaNumbers($arg1, $arg2);
        break;
        case 'разность':
            echo "Разность чисел $arg1 и $arg2 равна ".differenceNumbers($arg1, $arg2);
        break;
        case 'произведение':
            echo "Произведение чисел $arg1 и $arg2 равно ".multiplicationNumbers($arg1, $arg2);
        break;
        case 'деление':
            echo "Деление числа $arg1 на $arg2 равно ".divisionNumbers($arg1, $arg2);
        break;
    }
}
echo mathOperation(10, 10, 'сумма').$br;
echo mathOperation(8, 3, 'разность').$br;
echo mathOperation(2, 2, 'произведение').$br;
echo mathOperation(40, 8, 'деление').$br.$br;

//Задание №5
echo 'Задание №5 было выполнено в прошлом домашнем задании'.$br.$br;

/*Задание№6
С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power($val, $pow), где $val – заданное число, $pow – степень.*/
echo 'Задание №6'.$br;
function power($val, $pow) {
    if ($pow > 1) {
        return $val *= power($val, $pow - 1);
    } elseif ($pow < -1) {
        $val = 1 / $val;
        $pow=$pow*(-1);
        return $val *= power($val, $pow - 1);
    } elseif ($pow == 1) {
        return $val;
    } elseif ($pow == -1) {
        return 1 / $val;
    } elseif ($pow == 0) {
        return 1;
    }
}
$val=2;
$pow =5;
echo "Число $val в степени $pow равно ".power($val, $pow).$br.$br;

/*Задание №7
Написать функцию, которая вычисляет текущее время и возвращает его в формате с
правильными склонениями, например: 22 часа 15 минут, 21 час 43 минуты.
*/
echo 'Задание №7'.$br;
$todayh=getDate();
$hour=date('H');
$min=date('i');
$sec=date('s');

function hourCount($hour){
    switch ($hour){
        case 1:
        case 21:
            $hour=$hour.' час ';
        break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
            $hour=$hour.' часа ';
        break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            $hour=$hour.' часов ';
        break;
    }
    return $hour;
}
function minuteCount($min){
    switch ($min){
        case 1:
        case $min % 10==1 && $min!=11:
            $min=$min.' минута ';
        break;
        case 2:
        case $min % 10==2 && $min!=12:
        case 3:
        case $min % 10==3 && $min!=13:
        case 4:
        case $min % 10==4 && $min!=14:
            $min=$min.' минуты ';
        break;
        case 0:
        case $min % 10==0:
        case 5:
        case $min % 10==5:
        case 6:
        case $min % 10==6:
        case 7:
        case $min % 10==7:
        case 8:
        case $min % 10==8:
        case 9:
        case $min % 10==9:
        case 11:
        case 12:
        case 13:
        case 14:
            $min=$min.' минут ';
        break;
    }
    return $min;
}
function secCount($sec){
    switch ($sec){
        case 1:
        case $sec % 10==1 && $sec!=11:
            $sec=$sec.' секунда ';
        break;
        case 2:
        case $sec % 10==2 && $sec!=12:
        case 3:
        case $sec % 10==3 && $sec!=13:
        case 4:
        case $sec % 10==4 && $sec!=14:
            $sec=$sec.' секунды ';
        break;
        case 0:
        case $sec % 10==0:
        case 5:
        case $sec % 10==5:
        case 6:
        case $sec % 10==6:
        case 7:
        case $sec % 10==7:
        case 8:
        case $sec % 10==8:
        case 9:
        case $sec % 10==9:
        case 11:
        case 12:
        case 13:
        case 14:
            $sec=$sec.' секунд ';
        break;
    }
    return $sec;
}
echo  "Текущее время: ".hourCount($hour).minuteCount($min).secCount($sec);
?>