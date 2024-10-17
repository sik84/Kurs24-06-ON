// Set mit besuchten Seiten
let besuchteSeiten = new Set();
// 2. Füge fünf Seitennamen hinzu, wobei zwei dupliziert sind
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Profil');      // Duplikat
besuchteSeiten.add('Startseite');  // Duplikat

// 3. Gib die Anzahl der eindeutigen Seiten aus
console.log("Anzahl der eindeutigen Seiten:", besuchteSeiten.size);

// 4. Funktion, die alle Seitennamen ausgibt
function zeigeSeiten() {
    besuchteSeiten.forEach(seite => {
        console.log("Besuchte Seite: " + seite);
    });
}

// Rufe die Funktion auf
zeigeSeiten();