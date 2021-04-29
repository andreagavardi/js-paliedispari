/* Palidroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


/**
 * ## parola palindroma
 * inserisci una parola e valuta se essa è palindroma o meno: non cambia se letta da dx a sx o viceversa
 * @param { string } word ingresso ha bisogno di una parola (stringa)
 * @returns {boolean} 
 */

function isPalindroma(word) {
    //inizializzo due contatori i primo parte da inizio stringa, il secondo dalla fine
    var i =0;
    var k =word.length - 1;
    var metàParola = Math.floor(word.length / 2);//math.floor nel caso la lunghezza della parola fosse un numero dispari: in quel caso la lettera al centro non ha importanza
    //continuo il ciclo finchè i contatori raggiungono metà parola
    while (i <= metàParola && k >= metàParola) {
       var palindroma;
        if (word[i] != word[k]){
            palindroma = false;
        }else {

            palindroma = true;
        }    
        i++;
        k--;
        
    }
    return (palindroma);
}

var parolaUtente = prompt('inserisci una parola');
var result = isPalindroma(parolaUtente);
console.log(result);

/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Se non sappiamo cos'é una parola palindroma Googliamo! */