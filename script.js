// alert("JS Linked")
let titleElement = document.getElementById('title')
let petName = prompt('what is your pet name?')
titleElement.innerHTML = `Hello ${petName}!`

class Tamagotchi{
    constructor(hunger, sleepines, boredem, age) {
        this.hunger = hunger;
        this.sleepines = sleepines;
        this.boredem = boredem;
        this.age = age;
    }
}
const Pearl = new Tamagotchi(4, 6, 2, 4)


