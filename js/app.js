// console.log("Testing!");

// 1. Game objecy/class
// event listeners/handlers that call methods in your game object or class.
class Game {
    constructor(name) {
        // attribute
        this.name =name;
        // metrices (1 -10) --- when they reach 10 the pet will die
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        // increase every x mintuess
        this.age = 0;
    }
    // methods
    feed(){
        // decrease hunger
        this.hunger --;
        // increase sleepiness
        this.sleepiness ++;
    }
    sleep(){
        //  decrease sleepiness
        this.sleepiness --;
        // increase hunger
        this.hunger ++;
    }
    play(){
        /// decrease bordeom
        this.boredom --;
        // increase hunger
        this.hunger ++;
    }
    ageUp(){
        this.age ++;
    }
}
// Instantiate your Tamagotchi (If you created a class)
let tamagotchi = new Game("Sammy");



// Alter button text based on the name that was submited
const alterButtonName = () => {
    // grab the text field value
    const tamagotachiName = document.querySelector("#name").value;
    // console.log(tamagotachiName);
    // grab the buttonsFeature
    const buttonValue = document.querySelectorAll(".value");
    // console.log(buttonValue);
    // Change the button innerHTML
    buttonValue[0].innerHTML =`Feed ${tamagotachiName}`;
    buttonValue[1].innerHTML =`Put ${tamagotachiName} to Bed`;
    buttonValue[2].innerHTML =`Play with ${tamagotachiName}`;
    
}

// function that allows the dropdown option
let gamesRules = document.querySelector(".gamesRules");
gamesRules.addEventListener("click", () => {
    
        let rules = gamesRules.nextElementSibling;
        // console.log(rules);
        gamesRules.classList.toggle("active");
        if (gamesRules.classList.contains("active")) {
            rules.style.display = "block";
        } else {
            rules.style.display = "none";
        }
});