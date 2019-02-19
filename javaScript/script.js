/* Задание 1. 

Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2    
Постфиксная форма записи оператора инкрементрирования увеличивает значение переменной "а" до 2 на данном шаге. Затем = присваивает переменной "с" значение переменной "а".

d = b++; alert(d);           // 1
Префиксная форма записи оператора инкрементрирования оставляет значение переменной "b" без изменений на данном шаге. Затем = присваивает переменной "d" значение переменной "b".
На следующем шаге значение переменной "b" увеличится на 1.

c = (2+ ++a); alert(c);      // 5
Значение переменной "а" равно 2 (5 строка). Постфиксное инкрементрирование увеличивает значение переменной "а" до 3 на данном шаге.
Производится сложение 2 и перменной "а" (уже со значением равным 3). Итого 5. Переменной "с" присваиватся значение 5.

d = (2+ b++); alert(d);      // 4
На данном шаге значение переменной "b" равно 2 ( см. 8 и 10 строка). 
Префиксная форма записи оператора инкрементрирования оставляет значение переменной "b" без изменений на данном шаге.
На следующем шаге значение переменной "b" увеличится на 1.
Производится сложение 2 и перменной "b" (уже со значением равным 2). Итого 4. Переменной "d" присваиватся значение 4.

alert(a);                    // 3
см строку 13


alert(b);                    // 3
см строки 17 и 19
Почему код даёт именно такие результаты?


Задание 2.
var a = 2 ;
var x = 1 + (a *= 2 );

Сначала переменная "а" примет значение равное 4 , т.к. запись в javascript a*=2 это а=а*2 , т.е.4=2*2.
Производится сложение 1 и переменной "а" (уже со значением равным 4). Итого 5.
Переменной "x" присваиватся значение 5.
*/

alert("Задание 3.");

do {
    var a = +prompt("Введите значение для переменной а");
    var b = +prompt("Введите значение для переменной b");
} while (isNaN(a) || isNaN(b));

if (a >= 0 && b >= 0) {
    var difference = Math.abs(a - b);
    alert("Разность a и b равна  по модулю " + difference);
} else if (a < 0 && b < 0) {
    var multiplication = a * b;
    alert("Произведение a и b равно " + multiplication);
} else {
    var sum = a + b;
    alert("Сумма a и b равна " + sum);
}

alert("Задание 4.");

do {
    var a = +prompt("Введите значение для переменной а в промежутке [0...15]");
} while (isNaN(a) || a < 0 || a > 15);

switch (a) {
    case 0:
        alert(a++);
    case 1:
        alert(a++);
    case 2:
        alert(a++);
    case 3:
        alert(a++);
    case 4:
        alert(a++);
    case 5:
        alert(a++);
    case 6:
        alert(a++);
    case 7:
        alert(a++);
    case 8:
        alert(a++);
    case 9:
        alert(a++);
    case 10:
        alert(a++);
    case 11:
        alert(a++);
    case 12:
        alert(a++);
    case 13:
        alert(a++);
    case 14:
        alert(a++);
    case 15:
        alert(a);
}

alert("Задание 5.");

function summaNumbers(x, y) {
    return x + y
}

function differenceNumbers(x, y) {
    return x - y
}

function multiplicationNumbers(x, y) {
    return x * y
}

function divisionNumbers(x, y) {
    return x / y
}

do {
    var x = +prompt("Введите значение для переменной x");
    var y = +prompt("Введите значение для переменной y");
} while (isNaN(x) || isNaN(y));

alert ("Сумма x и у равна "+summaNumbers(x, y));
alert ("Разность x и у равна "+differenceNumbers(x, y));
alert ("Произведение x и у равно "+multiplicationNumbers(x, y));
alert ("Деление x на у равно "+divisionNumbers(x, y));

alert("Задание 6.");

function mathOperation(arg1, arg2, operation) {
    var x = arg1;
    var y = arg2;

    switch (operation) {
        case "сложение":
            alert(summaNumbers(x, y));
            break;
        case "вычитание":
            alert(differenceNumbers(x, y));
            break;
        case "умножение":
            alert(multiplicationNumbers(x, y));
            break;
        case "деление":
            alert(divisionNumbers(x, y));
            break;
    }
}


do {
    var arg1 = +prompt("Введите значение для переменной №1");
    var arg2 = +prompt("Введите значение для переменной №2");
} while (isNaN(arg1) || isNaN(arg2));

var operation = prompt("Выберите арифметическую операцию\nДля определения суммы напишите слово \"Сложение\"\nДля определения разности напишите слово \"Вычитание\"\nДля определения произведения напишите слово \"Умножение\"\nДля определения частного напишите слово \"Деление\"");
operation= operation.toLowerCase();

mathOperation(arg1, arg2, operation);         

/*alert("Задание 7.");

0>null;    //false
0<null;    //false
0==null;   //false
0===null;  //false
0!==null;  //true
0>=null;   //true
0<=null;   //true
0!=null;   //true

Затрудняюсь ответить. Какие-то особенности языка.
*/

alert("Задание 8.");

function power(val, pow) {
    if (pow > 1) {
        return val *= power(val, pow - 1);
    } else if (pow < -1) {
        val = 1 / val;
        pow=Math.abs(pow);
        return val *= power(val, pow - 1);
    } else if (pow == 1) {
        return val;
    } else if (pow == -1) {
        return 1 / val;
    } else if (pow == 0) {
        return 1;
    }
}

do {
    var val = +prompt("Введите число");
    var pow = +prompt("Введите степень числа " + val);
} while (isNaN(val) || isNaN(pow));

alert(power(val, pow));