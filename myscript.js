const parola = prompt("dammi una parola");

let reverseParola = "" ;

let verifica = isPalindroma(parola , reverseParola);

console.log(verifica);

function isPalindroma(x , y) {

    
    for (let i = x.length; i >= 0 ; i--) {
        
        return y += x.charAt(i);        
    }
          
    if (x == y) {
        return ("la parola è palindroma");
    }
    else {
        return ("la parola NON è palindroma");
    }
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







// var parola=prompt("Inserire una parola: "), prova="";
// for (l=parola.length-1; l>=0; l--)
// {
// document.write(parola.charAt(l)); //Stampo le lettere invertite al fine di vedere se è giusto il procedimento
// prova+=parola.charAt(l);
// }
// if(parola == prova)
// document.write("La parola e' palindroma </br>");
// else
// document.write("La parola non e' palindroma </br>");