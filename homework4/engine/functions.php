<?php
//Файл с функциями нашего движка


//Функция, возвращает текст шаблона $page с подстановкой переменных
//из массива $params, содержимое шабона $page подставляется в
//переменную $content главного шаблона layout для всех страниц
function render($page, array $params = [])
{
    $content = renderTemlate(LAYOUTS_DIR . 'main', [
        'content' => renderTemlate($page, $params),
        'menu' => 'Меню<br>'
    ]);
    return $content;
}

//Функция возвращает текст шаблона $page с подставленными переменными из
//массива $params, просто текст
function renderTemlate($page, array $param = [])
{
    ob_start();

    if (!is_null($param)) {
        extract($param);
    }


    $fileName = TEMPLATES_DIR . $page . ".php";


    if (file_exists($fileName)) {
        include $fileName;
    } else {
        Die("Страницы {$fileName} не существует.");
    }

    return ob_get_clean();
}

function imageDir()
{
    return $files = array_slice(scandir("img/gallery_img/big"), 2);
}

function uploadAndCheck()
{
    $uploaddir = 'img/gallery_img/big/'; // Relative path under webroot
    $uploadfile = $uploaddir . basename($_FILES['myfile']['name']);
   //Проверка существует ли файл
   if (file_exists($uploadfile)) { echo "Файл {$uploadfile} существует, выберите другое имя файла!"; exit;} 
   
   //Проверка на размер файла 
      if($_FILES["myfile"]["size"] > 1024*1*1024)
      {
        echo ("Размер файла не больше 5 мб");
        exit;
      }
   //Проверка расширения файла
   $blacklist = array(".php", ".phtml", ".php3", ".php4");
    foreach ($blacklist as $item) {
     if(preg_match("/$item\$/i", $_FILES['myfile']['name'])) {
      echo "Загрузка php-файлов запрещена!";
      exit;
      }
     }
   //Проверка на тип файла
   $imageinfo = getimagesize($_FILES['myfile']['tmp_name']);
    if($imageinfo['mime'] != 'image/gif' && $imageinfo['mime'] != 'image/jpeg') {
     echo "Можно загружать только jpg-файлы, неверное содержание файла, не изображение.";
     exit;
    }
   
    if($_FILES['myfile']['type'] != "image/jpeg") {
      echo "Можно загружать только jpg-файлы.";
      exit;
    }
    
    if (move_uploaded_file($_FILES['myfile']['tmp_name'], $uploadfile)) {
      echo "Файл успешно загружен.\n";
    } else {
      echo "Загрузка не получилась.\n";
    }
}

function create_thumbnail($path, $save, $width, $height) 
{
  $info = getimagesize($path); //получаем размеры картинки и ее тип
  $size = array($info[0], $info[1]); //закидываем размеры в массив
        //В зависимости от расширения картинки вызываем соответствующую функцию
	if ($info['mime'] == 'image/png') {
		$src = imagecreatefrompng($path); //создаём новое изображение из файла
	} else if ($info['mime'] == 'image/jpeg') {
		$src = imagecreatefromjpeg($path);
	} else if ($info['mime'] == 'image/gif') {
 		$src = imagecreatefromgif($path);
	} else {
		return false;
	}

	$thumb = imagecreatetruecolor($width, $height); //возвращает идентификатор изображения, представляющий черное изображение заданного размера
	$src_aspect = $size[0] / $size[1]; //отношение ширины к высоте исходника
	$thumb_aspect = $width / $height; //отношение ширины к высоте аватарки

	if($src_aspect < $thumb_aspect) { 		//узкий вариант (фиксированная ширина) 		$scale = $width / $size[0]; 		$new_size = array($width, $width / $src_aspect); 		$src_pos = array(0, ($size[1] * $scale - $height) / $scale / 2); //Ищем расстояние по высоте от края картинки до начала картины после обрезки 	} else if ($src_aspect > $thumb_aspect) {
		//широкий вариант (фиксированная высота)
		$scale = $height / $size[1];
		$new_size = array($height * $src_aspect, $height);
		$src_pos = array(($size[0] * $scale - $width) / $scale / 2, 0); //Ищем расстояние по ширине от края картинки до начала картины после обрезки
	} else {
		//другое
		$new_size = array($width, $height);
		$src_pos = array(0,0);
	}

	$new_size[0] = max($new_size[0], 1);
	$new_size[1] = max($new_size[1], 1);

	imagecopyresampled($thumb, $src, 0, 0, $src_pos[0], $src_pos[1], $new_size[0], $new_size[1], $size[0], $size[1]);
	//Копирование и изменение размера изображения с ресемплированием

	if($save === false) {
		return imagejpeg($thumb); //Выводит JPEG/PNG/GIF изображение
	} else {
		return imagejpeg($thumb, $save);//Сохраняет JPEG/PNG/GIF изображение
	}
}