/*
Практическое задание

    1. Дан большой текст, в котором для оформления прямой речи используются одинарные
    кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

    2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на
    двойную.

    3. * Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
        При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
        a. Имя содержит только буквы.
        b. Телефон имеет вид +7(000)000-0000.
        c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
        d. Текст произвольный.
        e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой
         и сообщить пользователю об ошибке.
*/
const $transform = document.querySelector('#transform');
let text = "'Duis parI'atur: 'Exercitation mollit proident.' Ea dolor'e sit cupidatat: 'Esse conse'ctetur?' Dolore id est cupidatat.'";
document.getElementById('example').innerText = text;
$transform.addEventListener('click', () => {
    //замена символов в тексте
    text = text.replace(/'/g, '"'); //заменяю все ' на "
    text = text.replace(/\b"\b/g, '\''); //заменяю все ", расположенные внутри слов, обратно на '
    //text = text.replace(/\B'|'\B/g, '"');  альтернативный вариант вместо 2 строк
    document.getElementById('example2').innerText = text;
})

// задание № 3
const $submit = document.querySelector('#submit');
$submit.addEventListener('click', () => {

    //проверка поля имени
    const $nameUser = document.getElementById('nameUser').value;
    const nameUserPattern = /^[A-Za-zА-яа-я]+$/;
    const $nameBorder = document.getElementById('nameUser');
    if (!nameUserPattern.test($nameUser)) {
        $nameBorder.classList.add('invalid');
    } else {
        $nameBorder.classList.remove('invalid');
    }

    //проверка поля номера телефона
    const $phoneUser = document.getElementById('phoneUser').value;
    const phoneUserPattern = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
    const $phoneBorder = document.getElementById('phoneUser');
    if (!phoneUserPattern.test($phoneUser)) {
        $phoneBorder.classList.add('invalid');
    } else {
        $phoneBorder.classList.remove('invalid');
    }

    //проверка поля адреса эл. почты
    const $emailUser = document.getElementById('emailUser').value;
    const emailUserPattern = /^[A-Za-z]+@mail.ru$|^[A-Za-z]+\.[A-Za-z]+@mail.ru$|^[A-Za-z]+-[A-Za-z]+@mail.ru$/;
    const $emailBorder = document.getElementById('emailUser');
    if (!emailUserPattern.test($emailUser)) {
        $emailBorder.classList.add('invalid');
    } else {
        $emailBorder.classList.remove('invalid');
    }

    //проверка текстового поля
    const $textUser = document.getElementById('textUser').value;
    const textUserPattern = /./;
    const $textBorder = document.getElementById('textUser');
    if (!textUserPattern.test($textUser)) {
        $textBorder.classList.add('invalid');
    } else {
        $textBorder.classList.remove('invalid');
    }

    const $message = document.getElementById('message');
    if (!nameUserPattern.test($nameUser)  || !phoneUserPattern.test($phoneUser) ||
        !emailUserPattern.test($emailUser) || !textUserPattern.test($textUser)) {
        $message.innerText = '';
        $message.innerText = '\nИмя содержит только буквы.\n Телефон должен быть в формате +7(***)***-****.\n  E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.\n Поле сообщения не должно быть пустым\nВсе поля должны быть заполнены'
    } else {
        alert('Ваше сообщение отправлено!');
        $message.innerText = '';
    }
})
//сброс
const $reset = document.querySelector('#reset');
$reset.addEventListener('click', () => {
    const $message = document.getElementById('message');
    $message.innerText = '';
})