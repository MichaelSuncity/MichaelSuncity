<?php
require './../engine/init.php';

if ($_POST && $_POST['author'] && $_POST['comment']) {
    $author = $_POST['author'];
    $comment= $_POST['comment'];
}

$INSERT_query = sprintf("INSERT INTO lesson6.comments (author, comment) VALUES (\"%s\", \"%s\")", $author, $comment);

$insert_query = mysqli_query($mysqli,$INSERT_query);

header('Location: ./../index.php');

die;