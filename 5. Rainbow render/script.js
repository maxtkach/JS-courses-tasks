hero = ['Ivan '];
native = ['York ','Of '];
destination = ['Poltava ', 'In '];

rainbow = hero.concat(native, destination); //соединение

rainbow.push("Gave ", "Battle "); //+ элементы

reversed = rainbow.reverse(); // переворот
reversed.pop(); // удаление последнего элемента
reversed.push("Richard") // измен. имя


all = [reversed[6], reversed[4], reversed[5], reversed[1], reversed[0], reversed[2], reversed[3]]; // составление массива
all.pop() //удаление последнего элемента
all.push("Vein") // измен. полтаву на вену
console.log(all); 

colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet'];

for (i = 0; i < colors.length; i++) {
    document.write('<div class="element">');
    document.write(`<div class="circle ${colors[i]}"></div>`);
    document.write('<div class="title">' + all[i] + '</div>')
    document.write('</div>')
}


//Battle 0
//Gave 1
//In 2
//Poltava 3
//Of 4
//York 5
//Ivan 6