<?php 
require 'ROOT_DIR./../public/calcs/calc.php';
?>
<form method="GET">
<input name="firstVariable" type="number" value="<?=$firstVariable?>">
<select name="sign" >
    <option <?php if ($sign=="plus") echo "selected"?> value="plus">+</option>
    <option <?php if ($sign=="minus") echo "selected"?> value="minus">-</option>
    <option <?php if ($sign=="multiply") echo "selected"?> value="multiply">*</option>
    <option <?php if ($sign=="divide") echo "selected"?> value="divide">/</option>
</select>
<input name="secondVariable" type="number" value="<?=$secondVariable?>">
<input type="submit" value="=">
<?php if(isset($total)) echo "$total"?>
</form>