// Erstellung eines Zufalls-Arrays:

const zufallsArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
console.log(zufallsArray);

// Filterung der geraden Zahlen:
const geradeZahlen = zufallsArray.filter(zahl => zahl % 2 === 0);
console.log(geradeZahlen);

// Zahlenarry [22 18 8 50] nun addieren:
ZahlenArray = [22, 8, 18, 50]
let summe = 0; // 1. Schritt: Summenvariable initialisieren

ZahlenArray.forEach(zahl => {
    summe += zahl; // 2. Schritt: aktuelle Zahl zur Summe hinzufügen
});

console.log(summe); // 3. Schritt: Summe ausgeben
