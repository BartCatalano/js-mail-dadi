// dichiaro l'array vuoto
const mailArray = ["giorgio@hotmail.com", "giovanni@gmail.com", "franco@mail.it"];
//prompt inserimento mail
const mailUser = prompt ("Inserisci la tua Mail"); 

//controllo mail verificata
let currentMail = 0;
for (let i = 0; i < mailArray.length; i++) {
    const currentMail = mailArray[i];
    if (mailUser === currentMail) {
    
        alert("mail inserita verificata")
    }
    else{
         alert("La mail inserita non è verificata!")
        console.log("False");
    }

}
