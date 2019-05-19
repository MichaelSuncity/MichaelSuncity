<?php
if (isset($_POST['firstVariableForCalc2']))
    $firstVariableForCalc2=$_POST['firstVariableForCalc2'];
if (isset($_POST['secondVariableForCalc2']))
    $secondVariableForCalc2=$_POST['secondVariableForCalc2'];
if (isset($_POST['operation'])){
     if ($firstVariableForCalc2=="" && $secondVariableForCalc2==""){
         $totalForCalc2="Введите данные во все поля";
    }
    else{
    switch ($_POST['operation']){
        case "+";
            $totalForCalc2=$firstVariableForCalc2+$secondVariableForCalc2;
            break;
        case "-";
            $totalForCalc2=$firstVariableForCalc2-$secondVariableForCalc2;
            break;
        case "*";
            $totalForCalc2=$firstVariableForCalc2*$secondVariableForCalc2;
            break;
        case "/";
            if ($secondVariableForCalc2!=0){
                $totalForCalc2=$firstVariableForCalc2/$secondVariableForCalc2;
            }else{
                $totalForCalc2="Ошибка! Делить на ноль нельзя!";
            }
            break;
        }
    }
}
?>