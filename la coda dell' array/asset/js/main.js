var numbers = [ 1, 20 ,5 ,10 ,34 ,110 ,23 ,30 ,9 ,7 ,69 ,78 ,99 ];

let container = document.getElementById("container");

for( i = numbers.length - 1 ; i > numbers.length - 6 ; i-- ){
    container.innerHTML += `<div>${numbers[i]}</div>`;

};