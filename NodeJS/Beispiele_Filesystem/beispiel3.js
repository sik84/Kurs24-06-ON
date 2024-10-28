const fs = require('fs');

async function readAndWrite() {
    try{
        // 1. Lesen der Datei
        const data = fs.readFileSync('beispiel_Textdatei.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text synchrone Ausführung');
        // 3. geänderte Inhalte in die Datei geschrieben wird
        fs.writeFileSync('beispiel_Textdatei.txt', modifiedData, 'utf-8');
        console.log('Es war alles erfolgreich!');

    } catch(err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei', err);
    }
};

readAndWrite();

// Lesehausaufgabe bis einschließlich Kapitel 5!