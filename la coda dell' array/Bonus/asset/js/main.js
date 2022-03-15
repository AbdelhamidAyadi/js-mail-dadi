var numbers = [ ];

var listLenght = prompt("Inserisci la lunghezza della lista: ")

let container = document.getElementById("container");



for( i = 0; i <= listLenght; i++ ){
    var random = Math.floor(Math.random() * 100);
    numbers.push( random );
}

for( i = numbers.length - 1 ; i > numbers.length - 6 ; i-- ){
    container.innerHTML += `<div>${numbers[i]}</div>`;

};
