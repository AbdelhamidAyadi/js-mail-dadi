//comunque non so se è corretto il esercizio ,il problema che non ho capito bene cosa devo fare ,ho provato a fare quello che ho capito.

let container = document.getElementById("container");
let dado = [1 ,2 ,3 ,4 ,5 ,6];

let randomComputer = Math.floor(Math.random() *5 );
let randomUser = Math.floor(Math.random() *5 );

let dadoRisultatoComputer = dado[randomComputer];
let dadoRisultatoUser = dado[randomUser];

console.log(dadoRisultatoComputer);
console.log(dadoRisultatoUser);


if( dadoRisultatoComputer > dadoRisultatoUser){
    container.innerHTML = "Hai perso!" ;
}else if( dadoRisultatoComputer == dadoRisultatoUser ){
    container.innerHTML = "Pareggio!" ;
}else if (dadoRisultatoComputer < dadoRisultatoUser){
    container.innerHTML = "Hai vinto!" ;
}