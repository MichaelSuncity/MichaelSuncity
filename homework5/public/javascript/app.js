const app = new Vue({
    el: '#app',
    data: {
        items: [],
        cart: [],
        searchQuery: '',
        display: 'none',
    },
    mounted() { // первоначальная загрузка каталога
        fetch('http://localhost:3000/products')
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
                fetch('http://localhost:3000/cart/' + idItem, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: cartItem.quantity,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(() => {})
            } else { // если товара с таким id еще нет в корзине, то добавляем его из каталога
                fetch('http://localhost:3000/cart', {
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
                    fetch('http://localhost:3000/cart')
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
                fetch('http://localhost:3000/cart/' + idItem, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        quantity: cartItem.quantity,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(() => {})
            } else { // Удаление товара из корзины если осталась 1 единица
                if (confirm('Вы действительно хотите окончательно удалить этот товар из корзины?'))
                    fetch('http://localhost:3000/cart/' + idItem, {
                        method: 'DELETE',
                        body: JSON.stringify({}),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).then(() => {
                        fetch('http://localhost:3000/cart')
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
                    fetch('http://localhost:3000/cart/' + elem, {
                        method: 'DELETE',
                        body: JSON.stringify({}),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).then(() => {
                        fetch('http://localhost:3000/cart')
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