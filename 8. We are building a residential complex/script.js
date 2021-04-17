function createGrass() {
    var html = '<table>';
    var x = 3
    html += '<tr>';
    html += '<td class="grass">' + ` ` + '</td>';
    while (x != 0) {
        if (x == 2) {
            html += '<td class="n-road">' + ` ` + '</td>';
            html += '<td id="cars">' +
            '<img src="images/cars/first.svg" alt="" class="car">' +
            '<img src="images/cars/second.svg" alt="" class="car">' +
            '<img src="images/cars/third.svg" alt="" class="car">'+
                         
            '</td>'
        } else {
            html += '<td class="n-road">' + ` ` + '</td>';
            html += '<td id="cars">' +
            '<img src="images/cars/first.svg" alt="" class="car">' +
            '<img src="images/cars/second.svg" alt="" class="car">'+
                         
                '</td>'
            
            
            
        }
        
        x -= 1;
        
        
    }
    html += '<td class="n-road">' + ` ` + '</td>';
    html += '<td class="grass">' + ` ` + '</td>';
    
    html += '</tr>';

    html += '<tr >' + '<td class = "w-road">' + ` ` + '</td>' + '</tr>'

    

    function createOneHouse(imgColor) {
        html += `<td id='zone'>`
        html += '<table>'
        html += '<tr>' + 
            '<td>' + ` ` + '</td>' +
            '<td>' + imgColor + '</td>'+
            '<td>' + imgColor + '</td>' +
            '<td>' + ` ` + '</td>' +
            
            '</tr>'
        
        html += '<tr>' + 
            '<td>' + imgColor + '</td>'+
            '<td>' + ` ` + '</td>'+
            '<td>' + ` ` + '</td>' +
            '<td>' + imgColor + '</td>'+
            
            '</tr>'
        
        html += '<tr>' + 
            '<td>' + ` ` +  '</td>' +
            '<td>' + imgColor + '</td>'+
            '<td>' + imgColor + '</td>' +
            '<td>' + ` ` + '</td>' +
            
            '</tr>'
        html += '</table>'
        html += `</td>`

        
    }
    html += '<tr>'
    html += '<td class="grass">' + ` ` + '</td>'
    html += '<td class="n-road">' + ` ` + '</td>';
    createOneHouse('<img src="images/home--blue.svg" alt="" class="car">')
    html += '<td class="n-road">' + ` ` + '</td>';
    createOneHouse('<img src="images/home--pink.svg" alt="" class="car">')
    html += '<td class="n-road">' + ` ` + '</td>';
    createOneHouse('<img src="images/home--purple.svg" alt="" class="car">')
    
    
    html += '<td class="n-road">' + ` ` + '</td>';
    html +='<td class="grass">' + ` ` + '</td>' 
    html += '</tr>'

    
    function createPole(pole) {
        html += '<td class="sports" id="zone">' + pole + '</td>';
        
    }

    html += '<tr>' + '<td  class = "w-road">' + ` ` + '</td>' + '</tr>'

    html += '<tr>'
    html += '<td class="grass">' + ` ` + '</td>' 
    html += '<td class="n-road">' + ` ` + '</td>';
    createPole(`<img src="images/football-field.svg" alt="" class="sport">`);
    html += '<td class="n-road">' + ` ` + '</td>';
    createPole(`<img src="images/swimming.svg" alt="" class="sport">`);
    html += '<td class="n-road">' + ` ` + '</td>';
    createPole(`<img src="images/ice-hockey.svg" alt="" class="sport">`);
    html += '<td class="n-road">' + ` ` + '</td>';
    html +='<td class="grass">' + ` ` + '</td>'
    html += '</tr>'
    

     
    

    window.onload = function() {
        document.getElementById('container').innerHTML = html + '</table>';
    };

}



createGrass();