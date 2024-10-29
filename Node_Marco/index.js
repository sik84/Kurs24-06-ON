// console.log("Hallo Welt!")

function checkUser() {
    var name = "John"
    let age = 25
    
    if(age > 18) {
        console.log(name + " is an adult")
    } else {
        console.log(name + " is a chils")
    }
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }
    return
}

checkUser()