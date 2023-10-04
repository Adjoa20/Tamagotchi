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

                // THIS IS DISPLAY VALUES ON SCREEN
                this.displayValues();
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
                alert(`Your pet ${this.name} has aged!: ${this.age}`)
                // LEVEL UP PET AT AGE INCREMENTS 
                this.levelUp()
                // THIS IS DISPLAY AGE ON SCREEN
                this.displayValues();
            } else {
                clearInterval(ageUpInterval)
            }
        }, 5000) //AGE WILL INCREASE EVERY XX MINTUES 
    }
    // NEED TO CHECK'S PET'S DEATH 
    yourPetDied() {
        if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
            this.isAlive = false;
            alert(`${this.name} has died! WHOOMP WHOOMP`);
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
        alert(`${this.name} has leveled up into a new form`)
    }
    //ADDING DISPLAY OF VALUES
    displayValues() {
        document.getElementById("hunger-display").innerHTML = `Hunger: ${this.hunger}/10`;
        document.getElementById("sleepiness-display").innerHTML = `Sleepiness: ${this.sleepiness}/10`;
        document.getElementById("boredom-display").innerHTML = `Boredom: ${this.boredom}/10`;
        document.getElementById("age-display").innerHTML = `Age: ${this.age}`;
    }
}

// INSTANTIATED THE TAMAGOTCHI
const tamagotchiPet = new Tamagotchi('petName')

// LOG THE PET TO THE CONSOLE 
console.log(tamagotchiPet)

//TO INCREASE THE VAULE
tamagotchiPet.increaseValues()

// ADDED IN THE FUNCTIONS FOR THE BUTTONS
function feedPet() {
    tamagotchiPet.feedPet
}

function sleepPet() {
    tamagotchiPet.sleepPet
}

function boredPet() {
    tamagotchiPet.boredPet
}

function agedPet() {
    tamagotchiPet.agedPet
}

// ADDED IN EVENT LISTENERS FOR BUTTONS
let hungerButton = document.querySelector(".hungry")
hungerButton.addEventListener("click", () => {
    tamagotchiPet.feedPet()
})


const sleepButton = document.getElementById(".sleep")
sleepButton.addEventListener("click", () => {
    tamagotchiPet.sleepPet()
})

const boredButton = document.getElementById(".bored")
boredButton.addEventListener("click", () => {
    tamagotchiPet.boredPet()
})

const ageButton = document.getElementById(".age")
ageButton.addEventListener("click", () => {
    tamagotchiPet.agedPet()
})


