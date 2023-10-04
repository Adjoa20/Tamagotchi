// alert("JS is linked!")
let titleElement = document.getElementById('title2')
let petName = prompt('what is your pet name?')
titleElement.innerHTML = `Welcome To ${petName}'s Room!`

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
        this.isAlive = true;
        this.isLevel = false
    }
    //  ADDING METHODS TO INCREASE HUNGER, SLEEP, ETC 
    increaseValues() {
        const vauleIncreaseInterval = setInterval(() => {
            if (this.isAlive) {
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
        // INCREASE THE AGE INTERVAL 
        const ageUpInterval = setInterval(() => {
            if (this.isAlive) {
                this.age++;
                console.log(`Your pet ${this.name} has aged!: ${this.age}`)
                // LEVEL UP PET AT AGE INCREMENTS 
                this.levelUp()
            } else {
                clearInterval(ageUpInterval)
            }
        }, 500000) //AGE WILL INCREASE EVERY XX MINTUES 
    }
    // NEED TO CHECK'S PET'S DEATH 
    yourPetDied() {
        if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
            this.isAlive = false;
            console.log(`${this.name} has died! WHOOMP WHOOMP`);
        }
    }

    // METHOD CHECK TO SEE IF PET HAS LEVELED UP AFTER A CERTIAN AGE 
    levelUp() {
        const levelUpThresholds = [4, 7]
        if (levelUpThresholds.includes(this.age) && !this.isLevel) {
            this.level();
        }
    }

    // METHOD TO LEVEL UP THE PET 
    level() {
        this.isLevel = true;
        console.log(`${this.name} has leveled up into a new form`)
    }
}

// INSTANTIATED THE TAMAGOTCHI
const tamagotchiPet = new Tamagotchi('petName')

// LOG THE PET TO THE CONSOLE 
console.log(tamagotchiPet)

//TO INCREASE THE VAULE
tamagotchiPet.increaseValues()

