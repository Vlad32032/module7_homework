/* Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/

const obj1 = { // создаем объект
  a: 1,
  b: 2,
  c: 3,
};

function isKey (str, obj) {
  for (let key in obj) {
    if (key === str) {
      return true
    }
  }
  return false
};

console.log(isKey("a", obj1)); // проверяем функцию 
console.log(isKey("f", obj1));