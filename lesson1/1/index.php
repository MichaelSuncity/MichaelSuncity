<?php
$br='<br>';
echo 'Hello world'.$br;
$a = 5;
$b = '05';
var_dump ( $a == $b ); // Почему true? Оператор == сравнивает значения. В данном случае одинаковые значения.
var_dump (( int ) '012345' ); 
/* Почему 12345? На интерпретатор приходит скомпимпилированный php и поэтому убираются лишние нули? 
Видимо перед интерпретацией php отбрасывает лишние нули перед первой цифрой числа, отличной от нуля. */
var_dump (( float ) 123.0 === ( int ) 123.0 ); 
/* Почему false? Оператор === сравнивает по значению и по типу. В данном случае одинаковые значения, но разные типы  - float и Integer*/
var_dump (( int ) 0 === ( int ) 'hello, world' ); 
/* Почему true? Тут слева и справа сравниваются одинаковые типы данных данных, при этом в правой части тип данных int не находит число в строке
 'hello, world' и устанавливает значение равное 0 */
//задание 1
echo $br;
$title='My page';
$h1="hello world $br";
$todayh=getDate();
$d=$todayh['mday'];
$m=$todayh['mon'];
$y=$todayh['year'];
echo $br.$br;
//задание 2
$a=1;
$b=2;
echo "переменная a = $a".$br;
echo "переменная b = $b".$br;
echo "меняем значения переменных  a=$a и b=$b  местами".$br;
$a=$a+$b;
$b=$a-$b;
$a=$a-$b;
echo "теперь  значения переменных  a=$a и b=$b".$br.$br;
//другой способ
$a=-7;
$b=3;
echo "переменная a = $a".$br;
echo "переменная b = $b".$br;
echo "меняем значения переменных  a=$a и b=$b  местами".$br;
$a=($a^$b)^$a & $b=($a^$b)^$b; 
echo "теперь  значения переменных  a=$a и b=$b".$br.$br;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$title?></title>
</head>
<body>
    <h1><?=$h1?></h1>
    <h1>Текущая дата: <?=$y?> год, <?=$m?> месяц, <?=$d?> число</h1>
</body>
</html>