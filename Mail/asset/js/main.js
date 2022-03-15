let emailList = [
    "James@mail.com",
    "Benjamin@mail.com",
    "Mia@mail.com",
    "Lucas@mail.com",
    "Henry@mail.com",
    "Amelia@mail.com",
    "Isabella@mail.com"
];

let userMail = prompt("Inserisci la tua Email:");
var registrated = false;
let container = document.getElementById("container");

for( i=0 ; i < emailList.length ; i++ ) {

    

    if( userMail == emailList[i] ){
        registrated = true;
    }
    

};
if(registrated == true){
    container.innerHTML = ("La tua Email è registrata.");
}
else{
    container.innerHTML = ("La tua Email non è registrata.");
}