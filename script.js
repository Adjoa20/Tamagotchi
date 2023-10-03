// alert("JS Linked")
let titleElement = document.getElementById('title')
let petName = prompt('what is your pet name?')
titleElement.innerHTML = `Welcome To ${petName}'s Room!`

class Tamagotchi{
    constructor(name) {
        this.name = name
        this.hunger = 4;
        this.sleepines = 6;
        this.boredom = 2;
        this.age = 4;
        this.dead = false;
    }
    feedPet(){
        if (this.hunger > 4){
            this.hunger--
        }
    }
    
    sleepPet(){
        if (this.sleep > 6){
          this.sleep-- 
        }
    }
    
    boredPet(){
        if (this.boredem < 2){
            this.boredem--
        }
    }
    
    agedPet(){
        if(this.age > 4){
            this.aged--
        }
    }

// INCREASE VALUE FOR TAMAGOTCHI 
    increaseUp(){
    this.hunger++;
    this.sleepines++;
    this.boredom++;
    this.age++;
    if (this.hunger >=10 || this.sleepines >=10 || this.boredom >=10){
        alert("Your Pet Has Died")
        }
    }

    deadPet(){

    }

}
// SET INTERVAL
let timer = setInterval(() => {
    this.age()
    if (this.hunger >=10, this.sleepines >=10, this.bored >=10){
        alert("Your Pet Has Died")
    }
},6000)



// ADDED IN EVENT LISTENERS
const hungerButton = document.querySelector(".hungerbutton")
hungerButton.addEventListener("click", () => {
    this.hunger()
})

const sleepButton = document.querySelector(".sleepbutton")
sleepButton.addEventListener("click", () => {
    this.sleepines
})

const boredButton = document.querySelector(".boredbutton")
boredButton.addEventListener("click", () => {
    this.boredom
})

const ageButton = document.querySelector(".agebutton")
ageButton.addEventListener("click", () => {
    this.age
})