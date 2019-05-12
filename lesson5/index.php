<?php
    require ('db.php');
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
        <?php foreach ($result as $image):?>
            <div class="image">
               <a href="<?=$image['address']?>" target="_blank"> 
                    <img class="img" src="<?=$image['address']?>" alt="#" >
                </a>
            </div>
        <?php endforeach; ?>
    </div>
 
</body>
</html>