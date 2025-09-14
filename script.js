var name = prompt("Введите ваше имя:");
var year = prompt("Введите ваш год рождения:");
var now = prompt("Введите нынешний год:");
function num(name, year, now) {
  var age = now - year;
  return name + ", Ваш возраст " + age;
}
console.log((num(name, year, now)));




function randomaizer(min = 1, max = 100) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
let amoutExamples = +prompt("Введите кол-во решаемых задач");

for (let i = 0; i < amoutExamples; i++) {
  console.log(i);
  let num1 = randomaizer();
  let num2 = randomaizer();
  let symbol = randomaizer(1, 4);
  let examples = 0;

  if (symbol == 1) {
    examples = num1 + num2
    symbol = "+"
  } else if (symbol == 2) {
    examples = num1 - num2
    symbol = '-'
  }
  else if (symbol == 3) {
    examples = num1 * num2
    symbol = '*'
  }
  else {
    examples = num1 / num2
    symbol = "/"
  }
  let question = +prompt(num1 + symbol + num2 + ' = ?')
  alert(
    question === examples
      ?` Ваш ответ верный - ${ question }`
      : `Ваш ответ не верный - ${ question }.Правильный ответ - ${ examples }!`
  );
}



