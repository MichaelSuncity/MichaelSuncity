<?php 
require 'ROOT_DIR./../public/calcs/calc2.php';
?>
<form action="" method="POST">
<label for="firstVariableForCalc2">Переменная 1</label><br>
<input name="firstVariableForCalc2" id="firstVariableForCalc2" type="number" value="<?=$firstVariableForCalc2?>"><br>
<label for="secondVariableForCalc2">Переменная2</label><br>
<input name="secondVariableForCalc2" id="secondVariableForCalc2" type="number" value="<?=$secondVariableForCalc2?>"><br>
<br>
<div>
    <input type="submit" name="operation" value="+">
    <input type="submit" name="operation" value="-">
    <input type="submit" name="operation" value="*">
    <input type="submit" name="operation" value="/">
</div>
<p>Результат</p>
<?php if(isset($totalForCalc2)) echo "$totalForCalc2"?>
</form>
