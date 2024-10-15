// Aufgabe in einer for-Schleife: 
// function calcCountAboveThreshold(array, threshold){

//    let count = 0;

//    for (let i = 0; i < array.length; i++) {
//        if (array[i] > threshold) {
//            count++;
//        } 
//    }
//    return count;
//}    
    
//    const zahlenArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
//    const schwellenwert = 50;
//    const ergebnisCount = calcCountAboveThreshold(zahlenArray, schwellenwert);
//    console.log("Anzahl der Elemente über dem Schwellenwert: " + ergebnisCount);


// Aufgabe in der while-Schleife:
// function calcCountAboveThreshold(array, threshold){

//    let count = 0;

//    let i = 0;
//    while (i < array.length) {
//        if (array[i] > threshold) {
//        count++;
//    }
//        i++;
//    }
//    return count;
//}

// const zahlenArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
// const schwellenwert = 50;
// const ergebnisCount = calcCountAboveThreshold(zahlenArray, schwellenwert);
// console.log("Anzahl der Elemente über dem Schwellenwert: " + ergebnisCount);

// Aufgabe in der do-while-Schleife:
function calcCountAboveThreshold(array, threshold) {
    let count = 0; // Zähler für die Anzahl der Elemente über dem Schwellenwert
    let i = 0; // Initialisiere den Index

    do {
        if (array[i] > threshold) { // Prüfe, ob das Element größer ist als der Schwellenwert
            count++; // Erhöhe den Zähler
        }
        i++; // Erhöhe den Index
    } while (i < array.length); // Wiederhole, solange der Index kleiner ist als die Länge des Arrays

    return count; // Gib die Anzahl der Elemente zurück
}

const zahlenArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;
const ergebnisCount = calcCountAboveThreshold(zahlenArray, schwellenwert);
console.log("Anzahl der Elemente über dem Schwellenwert: " + ergebnisCount);