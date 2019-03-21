class GoodsItem {
    constructor(name, price, cover) {
        this.cover = cover;
        this.name = name;
        this.price = price;
    }
    render() {
        return `<div class='featuredItem'>
                    <div class='featuredImgWrap'>
                        <div class='featuredBuy'>
                            <button>
                                <img  src='images/addToCart.png' alt="">Add to Cart
                            </button>
                        </div>
                        <img src=${this.cover}>
                    </div>
                    <div class='featuredNameAndPrice'>
                        <div class='featuredItemName'>
                            ${this.name}
                        </div>
                        <div class='featuredItemPrice'>
                            $${this.price.toFixed(2)}
                        </div>
                    </div>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 60.00,
                cover: 'images/featuredItem1.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 65.00,
                cover: 'images/featuredItem2.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 87.00,
                cover: 'images/featuredItem3.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 37.00,
                cover: 'images/featuredItem4.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 52.00,
                cover: 'images/featuredItem5.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 42.00,
                cover: 'images/featuredItem6.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 72.00,
                cover: 'images/featuredItem7.jpg'
    },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 62.00,
                cover: 'images/featuredItem8.jpg'
    },
];
        this.goods = this.goods.map(item => new GoodsItem(item.name, item.price, item.cover));
    }

    render() {
        const itemsHtml = this.goods.map(item => item.render());
        return itemsHtml.join('');
    }

    totalPrice() {
        let total = this.goods.reduce(function(sum,item){
        return sum+ item.price},0)
    }
}

class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.sum = this.price * this.quantity;
    }
    render() {
        return `<div id='cartProduct' class='cartProduct'>
                    <div class='name'>${this.name}</div>
                    <div class='price'>${this.price}</div>
                    <div class='quantity'>${this.quantity}</div>
                    <div class='sum'>${this.sum}</div>
                    <button class='deleteProduct'>X</button>
                </div>`;
    }
}

class CartList {
    constructor() {
        this.cart = [];
    }
    getItems() {
        this.cart = [ //метод для добавления товаров в корзину из каталога
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 60.00,
                quantity: 2
            },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 65.00,
                quantity: 1
            },
            {
                name: 'MANGO PEOPLE T-SHIRT',
                price: 87.00,
                quantity: 1
                },
            ];

        this.cart = this.cart.map(cartItem => new CartItem(cartItem.name, cartItem.price, cartItem.quantity));
    }

    increaseItems() { //метод для увеличения количества товаров в корзине 

    }

    removeItems() { //метод для удаления товаров из корзины 

    }

    totalCart() { // метод подсчета суммы корзины

    }

    discountCart() { // метод для оформления скидки на товары в корзине

    }

    render() { // отображение корзины на экране браузера
        const cartItemsHtml = this.cart.map(cartItem => cartItem.render());
        return cartItemsHtml.join('');
    }

    orderCart() { // подготовка корзины к оформлению заказа и непосредственно сам заказ

    }
}

function init() {
    const goods = new GoodsList();
    goods.fetchGoods();
    document.querySelector('.featuredItems').innerHTML = goods.render();
    const cart = new CartList();
    cart.getItems();
    document.querySelector('.cartItems').innerHTML = cart.render();
}
window.addEventListener('load', init)
