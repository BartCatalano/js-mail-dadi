let dadoUser = Math.floor((Math.random() * 6) + 1);
console.log(dadoUser);
let dadoPc = Math.floor((Math.random() * 6) + 1);
console.log(dadoPc);


 if (dadoPc>dadoUser) {
     console.log(`Hai perso!, io ho tirato ${dadoPc} e tu ${dadoUser}`);
 }
 else if (dadoPc<dadoUser){
     console.log(`Hai vinto!, io ho tirato ${dadoPc} e tu ${dadoUser}`);
 }
 else {
     console.log(`Pareggio!, io ho tirato ${dadoPc} e tu ${dadoUser}`);
 }
    






