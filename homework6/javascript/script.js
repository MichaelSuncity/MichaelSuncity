//Задание 1
var products = [
    {
        name: 'яблоки',
        price: 10,
        count: 0,
        country: 'Россия',
    },
    {
        name: 'груши',
        price: 20,
        count: 0,
        country: 'Украина',
    },
    {
        name: 'бананы',
        price: 30,
        count: 0,
        country: 'Эквадор',

    },
    {
        name: 'апельсины',
        price: 40,
        count: 0,
        country: 'Марроко',
    },
]

function init() {
    buildCatalog(products);
    for (var i = 0; i < products.length; i++) {
        var $buttonBuy = document.getElementById('button' + '_' + i);
        $buttonBuy.addEventListener('click', handleButtonClick);
    }
    countBasketPrice(products); //первоначальное отображение стоимости корзины
}

function handleButtonClick() {
    products[event.target.id.split('_').pop()].count += 1; //1.выделяю индекс выбранного товара при нажатии кнопки "Купить" 2. увеличиваю корзину на одну единицу данного товара
    var $count = document.getElementById('count' + '_' + event.target.id.split('_').pop()); // показываю в каталоге сколько куплено единиц каждого товара
    $count.textContent = 'Количество: ' + products[event.target.id.split('_').pop()].count;
    countBasketPrice(products); // при нажатии кнопки "Купить" подсчитывается сумма корзины и обновляется информация
}

function countBasketPrice(products) {  // подсчет стоимости корзины
    var quantity = 0;
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].count >= 0 && products[i].price >= 0) {
            quantity += products[i].count;
            sum += products[i].count * products[i].price;
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


//генерация каталога
function buildCatalog(products) {
    var $catalog = document.getElementById('catalog');
    $catalog.classList.add('catalog');
    for (var i = 0; i < products.length; i++) {
        var $commodity = document.createElement('div');
        $commodity.classList.add('commodityWrap');
        var $productName = document.createElement('div');
        var $productPrice = document.createElement('div');
        var $productQuantity = document.createElement('div');
        var $productCountry = document.createElement('div');
        $productName.textContent = 'Товар: ' + products[i].name;
        $commodity.appendChild($productName);
        $productPrice.textContent = 'Цена: ' + products[i].price + ' руб.';
        $commodity.appendChild($productPrice);
        $productQuantity.textContent = 'Количество: ' + products[i].count;
        $productQuantity.setAttribute('id', 'count' + '_' + i);
        $commodity.appendChild($productQuantity);
        $productCountry.textContent = 'Страна происхождения: ' + products[i].country;
        $commodity.appendChild($productCountry);
        var $buttonBuy = document.createElement('button');
        $buttonBuy.textContent = 'Купить!';
        $buttonBuy.classList.add('buttonBuy');
        $buttonBuy.setAttribute('id', 'button' + '_' + i); //разные id кнопок для покупки товаров
        $commodity.appendChild($buttonBuy);
        $catalog.appendChild($commodity);
    }
}

window.addEventListener('load', init);
