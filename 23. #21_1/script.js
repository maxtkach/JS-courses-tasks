//1) блок не вываливается за экран

let kvadrat = document.getElementById('kvadr');

let keyFunction = {
    39: function () {
        if (kvadrat.offsetLeft + kvadrat.offsetWidth >= document.documentElement.clientWidth) {
            //2) при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.
            kvadrat.style.left = (parseInt(kvadrat.style.left) - 200) + 'px';
            //3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды
            kvadrat.innerHTML = `<div class="alert">БЭМС!</div>`;
            setTimeout(function () {
                kvadrat.innerHTML = ``;
            }, 2000);
        } else {
            kvadrat.style.left = !kvadrat.style.left ? '100px' : (parseInt(kvadrat.style.left) + 100) + 'px';
        }
    },

    37: function () {
        if (kvadrat.offsetLeft - kvadrat.offsetWidth < document.documentElement.offsetLeft) {
            kvadrat.style.left = (parseInt(kvadrat.style.left) + 200) + 'px';
            kvadrat.innerHTML = `<div class="alert">БЭМС!</div>`;
            setTimeout(function () {
                kvadrat.innerHTML = ``;
            }, 2000);
        } else {
            kvadrat.style.left = !kvadrat.style.left ? '100px' : (parseInt(kvadrat.style.left) - 100) + 'px';
        }
    },

    38: function () {
        if (kvadrat.offsetTop - kvadrat.offsetHeight < document.documentElement.offsetTop) {
            kvadrat.style.top = (parseInt(kvadrat.style.top) + 200) + 'px';
            kvadrat.innerHTML = `<div class="alert">БЭМС!</div>`;
            setTimeout(function () {
                kvadrat.innerHTML = ``;
            }, 2000);
        } else {
            kvadrat.style.top = !kvadrat.style.top ? '100px' : (parseInt(kvadrat.style.top) - 100) + 'px';
        }
    },

    40: function () {
        if (kvadrat.offsetTop + kvadrat.offsetHeight > document.documentElement.clientHeight) {
            kvadrat.style.top = (parseInt(kvadrat.style.top) - 200) + 'px';
            kvadrat.innerHTML = `<div class="alert">БЭМС!</div>`;
            setTimeout(function () {
                kvadrat.innerHTML = ``;
            }, 2000);
        } else {
            kvadrat.style.top = !kvadrat.style.top ? '100px' : (parseInt(kvadrat.style.top) + 100) + 'px';
        }
    },

}

document.onkeydown = function (event) {
    keyFunction[event.keyCode] && keyFunction[event.keyCode]();
}