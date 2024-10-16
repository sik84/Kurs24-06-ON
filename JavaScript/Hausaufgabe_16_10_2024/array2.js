// Erstellen eines Arrays mit Großstädten:
const StadtArray = ["London", "Berlin", "Tokyo", "Moskau", "Seoul"];

// Iteration und Stadt in Großbuchstaben

StadtArray.forEach(stadt => {
    console.log(stadt.toUpperCase());
});

// Neues Array, das Anzahl der Buchstaben in  jedem Stadtnamen speichert 
const BuchstabenAnzahlArray = StadtArray.map(stadt => stadt.length);
console.log(BuchstabenAnzahlArray);