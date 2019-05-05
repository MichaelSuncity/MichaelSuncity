<?php
function verify($images) {
    $result = array();
    for ($i = 0; $i < count($images); $i++) {
        if ($images[$i] != "." && $images[$i] != "..") {
            $result[] = $images[$i];
        }
    }
    return $result;
}

$directory  = 'images/'; //папка с файлами (картинками)
$images = scandir($directory ); //извлекаю список файлов из папки
$images = verify ($images); // удаляю лишние файлы с помощью функции

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Фотогалерея</h1>
    <div class="catalog">
        <?php foreach ($images as $key=>$path):?>
            <div class="image">
               <a href="<?=$directory.$path?>" target="_blank"> 
                    <img class="img" src="<?=$directory.$path?>" alt="#" >
                </a>
            </div>
        <?php endforeach; ?>
    </div>
    <div  id='overlay' class='overlay'></div>
    <div id='modal' class='modal'>
        <div id='close' class='close'>X</div>
        <img id='modalImage' src="" alt=''>
    </div>
    <script src="js/script.js"></script>
</body>
</html>