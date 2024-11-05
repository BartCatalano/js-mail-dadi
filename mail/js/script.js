// dichiaro l'array vuoto
const mailArray = ["giorgio@hotmail.com", "giovanni@gmail.com", "franco@mail.it"];
//prompt inserimento mail
const mailUser = prompt ("Inserisci la tua Mail"); 

//controllo mail verificata
let currentcontrol = false;
for (let i = 0; i < mailArray.length; i++) {
    const currentMail = mailArray[i];
    if (mailUser === currentMail) {   
        currentcontrol=true;
        break;
        
    }
}
console.log(currentcontrol);

if (currentcontrol) {
    console.log("Mail Verificata");
} else{
    console.log("Mail NON Verificata");
}

