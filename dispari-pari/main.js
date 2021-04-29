/*Pari e Dispari:

*/
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt('scegli: pari o dispari?').toLocaleLowerCase();
console.log(scelta);
var numUtente = Number(prompt('inserisci un numero da 1 a 5'));
console.log(numUtente);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/**
 * ## Genera numeri random
 * genera numeri random compresi tra due estremi: min e max (compresi)
 * @param {number} min 
 * @param {number} max 
 * @returns {number} numero casuale tra min e max
 */
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numPC = numRandom(1,5);
console.log(numPC);


//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var sum = numPC + numUtente;
console.log(sum);

/**
 * ## pari o dispari
 * valuta se un numero inserito è pari oppure dispari
 * @param {number} numero 
 * @returns {string} pari o dispari
 */
function isPari(numero){

    if (numero % 2 == 0){
        return 'pari';
    }
    return 'dispari';
}

var result = isPari(sum);
console.log(result);

//Dichiariamo chi ha vinto.

if (scelta == result){      
    alert('hai vinto!!')
   } else{
      alert('peccato hai perso, ritenta')
    }