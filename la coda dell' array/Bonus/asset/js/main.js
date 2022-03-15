var numbers = [ ];

var listLenght = prompt("Inserisci la lunghezza della lista: ");

var extractedElements = prompt ( "Inserisci quanti elementi vanno estratti dal fondo dell'array. ") ;

extractedElements = Number(extractedElements);

let container = document.getElementById("container");





for( i = 0; i <= listLenght; i++ ){
    var random = Math.floor(Math.random() * 100);
    numbers.push( random );
}

for( i = numbers.length - 1 ; i > numbers.length - extractedElements - 1 ; i-- ){
    container.innerHTML += `<div>${numbers[i]}</div>`;

};
