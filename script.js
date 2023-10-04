// alert("JS is linked!")
let titleElement = document.getElementById('title2')
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
increaseValues(){
    const vauleIncreaseInterval = setInterval(() => {
        if (this.isAlive){
            this.hunger++;
            this.sleepiness++;
            this.boredom++;

            // CHECK TO SEE IF PET IS DEAD 
            this.yourPetDied();
            // THIS IS TO DISPLAY THE METRICS 
            console.log(`${this.name}'s hunger level is at: ${this.hunger}`);
            console.log(`${this.name}'s sleepiness level is at: ${this.sleepiness}`);
            console.log(`${this.name}'s wants to be played with: ${this.boredom}`);
        } else {
            // IF THE PET IS DEAD, CLEAR THE INTERVAL 
            clearInterval(vauleIncreaseInterval);
        }
    }, 9000)
  }
}

// NEED TO CHECK'S PET'S DEATH 
yourPetDied() {
    if (this.hunger >=10 || this.sleepiness >=10 ||  this.boredom >=10){
        this.isAlive = false;
        console.log(`${this.name} has died! WHOOMP WHOOMP`)
    }
}

// INSTANTIATED THE TAMAGOTCHI
const tamagotchiPet = new Tamagotchi('petName')

// LOG THE PET TO THE CONSOLE 
console.log(tamagotchiPet)

