do {
    a = +prompt("Введите a ");
} while (isNaN(a));


do {
    b = +prompt("Введите b ");
} while (isNaN(a) || a > b);

do {
    h = +prompt("Введите h ");
} while (isNaN(h) || h < 1);

for (factSumm = 0; a <= b; a += h){
    for (i = 1, fact = 1; i <= a; i++){
        fact *= i;
    }
    console.log(`${a} ! = ${fact} `);

    factSumm = factSumm + fact;
    
}
console.log(`Factorial Summ ${factSumm}`);

