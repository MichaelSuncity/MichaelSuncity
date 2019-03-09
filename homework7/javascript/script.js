var products = [
    {
        name: 'яблоки',
        price: 10,
        country: 'Россия',
    },
    {
        name: 'груши',
        price: 20,
        country: 'Украина',
    },
    {
        name: 'бананы',
        price: 30,
        country: 'Эквадор',

    },
    {
        name: 'апельсины',
        price: 40,
        country: 'Марроко',
    },
]

var cart = [];

function init() { // после загрузки страницы можно нажать кнопку "Купить!"
    buildCatalog(products);
    getTotal(cart);
    var $catalog = document.getElementById('catalog');
    $catalog.addEventListener('click', handleButtonClick);
    var $cartTable = document.getElementById('cartTable');
    $cartTable.addEventListener('click', handleButtonClear);
    var $cartProductHead = document.getElementById('cartProductHead');
    $cartProductHead.addEventListener('click', handleButtonClearCart);
}
//очистка всей корзины
function handleButtonClearCart(event) {
    if (event.target.tagName === 'BUTTON') {
        cart = []; //корзина становится пустым массивом
        getTotal(cart); //перерасет пустой корзины
        cartTable(cart); // визуализация пустой корзины
        var $cartProductHead = document.getElementById('cartProductHead');
        $cartProductHead.classList.remove('cartProductHead'); //присвоение свойства дисплей нон 
    }
}

function handleButtonClear(event) {
    if (event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;
        var name = $product.querySelector('.name').textContent;
        var index = getIndex(name);
        cart.splice(index,1);
        getTotal(cart);
        cartTable(cart); //

    }
}

function handleButtonClick(event) {
    if (event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;
        var name = $product.querySelector('.name').textContent.split(': ').pop();
        var price = +$product.querySelector('.price').textContent.split(': ').pop();
        var country = $product.querySelector('.country').textContent.split(': ').pop();
        var index = getIndex(name);
        if (index == -1) {
            cart.push({
                name: name,
                price: price,
                country: country,
                quantity: 1,
            });
        } else {
            cart[index].quantity++;
        }
        getTotal(cart); //взятие суммы корзины
        cartTable(cart); //добавляю функцию вывода корзины
    }
}

function getIndex(name) {
    var idx = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    return idx;
}

function getTotal(cart) {
    var $cart = document.getElementById('cart');
    var count = 0;
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
        sum += cart[i].quantity * cart[i].price;
    }
    if (cart.length == 0) {
        $cart.textContent = 'Корзина пуста';
    } else {
        $cart.textContent = 'В корзине ' + count + ' шт. товара на сумму ' + sum + ' рублей.';
    }
    $cart.classList.add('cart');
}

// генерация элементов корзины на основе шаблона
function cartTable(cart) {
    var $cartTable = document.getElementById('cartTable');
    $cartTable.innerHTML = ''; //стирание в HTML предыдущих записей при повторном обращении к этой функции
    var $cartProductHead = document.getElementById('cartProductHead');
    $cartProductHead.classList.add('cartProductHead');

    var $cartProduct = document.getElementById('cartProduct');
    for (var i = 0; i < cart.length; i++) {
        var $item = $cartProduct.cloneNode(true);
        $item.querySelector('.name').textContent = cart[i].name;
        $item.querySelector('.price').textContent = cart[i].price;
        $item.querySelector('.country').textContent = cart[i].country;
        $item.querySelector('.quantity').textContent = cart[i].quantity;
        $item.querySelector('.sum').textContent = +cart[i].quantity * +cart[i].price;
        $item.classList.add('cartProduct');
        $cartTable.appendChild($item);
        $cartTable.classList.add('cartTable');
    }
}

// генерация каталога на основе шаблона template и массива товаров
function buildCatalog(products) {
    var $catalog = document.getElementById('catalog');
    var $template = document.getElementById('template');
    for (var i = 0; i < products.length; i++) {
        var $item = $template.children[0].cloneNode(true);
        $item.querySelector('.name').textContent = 'Товар: ' + products[i].name;
        $item.querySelector('.price').textContent = 'Цена товара: ' + products[i].price;
        $item.querySelector('.country').textContent = 'Страна происхождения: ' + products[i].country;
        $item.classList.add('commodityWrap');
        $catalog.appendChild($item);
        $catalog.classList.add('catalog');
    }
}
window.addEventListener('load', init);
