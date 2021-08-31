// const parola = prompt("dammi una parola");

// let reverseParola = "" ;

// let verifica = isPalindroma(parola , reverseParola);

// console.log(verifica);

// function isPalindroma(x , y) {

    
//     for (let i = x.length -1 ; i >= 0 ; i--) {
        
//      y += x.charAt(i);  
     
//     }
          
//     if (x == y) {
//         return ("la parola è palindroma");
//     }
//     else {
//         return ("la parola NON è palindroma");
//     }
// }

// PARI O DISPARI

let somma = 0 ;

let pariODispari = prompt("scegli se pari o dispari").toUpperCase;


if ((pariODispari == "PARI" || pariODispari == "DISPARI")) {
    alert("NON FARE IL FURBO");
} 

let numeroScelto = parseInt(prompt("adesso scegli un numero da 1 a 5"));

let numPc = numRandom (1 , 5);

console.log(numPc)

if (!(numeroScelto >= 1 && numeroScelto <= 5)) {
    
    alert("non hai inserito un numero tra 1 e 5");

} else{
    somma += numeroScelto + numPc;
} 

console.log(somma);


function isEven(value) {
    if (value%2 == 0) {
        return true;
    } else 
        return false;
}

function numRandom (min,max) {
   let x = Math.floor(Math.random() * (max - min) + min);
   return x;
}



// for (let i = parola.length; i >= 0 ; i--) {
    
//     reverseParola += parola.charAt(i);
    
// }

// console.log(reverseParola);

// if (parola == reverseParola) {
//     console.log("la parola è palindroma");
// }
// else {
//     console.log("la parola NON è palindroma");
// }
