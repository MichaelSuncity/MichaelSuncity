//Задание 1
var $board = document.getElementById('board');
var $table = document.createElement('table');
$table.classList.add('table');
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//отдельно создаю функцию для создания строк с буквами
function rowabc(abc) { //создание строк с буквами
    var $row = document.createElement('tr');
    var $cell = document.createElement('td');
    $row.appendChild($cell);
    for (var i = 0; i < abc.length; i++) {
        var $cell = document.createElement('td');
        $cell.textContent = abc[i];
        $cell.classList.add('letter');
        $row.appendChild($cell);
    }
    $table.appendChild($row);
}
rowabc(abc);
// создание игрового поля шахматной доски с боковыми рядами, которые обозначают номера строк. Кол-во строк 8, количество рядов 10
for (var i = 1; i < 9; i++) {
    var $row = document.createElement('tr');
    for (var j = 1; j < 11; j++) {
        var $cell = document.createElement('td');
        if (j != 1 && j != 10) {
            $cell.classList.add('cell');
            if ((i + j) % 2 == 0) {
                $cell.classList.add('blackcell');
            }
        } else if (j == 1 || j == 10) { //боковые ряды с цифрами
            $cell.textContent = -i + 9;
            $cell.classList.add('numCell');
        }
        $row.appendChild($cell);
    }
    $table.appendChild($row);
}
rowabc(abc);
$board.appendChild($table);
//Задание 2
var cart = [
    {
        product: 'яблоки',
        price: 10,
        count: 1,
        country: 'Россия',
    },
    {
        product: 'груши',
        price: 20,
        count: 1,
        country: 'Украина',
    },
    {
        product: 'бананы',
        price: 30,
        count: 1,
        country: 'Эквадор',

    },
    {
        product: 'апельсины',
        price: 40,
        count: 1,
        country: 'Марроко',
    },
]

function countBasketPrice(cart) {
    var quantity = 0;
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        if( cart[i].count>=0 && cart[i].price>=0){
        quantity += cart[i].count;
        sum += cart[i].count * cart[i].price;
    }
    }
    var $cart = document.getElementById('cart');
    $cart.classList.add('cart');
    if (quantity <= 0) {
        $cart.textContent = 'В корзине пусто';
    } else {
        $cart.textContent = 'В корзине ' + quantity + ' шт. товара на сумму ' + sum + ' рублей.';
    }
}
countBasketPrice(cart);
//Задание 3
function catalog(cart) {
    var $catalog = document.getElementById('catalog');
    $catalog.classList.add('catalog');
    for (var i = 0; i < cart.length; i++) {
        var $commodity = document.createElement('div');
        $commodity.classList.add('commodityWrap');
        var $productName = document.createElement('div');
        var $productPrice = document.createElement('div');
        var $productQuantity = document.createElement('div');
        var $productCountry = document.createElement('div');
        $productName.textContent = 'Товар: ' + cart[i].product;
        $commodity.appendChild($productName);
        $productPrice.textContent = 'Цена: ' + cart[i].price + ' руб.';
        $commodity.appendChild($productPrice);
        if (cart[i].count >= 0) {
            $productQuantity.textContent = 'Количество: ' + cart[i].count;
        } else {
            $productQuantity.textContent = 'Товар отстутствует на складе';
        }
        $commodity.appendChild($productQuantity);
        $productCountry.textContent = 'Страна происхождения: ' + cart[i].country;
        $commodity.appendChild($productCountry);
        $catalog.appendChild($commodity);
    }
}
catalog(cart);
