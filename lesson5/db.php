<?php

$mysqli=mysqli_connect ("localhost", "root", "", "gallery");
$query=mysqli_query($mysqli, "SELECT * FROM gallery.image ORDER BY image.count_id DESC"); 
$result=[];
while ($row = mysqli_fetch_assoc ($query)){
    $result[]=$row;
    //var_dump($row);
    //echo '<br/>';
}

function counter($id){
    mysqli_query($mysqli, "UPDATE image SET image.count_id=image.count_id +1 WHERE image.id='$id'");
}

mysqli_close($mysqli);

?>
