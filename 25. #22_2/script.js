let inputIn = document.querySelector('.inputIn'); // input
let button = document.querySelector('button'); // button
var colorChanger = document.getElementById('shape');
var select = document.querySelector('select');

button.onclick = function (){
    //console.log("Нажато")
    //console.log(inputIn.value) // input Value
    let val = inputIn.value;
    colorChanger.style.backgroundColor = `${val}`;
    fun1();
}

function fun1(){
    //for (let i = 0; i < select.options.length; i++) {
        //console.log(select.options[i].selected)
    //}
    if (select.options[2].selected == true) {
        colorChanger.style.width = '200px';
        colorChanger.style.borderRadius = '100px'; 
    } if (select.options[1].selected == true) {
        colorChanger.style.width = '400px';
        colorChanger.style.borderRadius = '0px'; 
    } if (select.options[0].selected == true) {
        colorChanger.style.width = '200px';
        colorChanger.style.borderRadius = '0px'; 
    }
}



