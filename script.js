var name = prompt("Введите ваше имя:");
var year = prompt("Введите ваш год рождения:");
var now = prompt("Введите нынешний год:");
function num(name, year, now) {
  var age = now - year;
  return name + ", Ваш возраст " + age;
}
console.log((num(name, year, now)));




let n = +prompt("Сколько примеров?");
for (let i = 1; i <= n; i++) {
  console.log(primer());
}

function primer() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let num = Math.floor(Math.random() * 4); 
  let number;
  let res;

  if (num === 0) {
    number = a + " + " + b;
    res = a + b;
  } else if (num === 1) {
    number = a + " - " + b;
    res = a - b;
  } else if (num === 2) {
    number = a + " * " + b;
    res = a * b;
  } else {
    number = a + " / " + b;
    res = a / b;
  }

  let answer = +prompt("Реши: " + number);

  if (answer === res) {
    return "Ваш ответ верный: " + answer;
  } else {
    return "Ваш ответ не верный: " + answer + "! Правильный ответ: " + res + "!";
  }
}