
do{
    a = +prompt(`Введите число 1`)
} while (isNaN(a))

do{
    b = +prompt(`Введите число 2`)
} while (isNaN(b))

function add() {
    addition = a + b;
    console.log(`Результат ${a} + ${b} = ${addition}`);
}

function sub() {
    subtraction = a - b;
    console.log(`Результат ${a} - ${b} = ${subtraction}`);
    
}

function mult() {
    multiplication = a * b;
    console.log(`Результат ${a} * ${b} = ${multiplication}`);
    
}

function divis() {
    division = a / b;
    console.log(`Результат ${a} / ${b} = ${division}`);
    
}

add();
sub();
mult();
divis();


