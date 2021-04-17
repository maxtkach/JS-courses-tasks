/*
do {
    n = +prompt("Введите n ");
} while (isNaN(n) || n<= 2);
do {
    n = +prompt("Введите n ");
} while (isNaN(n) || n<= 2);

/*for (i = 1; fibonacci = -n;){
    
    
}
fib2 = 1;
fib1 = 1
fib3 = 0

for (i = 0; i < n; i++) {
        fib3 = i + fib2
        console.log(fib3);
        
    }
*/



/*function fib(n) { +prompt("Введите n "); }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757*/


do {
    n = +prompt("Введите n ");
} while (isNaN(n) || n<= 2);

n0 = 1;
n1 = 1;
n2 = 0;

console.log(n2);
console.log(n0);
console.log(n1);

for (i = 3; i <= n; i++){
    n2 = n0 + n1;
    console.log(n2);
    n0 = n1;
    n1 = n2;

}
