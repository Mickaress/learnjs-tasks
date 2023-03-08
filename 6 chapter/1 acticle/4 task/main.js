// цикл
function printList(list) {
    let tmp = list;
  
    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }  
} 
// рекурсия
function printList(list) {
    alert(list.value);
  
    if (list.next) {
        printList(list.next);
    }
}