function main(a = 2, b = 3, c) {
    let result = sum(a, b);
    if (typeof c == 'function') {
        let resultC = c(result);
        return resultC;
    } else {
        return result;
    }
}

console.log(main());

function sum (a, b) { 
    return a + b; 
}
