const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

function date() {
    var date = new Date;
    return date
}
app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    fs.readFile('./db/products.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }

        res.send(data);
    });
});

app.get('/cart', (req, res) => {
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }

        const cart = JSON.parse(data);

        res.send({
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            items: cart,
        });
    });
});

app.post('/cart', (req, res) => {
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }

        const cart = JSON.parse(data);
        cart.push(req.body);
        fs.writeFile('./db/cart.json', JSON.stringify(cart), () => {
            res.send({
                item: req.body,
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
            });
        });
    });

    fs.readFile('./db/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }
        const stats = JSON.parse(data);
        stats.push('добавлено: название товара ' + req.body.name + ' время: ' + date());
        fs.writeFile('./db/stats.json', JSON.stringify(stats), () => {

        });
    });
});

app.patch('/cart/:id', (req, res) => {
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }

        let cart = JSON.parse(data);
        cart = cart.map((item) => {
            if (+item.id === +req.params.id) {
                item.quantity = req.body.quantity
            }
            return item;
        });

        fs.writeFile('./db/cart.json', JSON.stringify(cart), () => {
            res.send({
                item: cart.find((item) => +item.id === +req.params.id),
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            });
        });
    });

    fs.readFile('./db/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }
        const stats = JSON.parse(data);
        stats.push('изменено: название товара ' + req.body.name + ' время: ' + date());
        fs.writeFile('./db/stats.json', JSON.stringify(stats), () => {

        });
    });
});

app.delete('/cart/:id', (req, res) => {
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }

        let cart = JSON.parse(data);
        const idItem = cart.findIndex(item => +item.id === +req.params.id);
        cart.splice(idItem, 1);
        fs.writeFile('./db/cart.json', JSON.stringify(cart), () => {
            res.send({
                total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            });
        });
    });

    fs.readFile('./db/stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.send('Произошла ошибка');
        }
        const stats = JSON.parse(data);
        stats.push('удалено: название товара ' + req.body.name + ' время: ' + date());
        fs.writeFile('./db/stats.json', JSON.stringify(stats), () => {

        });
    });
});

app.listen(3000, () => {
    console.log('Server has been started');
});