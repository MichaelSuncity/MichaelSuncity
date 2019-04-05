const API_URL = 'http://localhost:3000';
// 9 строка @click.. если v-bind то значение из переменной иначе конкретное значение
Vue.component('featured-item', {
    props: ['item'],
    template: `
    <div class="featuredItem" :id="item.id">
        <div class='featuredImgWrap'>
            <div class="featuredBuy">
                <button id="addToCart" @click.prevent="handleClickAdd">
                    <img src="images/addtocart.png" alt="">Add to cart
                </button>
            </div>
            <img :src="item.cover" alt="">
        </div>
        <div class="featuredNameAndPrice">
            <div class="featuredItemName">
                {{ item.name }}
            </div>
            <div class="featuredItemPrice">
                {{ '$ '+item.price.toFixed(2) }}
            </div>
        </div>
    </div>
    `,
    methods: {
        handleClickAdd(item) {
            this.$emit('onbuy', item);
        }
    }
});

Vue.component('featured-items', {
    props: ['items'],
    template: `
    <div class="featuredItems">
        <featured-item @onbuy="handleClickAdd" v-for="item in items" :item="item"></<featured-item>
    </div>
    `,
    methods: {
        handleClickAdd(item) {
            this.$emit('onbuy', item);
        }
    }
});

Vue.component('cart-items', {
    props: ['cart'],
    template: `
    <div>
        <cart-item id='cartProduct' class='cartProduct' @onremove="handleClickRemove" v-for="itemCart in cart" :itemCart="itemCart" :id="itemCart.id"></cart-item>
    </div>
    `,
    methods: {
        handleClickRemove(itemCart) {
            this.$emit('onremove', itemCart);
        }
    }
});

Vue.component('cart-item', {
    props: ['itemCart'],
    template: `
    <div>
        <div class='name'>{{ itemCart.id }}</div>
        <div class='name'>{{ itemCart.name }}</div>
        <div class='price'>{{ '$ '+ itemCart.price }}</div>
        <div class='quantity'>{{ itemCart.quantity }}</div>
        <div> {{ '$ '+ itemCart.price*itemCart.quantity }}</div>
        <button class='deleteProduct' @click.prevent="handleClickRemove">X</button>
    </div>
    `,
    methods: {
        handleClickRemove(itemCart) {
            this.$emit('onremove', itemCart);
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        items: [],
        cart: [],
        searchQuery: '',
        display: 'none',
    },
    mounted() { // первоначальная загрузка каталога
        fetch(`${API_URL}/products`)
            .then((response) => response.json())
            .then((items) => {
                this.items = items;
            });
    },

    methods: {
        handleClickAdd(event) { // добавление товара в корзину
            const idItem = event.target.parentElement.parentElement.parentElement.id;
            const catalogItem = this.items.find(item => item.id == idItem);
            const cartItem = this.cart.find(item => item.id == idItem);
            if (cartItem) { // если товар с таким id уже есть в корзине, то увеличиваем его количество на 1
                cartItem.quantity++
                fetch(`${API_URL}/cart/` + idItem, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: cartItem.quantity,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            } else { // если товара с таким id еще нет в корзине, то добавляем его из каталога
                fetch(`${API_URL}/cart`, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: +idItem,
                        name: catalogItem.name,
                        price: catalogItem.price,
                        quantity: 1
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(() => {
                    fetch(`${API_URL}/cart`)
                        .then((response) => response.json())
                        .then((items) => {
                            this.cart = items;
                        })
                })
            }

        },

        handleClickRemove(event) { //удаление товара. 
            const idItem = event.target.parentElement.id;
            const cartItem = this.cart.find(item => item.id == idItem);
            if (cartItem && cartItem.quantity > 1) { //Уменьшение количества выбранного товара на 1 единицу.
                cartItem.quantity--;
                fetch(`${API_URL}/cart/` + idItem, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: cartItem.quantity,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            } else { // Удаление товара из корзины если осталась 1 единица
                if (confirm('Вы действительно хотите окончательно удалить этот товар из корзины?'))
                    fetch(`${API_URL}/cart/` + idItem, {
                        method: 'DELETE',
                        body: JSON.stringify({}),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).then(() => {
                        fetch(`${API_URL}/cart`)
                            .then((response) => response.json())
                            .then((items) => {
                                this.cart = items;
                            })
                    })
            }
        },

        clearCart() { //очистка корзины
            const articles = this.cart.map((item) => item.id); // создаю массив Id товаров, находящихся в корзине
            if (confirm('Вы действительно хотите очистить корзину?'))
                articles.forEach((elem) => { // для каждого id  отправляется запрос на удаление товара
                    fetch(`${API_URL}/cart/` + elem, {
                        method: 'DELETE',
                        body: JSON.stringify({}),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).then(() => {
                        fetch(`${API_URL}/cart`)
                            .then((response) => response.json())
                            .then((items) => {
                                this.cart = items;
                            })
                    })
                })
        },

        handleClickShowCart(event) { //кнопка видимости корзины
            console.log(event.target.id);
        }
    },

    computed: {
        totalCart() { //подсчет суммы корзины
            return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },

        filteredItems() { // поиск товаров на странице
            const regexp = new RegExp(this.searchQuery, 'i');
            return this.items.filter((item) => regexp.test(item.name))
        }
    }
});