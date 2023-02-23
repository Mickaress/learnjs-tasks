let n = Number (prompt ('Введите число', ''));
let mas = [];

for (let i = 2; i <= n; i++) {
    let num = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            num++;
        }
    }
    if (num == 2) {
        mas.push(i);
    }
}

alert (mas);