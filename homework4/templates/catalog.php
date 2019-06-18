<?php
if (isset($_POST['load'])){
   uploadAndCheck();
   $path = "img/gallery_img/big/" . $_FILES['myfile']['name']; //путь откуда брать загруженное изображение для создания уменьшенной копии?
   $save = true; // метка, что нужно сохранить уменьшенное изображение?
   $width = 150; 
   $height = 100; 
   create_thumbnail($path, $save, $width, $height);
}
?>


<div id="main">
<div class="post_title"><h2>Моя галерея</h2></div>
	<div class="gallery">
    <?php foreach ($catalog as $key => $value):?>
    <a rel="gallery" class="photo" href="img/gallery_img/big/<?=$value?>"><img src="img/gallery_img/small/<?=$value?>" width="150" height="100" /></a>
    <?php endforeach; ?>
<form method="post" enctype="multipart/form-data">
    <input type="file" name="myfile">
    <input type="submit" name="load" value="Загрузить">
</form>
</div>
</div>