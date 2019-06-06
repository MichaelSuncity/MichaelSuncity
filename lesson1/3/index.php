<?php
$br='<br>';
$title='My page';
$h1="hello world $br";
$todayh=getDate();
$d=$todayh['mday'];
$m=$todayh['mon'];
$y=$todayh['year'];
$content=file_get_contents("main.php");
$content=str_replace("{{head}}",$h1, $content);
$content=str_replace("{{title}}",$title, $content);
$content=str_replace("{{year}}",$y, $content);
$content=str_replace("{{month}}",$m, $content);
$content=str_replace("{{day}}",$d, $content);
echo $content;
?>

