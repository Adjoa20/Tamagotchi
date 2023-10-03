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
    }
    feedPet(){
        if (this.hunger > 4){
            this.hunger++
        }
    }
    
    sleepPet(){
        if (this.sleep > 6){
          this.sleep++  
        }
    }
    
    boredPet(){
        if (this.boredem < 2){
            this.boredem++
        }
    }
    
    agedPet(){
        if(this.age > 4){
            this.aged++
        }
    }
}


// ADDED IN EVENT LISTENERS
const hungerButton = document.querySelector(".hungerbutton")
hungerButton.addEventListener("click", () => {
    Tamagotchi.hunger
})

const sleepButton = document.querySelector(".sleepbutton")
const boredButton = document.querySelector(".boredbutton")
const ageButton = document.querySelector(".agebutton")