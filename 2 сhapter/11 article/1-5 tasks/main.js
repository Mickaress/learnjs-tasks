// 1 task
alert( null || 2 || undefined ); // 2 

// 2 task
alert( alert(1) || 2 || alert(3) ); // undefined и 2

// 3 task
alert( 1 && null && 2 ); // null

// 4 task
alert( alert(1) && alert(2) ); // undefined

// 5 task
alert( null || 2 && 3 || 4 ); // 3