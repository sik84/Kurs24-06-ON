function getAge() {
    return Math.floor(Math.random() * 100); 
}

function checkAge() {
    // Holt sich den Wert aus der Funktion getAge()
    age = getAge();
    console.log("Dein Alter ist: " + age);

    if (age >= 0 && age <= 12) {
        console.log("Kind")
    } else if (age >= 13 && age <= 17) {
        console.log("Jugendlicher")
    } else if (age >= 18 && age <= 64) {
        console.log("Erwachsener")
    } else if (age > 64) {
        console.log("Senior")
    } else {
        console.log("Du bist erwachsen!")
      }
}

checkAge();