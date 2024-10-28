const fs = require('fs').promises;

async function readAndWrite() {
    try{
        // 1. Lesen der Datei
        const data = await fs.readFile('beispiel_Textdatei.txt', 'utf8');
        // 2. Inhalt ändern
        const modifiedData = data.replace(data, 'neuer Text');
        // 3. geänderte Inhalte in die Datei geschrieben wird
        await fs.writeFile('beispiel_Textdatei.txt', modifiedData, 'utf-8');

    } catch(err) {
        console.error('Es gab einen Fehler beim Schreiben der Datei', err);
    }
};

readAndWrite();