// Домашка урока № 22
// "use strict"
// console.log('Я учу JS!');

// -------------------------
// https://youtu.be/5V8IeATHr4w?t=779

// Переменная для хранения цвета глаз пользователя
// let userEyeColor = "green";

// let user;
// let userName = "Вася";
// user = userName;
// console.log(user);


// Домашка урока № 23

// Ответ к задаче 1
/*
    let num = 0;
    while (num < 5) {
        console.log(num);
        num++;
    }
*/

/*
    let num = 0;
    do {
        console.log(num);
        num++;
    } while (num < 5);
*/

/*
    for (let num = 0; num < 5; num++) {
        console.log(num);
    }
*/

// Ответ к задаче 3
/*
    let num = 0;
    while (num < 3) {
        console.log(`Число: ${num}`);
        num++;
    }
*/

// Ответ к задаче 4
/* stopFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size);
        if (size == 1) {
            break stopFor;
        }
    }
}
*/

// Задания по числам 

// Задача 1
/*
    let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
    console.log(numOne);
*/

// Задача 2
/*
    let value = parseFloat("135.58px");
    console.log(value);
*/

// Задача 3
/*
    let value = 58 + "Фрилансер";
    if (isNaN(value)) {
        console.log('Результат выражения NaN')
    }
*/

// Задача 4 
/*
    console.log(Math.max(10, 58, 39,  -150, 0));
*/

// Задача 5
// console.log(Math.floor(58.858));

// Задания по строкам

// Задача 2
/*
    let text = "фрилансер";
    let n = text[5];
    console.log(n);
*/

// Задача 4
/*
    let text = 'фрилансер';
    console.log(text.toUpperCase());
*/

// Задача 5
/*
    let text = 'фрилансер';
    console.log(text.slice(3, 6));
*/


// Домашка урока № 24

// Задания по функциям
// Задача 4 
/*
    'use strict'
    let showMessage;
    if (2 > 1) {
        showMessage = function () {
            console.log('Сообщение');
        };
    };
    showMessage();
*/

// Задания по массивам
// Задача 2
/*
    let users = ['Ваня', 'Иштван',];
    users.push('Оля');
    let itemIndex = users.indexOf('Иштван');
    users.splice(itemIndex, 1,  'Петя');
    users.shift();
    console.log(users[0]);
    users.unshift('Маша', 'Паша');
    console.log(users);
*/

// Задача 3 
/*
    let arr = ['Ваня', 'Иштван', 'Оля',];
    let removed = arr.splice(arr.indexOf('Иштван'), 1);
    console.log(arr);
    console.log(removed);
*/

// Задача 4
/*
    let str = 'Ваня,Иштван,Оля';
    let arr = str.split(',');
    console.log(arr);
*/

// Задания по DOM

// Задача 1
/*
    let element = document.querySelector('[data-say-hi]');
    console.log(element.dataset.sayHi);
*/

// Задача 2
/*
    let list = document.querySelector('.dom-list');
    const listItems = list.children;
    let targetItem = listItems[1];
    console.log(targetItem);
*/

// Задача 3
/*
    let collection = document.querySelectorAll('.like');
    console.log(collection);
*/

// Задания по метрике

// Задача 1
/*
    const doc = document.documentElement;
    const windowWidth = doc.clientWidth;
    console.log(windowWidth);
    const windowTotalWidth = window.innerWidth;
    console.log(windowTotalWidth);
    const scrollWidth = windowTotalWidth - windowWidth;
    let answer = document.querySelector('.answer');
    answer.innerHTML = scrollWidth;
*/

// Задача 2
/*
    function scrollPage () {
        window.scrollBy(0, 100);
    }
    setTimeout(scrollPage, 1000);
*/

// Задача 3
/*
    function coords (number) {
        let lesson = document.querySelector(`.lesson--${number}`);
        let browserCoords = lesson.getBoundingClientRect();
        console.log(`Lesson ${number} top : ` + browserCoords.top);
        console.log(`Lesson ${number} document : ` + (browserCoords.top + window.pageYOffset));
        console.log(`Lesson ${number} left : ` + browserCoords.left);
    }
    coords(22);
    coords(23);
    coords(24);
*/