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

for( i=0 ; i < emailList.length ; i++ ) {

    

    if( userMail == emailList[i] ){
        registrated = true;
    }
    

};
if(registrated == true){
    console.log("La tua Email è registrata.");
}
else{
    console.log("La tua Email non è registrata.");
}