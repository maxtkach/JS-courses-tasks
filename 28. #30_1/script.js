function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function afterFirstPromise(number) {
    console.log(number)
};

function afterSecondPromise(number) {
    console.log(number)
};

function afterThirdPromise(number) {
    console.log(number)
};

let afterFunctions = [afterFirstPromise, afterSecondPromise, afterThirdPromise];

//Создать обертку runAfter(), которая получает в качестве аргумента
//– 3 функции в массиве, которые выполнятся после окончания всех 3-х асинхронных операций.



function runAfter(valuesArr) {
    // для каждого числа во входящем массиве valuesArr применить соответствующую ф-ю с массива afterFunctions;
    // afterFunctions[0](valuesArr[0]);
    // afterFunctions[1](valuesArr[1]);
    // afterFunctions[2](valuesArr[2]);
    valuesArr.forEach(function(item, i, arr) {
        afterFunctions[i](valuesArr[i]);
    });
};

let getPromise = timer => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(timer);
        }, timer);
    })
}


//Сделать 3 асинхронные операции (симулируем при помощи функции getPromise(), внутри которой находится
//setTimeout(resolve(),timer)). В каждом промисе (getPromise) возвращается число от 0 до 100.
Promise
    .all([
        getPromise(1000),
        getPromise(2000),
        getPromise(3000)
    ])
    .then(
        all => {
            runAfter(all);
        })