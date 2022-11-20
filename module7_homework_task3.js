/* Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.*/

function createEmptyObj() {
    let obj = {};
    return obj;
};

const obj1 = createEmptyObj(); // создаем объект при помощи функции

console.log(obj1); // проверяем объект
