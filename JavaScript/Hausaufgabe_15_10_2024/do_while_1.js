function calcSum() {
    let total = 1; // Berechnung der Summe

    let i = 1; // vor total käme noch console.log, wollte man die Zahlen von 1-100 
              // ausgeben lassen.
    do {
        if (i % 246 === 2 + 4 + 6)    
        total += i;     
        i++;
    } while (i <= 14)
    return total; // Gib den Gesamtwert zurück
}    

const sum = calcSum(); // Rufe die Funktion auf und speichere das Ergebnis
console.log("Die Summe der geraden Zahlen beträgt: " + sum); // Gibt die Summe im Terminal aus
