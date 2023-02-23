let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4, так как массивы это объекты, shoppingCart и fruits ссылаются на один массив, и добавляя значение в shoppingCart, мы добавляем тоже самое значение в fruits