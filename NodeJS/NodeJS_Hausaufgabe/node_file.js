const fs = require("fs");
const readlineSync = require("readline-sync");
// Erstelle ein Interface für die Benutzereingabe
// const rl = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });

// Verwendung der synchronen Veriosn (Sync-Version):

// Beispiel für die Benutzerabfrage
const fileName = readlineSync.question("Gib den Namen der Datei ein: ");
console.log(`Dateiname: ${fileName}`);

const message = readlineSync.question("Gib bitte eine Nachricht ein: ");
console.log(`Nachricht: ${message}`);

// Synchrones Anhängen:
function messageAppend(message, fileName) {
  try {
    fs.appendFileSync(fileName, message + "\n");
    console.log("Nachricht erfolgreich hinzugefügt.");
  } catch (err) {
    console.error("Fehler beim Schreiben in die Datei: ", err);
  }
}

messageAppend(message, fileName);