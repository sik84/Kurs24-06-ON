// Erstellung eines 2D-Arrays:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Funktion, die die Diagonalsumme der Matrix berechnet:
const diagonalsumme = matrix.reduce((accumulator, currentValue, index) => {
    return accumulator + currentValue[index]; // Greift auf das diagonale Element zu
}, 0);

console.log(diagonalsumme); // Ausgabe: 15 (1 + 5 + 9)