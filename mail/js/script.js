// dichiaro l'array vuoto
const mailArray = ["giorgio@hotmail.com", "giovanni@gmail.com", "franco@mail.it"];
//prompt inserimento mail
const mailUser = prompt ("Inserisci la tua Mail"); 

//controllo mail verificata
let currentMail = 0;
let currentcontrol = false;
for (let i = 0; i < mailArray.length; i++) {
    const currentMail = mailArray[i];
    if (mailUser === currentMail) {   
        currentcontrol=true;
        console.log(currentcontrol);
    }
    else{
        console.log(currentcontrol);
    }
    
}


