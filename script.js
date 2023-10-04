// alert("JS is linked!")
let titleElement = document.getElementById('title')
let petName = prompt('what is your pet name?')
titleElement.innerHTML = `Welcome To ${petName}'s Room!`

class Tamagotchi{
    constructor(name){
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
        this.isAlive = true;
    }
//  ADDING METHODS TO INCREASE HUNGER, SLEEP, ETC 

}

// INSTANTIATED THE TAMAGOTCHI
const tamagotchiPet = new Tamagotchi('petName')

