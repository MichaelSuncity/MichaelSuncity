<?php

require 'engine/init.php';


$SQL_query = "SELECT * FROM lesson6.comments ORDER BY comments.time DESC";

$query = mysqli_query($mysqli, $SQL_query);


$result = [];

while ($row = mysqli_fetch_assoc($query)) {
    $result[] = $row;
}
