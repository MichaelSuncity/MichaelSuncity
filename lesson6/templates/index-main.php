<?php
require ROOT_DIR.'templates/calcs/calc.php';
require ROOT_DIR.'templates/calcs/calc2.php';
?>

<hr>
<div class="comments">
<?php foreach ($result as $message):?>
    <div class="message">
        <div class="image"> 
            <img class="img" src="<?=$message['image']?>" alt="#" >
        </div>
        <div class="messageText">
            <div><?="Отзыв №: ".$message['id']?></div>
            <div class="nameAndTime">
                <div class="name"><?=$message['author']?></div>
                <div class="time"><?=$message['time']?></div>
            </div>
            <div><?=$message['comment']?></div>
        </div>
    </div>
<?php endforeach ?>
</div>
<hr>

<form action="public/add.php" method="post">
    <fieldset style=" width: 500px">
        <p><label for="author">Имя</label><br>
        <input type="text" name="author" id="author" value="" size="25"/></p>
        <p><label for="comment">Текст сообщения</label><br>
        <textarea name="comment" id="comment" cols="48" rows="8"> </textarea></p>
        <p><button name="submit" id="submit" type="submit">Отправить</button></p>
    </fieldset>
</form>
