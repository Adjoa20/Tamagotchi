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

// UPDATE VAULE
document.querySelector("hunger").innerText = Tamagotchi.hunger;
document.querySelector("sleepiness").innerText = Tamagotchi.sleepines;
document.querySelector("boredom").innerText = Tamagotchi.boredom;
document.querySelector("age").innerText = Tamagotchi.age;

// let timer = setInterval(() => {
//     this.age()
//     if (this.hunger >=10, this.sleepines >=10, this.bored >=10){
//         alert("Your Pet Has Died")
//     }
// })

// BTN EVENT LISTENERS

const hungerButton = document.querySelector("hunger.button").addEventListener("click", function(){
    alert("clicked")
})

// let sleepButton = document.querySelector("sleep.butoon")
// let boredButton = document.querySelector("bored.button")
// let onButton = document.querySelector("on.button")
// let offButton = document.querySelector("off.button")



