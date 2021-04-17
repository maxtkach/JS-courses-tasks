/*A = [];
B = [];
for ( i = 0; i < 25; i++ ) {
    A.push(Math.round(Math.random() * 100));
    B.push(Math.round(Math.random() * 100));
    if (A[i] == B[i]) {
        console.log(`Одинаковые числа: ${A[i]}`);
        
    }
}

console.log(`Массив А: ${A}`);
console.log(`Массив B: ${B}`);

*/


//========================================================================================================================

/*A = [];
B = [];

len = +prompt('Enter lenght of massive');

A.lenght = len;
select = document.createElement('select');
app = document.getElementById("app");
for ( i = 0; i < len; i++ ) {
    A.push(Math.round(Math.random() * 100));
    for (j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue // не подходит, берём следующее
        
    }
    app = document.getElementById("app");
    app.innerHTML = app.innerHTML + "<option>" + i + "</option>";
    console.log(` Простые числа: ${app.innerHTML}, Другие: ${A}`);
    

    
    
}

*/

//==============================================================================

/*

const array = [];
  
len = +prompt('Enter lenght of massive');
array.lenght = len;
for (i = 0; i < len; i++) {
        array.push(Math.round(Math.random() * 100));
    }

document.write("Исходный массив: ", array, "<br>");
var max = array[0];
var min = array[0];
var minIndex = array.indexOf(Math.min(...array));
var maxIndex = array.indexOf(Math.max(...array));
var pos1 = getMaxValue(array, max, maxIndex);
var pos2 = getMinValue(array, min, minIndex);
getNewArray(array, pos1, pos2)
 
function getMaxValue(array, max, maxIndex){
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i], maxIndex = i;
    }
    document.write("Максимальный элемент: ", max, "<br>");
 
    maxIndex = pos1
    return pos1;
}
 
function getMinValue(array, min, minIndex){
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i], minIndex = i;
    }
    document.write("Минимальный элемент: ", min, "<br>");
 
    minIndex = pos2;
    return pos2;
}
 

function getNewArray(array, pos1, pos2){
    [array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]]
    document.write(array) //[2, 5, 6, -7, 12, -8, 0, 3, 15, 9] 
}

//=============================================================================================================================

/*A = [];
 A.length = +prompt('Enter lenght of massive');

for (i = 0, min = -10, max = 50, minIndex = 0, maxIndex = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * (max - min + 1)) + min;

    if (A[i] < A[minIndex]) {
        minIndex = i; 1
    }

    if (A[i] > A[maxIndex]) {
        maxIndex = i;
    }

    if (A[i] == [minIndex] && A[i] == [maxIndex]) {
        M = A[i];
    } else {
        B = A[i];
        console.log(`B равняется: ${B}`);
    }
   
}
 
 console.log(`A равняется: ${A}`);
 console.log(`Min element = ${A[minIndex]}`);
 console.log(`Max element = ${A[maxIndex]}`);


*/









