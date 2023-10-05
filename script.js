// alert("JS is linked!")
let titleElement = document.getElementById('title2')
let petName = prompt('what is your pet name?')
titleElement.innerHTML = `Welcome To ${petName}'s Room!`
const panda = document.getElementById("red-panda")

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
        }, 10000)
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
        }, 10000) //AGE WILL INCREASE EVERY XX MINTUES 
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
        const levelUpThresholds = [5]
        if (levelUpThresholds.includes(this.age) && !this.isLevel) {
            this.level();
        } 
    }

    // METHOD TO LEVEL UP THE PET 
    level() {
        if (this.isLevel === true) {
            // THIS IS THE SECOND LEVEL UP SRC
            panda.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82afdd83-1747-4ca9-9676-c9b76aea6bb4/df5ui95-652b6d48-e79b-4c33-bbfd-d779bf68b002.png/v1/fill/w_1280,h_1261/ming_lee_red_panda__5__by_roaldmt_df5ui95-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2MSIsInBhdGgiOiJcL2ZcLzgyYWZkZDgzLTE3NDctNGNhOS05Njc2LWM5Yjc2YWVhNmJiNFwvZGY1dWk5NS02NTJiNmQ0OC1lNzliLTRjMzMtYmJmZC1kNzc5YmY2OGIwMDIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CF3whl8EzjKEG762d4gu2beZtn2iJ3ZP0KDUNWQwdbQ"
        } else {
            // THIS IS THE FIRST LEVEL UP
            panda.src = "https://thelowell.org/wp-content/uploads/2022/05/IMG_8039-475x475.png"
        }
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
if (tamagotchiPet) {
    tamagotchiPet.displayValues()
}

// LOG THE PET TO THE CONSOLE 
console.log(tamagotchiPet)

//TO INCREASE THE VAULE
tamagotchiPet.increaseValues()

// ADDED IN THE FUNCTIONS FOR THE BUTTONS
function feedPet() {
    if (tamagotchiPet.hunger < 10) {
        tamagotchiPet.hunger++ 
    }
    tamagotchiPet.yourPetDied()
    tamagotchiPet.displayValues()
}

function sleepPet() {
    if ( tamagotchiPet.sleepiness < 10){
        tamagotchiPet.sleepiness++
    }
        tamagotchiPet.yourPetDied()
        tamagotchiPet.displayValues()
}

function boredPet() {
    if ( tamagotchiPet.boredom < 10){
        tamagotchiPet.boredom++
    }
        tamagotchiPet.yourPetDied()
        tamagotchiPet.displayValues()
}



// ADDED IN EVENT LISTENERS FOR BUTTONS
const hungerButton = document.getElementById("hungry")
hungerButton.addEventListener("click", () => {
    feedPet()
    console.log("inside hunger button event listener")
})


const sleepButton = document.getElementById("sleepiness")
sleepButton.addEventListener("click", () => {
    sleepPet()
    console.log("inside sleep button event listener")
})

const boredButton = document.getElementById("boredom")
boredButton.addEventListener("click", () => {
    boredPet()
    console.log("inside bored button event listener")
})

// const ageButton = document.getElementById("age")
// ageButton.addEventListener("click", () => {
//     agedPet()
//     console.log("inside aged button event listener")
// })

// TOGGLING LIGHT / DARK MODE
let buttonTag = document.querySelector('#lightsoff').addEventListener('click', () => {
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.remove("lightMode")
    }
    document.body.classList.add('darkMode')
    // buttonTag.setAttribute('class', 'darkMode')
})
// console.log('clicked')

let buttonTag1 = document.querySelector('#lightson').addEventListener('click', () => {
    if (document.body.classList.contains("darkMode")) {
        document.body.classList.remove("darkMode")
    }
    document.body.classList.add('lightkMode')
    // buttonTag.setAttribute('class', 'darkMode')
})