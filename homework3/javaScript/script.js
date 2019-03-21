alert("Задание 1.\nС помощью цикла while вывести все простые числа в промежутке от 0 до 100.");
var a = 2;

while (a < 100) {
    a++;
    var flag = true;
    for (var b = 2; b < a; b++) {
        if (a % b == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        document.write(a + " ");
    }
}

alert("Задание 2.\nТовары в корзине хранятся в массиве.\nЗадачи:\na. Организовать такой массив для хранения товаров в корзине;\nb. Организовать функцию countBasketPrice , которая будет считать стоимость корзины.");

var sum = 0;
var cart = [
    ["яблоки", 80, 2], // второй столбец корзины - цена за 1 кг в руб., третий столбец - кол-во кг.
    ["груши", 60, 1],
    ["бананы", 50, 3],
    ["апельсины", 70, 4],
    ]
function countBasketPrice (quantity,price){
    return price*quantity
}

for (var i=0; i<cart.length; i++){
    alert("В корзине находятся "+cart[i][0]+" - "+cart[i][2]+" кг по цене "+cart[i][1]+" руб. за кг");
    sum+=countBasketPrice(cart[i][2],cart[i][1]);
}
alert ("Сумма корзины составляет "+sum+" руб.")

alert("Задание 3.\nВывести с помощью цикла for числа от 0 до 9, не используя тело цикла.");
for (var i = 0; i < 10; alert(i++)) {}

alert("Задание 4.\nНарисовать пирамиду с 20 рядами с помощью console.log");
for (var str = ""; str.length < 21;) {
    console.log(str += "*");
}
