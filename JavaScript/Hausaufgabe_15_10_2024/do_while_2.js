// Aufgabe 2: Zweiter Teil der Aufgabe: Quersumme
function calcQuersumme(zahlenArray) {
    let total = 0; // Berechnung der Summe
    let numString = zahlenArray.toString();

    let i = 0; // vor total käme noch console.log, wollte man die Zahlen von 1-100 
              // ausgeben lassen.
    do { 
        total += parseInt(numString[i]);  
        i++;
    } while ((i < numString.length));
    return total; // Gib den Gesamtwert zurück
}    

const zahlenArray = 248;
const sum = calcQuersumme(zahlenArray); // Rufe die Funktion auf und speichere das Ergebnis
console.log("Die Quersumme beträgt: " + sum); // Gibt die Summe im Terminal aus



// Erster Teil der Aufgabe 2: Einfache Addition von 1-14
// let i = 1; // vor total käme noch console.log, wollte man die Zahlen von 1-100 
              // ausgeben lassen.
              // do { // Prüfen, ob 'i' eine gerade Zahl ist
                // total += i;  
                // i++;
            // } while (i <= 14)
            // return total; // Gib den Gesamtwert zurück