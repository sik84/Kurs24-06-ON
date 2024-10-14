function interpretiereWetter() {
    // Array mit verschiedenen Wetterlagen
const wetter = ["Sonnig", "Regnerisch", "Schnee", "Windig"];

// Zufällig eine Wetterlage auswählen
const zufallsWetter = wetter[Math.floor(Math.random() * wetter.length)];

// switch-case für verschiedene Wetterlagen
switch (zufallsWetter) {
    case "Sonnig":
      return "Gehe spazieren.";
      
    case "Regnerisch":
      return "Bleibe zu Hause und lese ein Buch";
      
    case "Windig":
      return "Fliege einen Drachen.";
      
    case "Schnee":
      return "Baue einen Schneemann";
      
    default:
      return "Wetterlage unbekannt.";
  }
}

// Die Funktion aufrufen und das Ergebnis anzeigen
console.log(interpretiereWetter());