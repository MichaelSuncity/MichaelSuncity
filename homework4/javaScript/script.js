/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.*/
while (isNaN(number) || number < 0) {
    var number = +prompt("Введите число в диапозоне от 0 до 999");
}

var result = {};

console.log("Задание №1\n" + transform(number));

function transform(number) {
    if (number > 999) {
        result = null;
        return "Число больше 999"
    } else {
        result.units = number % 10;
        result.tens = Math.floor((number % 100) / 10);
        result.hundreds = Math.floor(number / 100);
        return " \"единицы\" " + result.units + " \"десятки\" " + result.tens + " \"сотни\" " + result.hundreds;
    }
}

/*Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/
var cart = [
    {
        product: "яблоки",
        price: 80,
        count: 2,
    },
    {
        product: "груши",
        price: 60,
        count: 1,
    },
    {
        product: "бананы",
        price: 50,
        count: 3,
    },
    {
        product: "апельсины",
        price: 70,
        count: 4,
    },
]

function countBasketPrice(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].count;
    }
    return sum;
}

console.log("Задание №2\nОбщая стоимость корзины " + countBasketPrice(cart));
