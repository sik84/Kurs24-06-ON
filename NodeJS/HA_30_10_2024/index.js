import catFacts from 'cat-facts';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Zitat

function showCatFact() {
    const fact = catFacts.random(); // Zufälliger Katzenfakt
    // Hier kommt der Rest von deinem Code
    // Beispielcode:
const factBox = boxen(chalk.green(fact), { padding: 1,
margin: 1, borderStyle: 'double' });
console.log(factBox); // Zitat in einer Box anzeigen
}

// Benutzerinteraktion
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
        type: 'confirm',
        name: 'catFacts',
        message: 'Möchtest Du ein Katzenfakt erfahren?',
        default: true,
        },
        ]);
        // 1. Wenn der Benutzer "Ja" wählt, zeige ein Zitat an
        // 2. Wenn der Benutzer "Nein" wählt, beende das Programm
        if (answers.catFacts) {
            showCatFact(); // Zitat anzeigen
            console.log(chalk.yellow('Danke, dass du das Programm genutzthast!'));
        } else {
            console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
    }
}

async function askForUsername() {
    const answers = await inquirer.prompt([
    // Hier ergänzen
        {
        type: 'input',
        name: 'username',
        message: 'Bitte gib deinen Nutzernamen ein: ',
        },
    ]);
    return answers.username; // Benutzername zurückgeben
    }

// Hauptfunktion
async function main() {
    // 1. Begrüße den Benutzer mit einer farbigen Nachricht
// 2. Starte die Benutzerinteraktion
console.log(chalk.blue('Willkommen zu deinem inspirierenden Zitat-Tool!'));
    await askForNewCatFact(); // Starte die Benutzerinteraktion
    const username = await askForUsername(); // Ruft askForUsername() auf
    console.log(`Vielen Dank für die Benutzung des Programms, ${username}!`); // Gibt den Benutzernamen aus
}

main();