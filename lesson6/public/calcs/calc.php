<?php
if (isset($_GET['firstVariable']))
    $firstVariable=$_GET['firstVariable'];
if (isset($_GET['secondVariable']))
    $secondVariable=$_GET['secondVariable'];
if (isset($_GET['sign']))
    $sign=$_GET['sign'];
if (isset($_GET['res']))
    $total=$_GET['res'];
switch ($sign){
    case 'plus';
    $total=$firstVariable+$secondVariable;
    break;
    case 'minus';
    $total=$firstVariable-$secondVariable;
    break;
    case 'multiply';
    $total=$firstVariable*$secondVariable;
    break;
    case 'divide';
    if ($secondVariable!=0)
        $total=$firstVariable/$secondVariable;
    else
        $total="Ошибка! Делить на ноль нельзя!";
    break;
}
?>