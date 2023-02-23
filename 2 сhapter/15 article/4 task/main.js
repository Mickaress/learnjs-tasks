function pow(x, n) {
    return x ** n;
  }

let x = prompt ('Введите x', '');
let n = prompt ('Введите n', '');

if (n < 1) {
    alert (`Вы ввели степень меньше 1!`);
  } else {
    alert (pow(x, n));
  }