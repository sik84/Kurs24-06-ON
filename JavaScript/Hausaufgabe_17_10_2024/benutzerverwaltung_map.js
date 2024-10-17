// Aufgabe 1: Erstellung der Map:
let benutzerVerwaltungMap = new Map();
benutzerVerwaltungMap.set('Der Siki', {email: 'mastersik@supermaster.com', rolle: 'Admin'});
benutzerVerwaltungMap.set('Franzemann', {email: 'ayesir@whateveryousayofficer.com', rolle: 'User'});
benutzerVerwaltungMap.set('IlivonNili', {email: 'sudo@marshall.com', rolle: 'User'});


// Iteration
let benutzer = ['"Der Siki": mastersik@supermaster.com, Admin', 
'"Franzemann": ayesir@whateveryousayofficer.com, User', '"IlivonNili": sudo@marshall.com, User' ];
 benutzer.forEach((benutzer, index) => {
 console.log(`Benutzername, E-Mail, Rolle ${index}: ${benutzer}`);
 });