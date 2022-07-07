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
        console.log(`${this.name} is eating!`);
        // decrease hunger
        this.hunger --;
        // increase sleepiness
        this.sleepiness ++;
    }
    sleep(){
        console.log(`${this.name} is sleeping!`);
        //  decrease sleepiness
        this.sleepiness --;
        // increase hunger
        this.hunger ++;
    }
    play(){
        console.log(`${this.name} is playing!`);
        /// decrease bordeom
        this.boredom --;
        // increase hunger
        this.hunger ++;
    }
    ageUp(){
        console.log(`${this.name} has ageUp!`);
        this.age ++;
    }
}
// Instantiate your Tamagotchi (If you created a class)
let tamagotchi = new Game("Sammy");
// tamagotchi.feed();
// tamagotchi.play();
// tamagotchi.sleep();
// tamagotchi.ageUp();

// select button to save to variable
let feed = document.querySelectorAll(".value")[0];
// console.log(feed);
let sleep = document.querySelectorAll(".value")[1];
// console.log(sleep);
let play = document.querySelectorAll(".value")[2];
// console.log(play);

// the stats display
let hunger = document.querySelector(".hunger");
let sleepiness = document.querySelector(".sleepiness");
let boredom = document.querySelector(".boredom");
// feed function
const feedTamagotchi = () => {
    tamagotchi.feed();
    hunger.innerHTML =tamagotchi.hunger;
    // console.log(tamagotchi.hunger);
    sleepiness.innerHTML = tamagotchi.sleepiness;
    // console.log(tamagotchi.sleepiness);
};
 // Sleep function
 const sleepTamagotchi = () =>{
    tamagotchi.sleep();
    sleepiness.innerHTML =tamagotchi.sleepiness;
    // console.log(tamagotchi.hunger);
    hunger.innerHTML = tamagotchi.hunger;
    // console.log(tamagotchi.sleepiness);
 }; 
    // play function
const playTamagotchi = () => {
    tamagotchi.play();
    hunger.innerHTML =tamagotchi.hunger;
    // console.log(tamagotchi.hunger);
    boredom.innerHTML = tamagotchi.boredom;
    // console.log(tamagotchi.sleepiness);
 };
// event handler to each button
feed.addEventListener("click", feedTamagotchi);
sleep.addEventListener("click", sleepTamagotchi);
play.addEventListener("click", playTamagotchi);

// Age section
 //Grab age class
let age = document.querySelector(".age");
/// Update age function/ call in the function
const ageUpTamagotchi = () => {
    tamagotchi.ageUp()
    age.innerHTML = tamagotchi.age;
}
//setInterval
setInterval(ageUpTamagotchi, 2000);

/// Start Button/Game
let start = document.querySelector(".start");
//click the start button to invoke the game and the action

// Alter button text based on the name that was submited
const alterButtonName = () => {
    // grab the text field value
    const tamagotachiName = document.querySelector("#name").value;
    // console.log(tamagotachiName);
    // grab the buttonsFeature
    const nameText = document.querySelector(".nameText");
    nameText.innerHTML = `Say Hello to your Tamagotachi Friend, ${tamagotachiName}!`;
    const buttonValue = document.querySelectorAll(".value");
    // console.log(buttonValue);
    // Change the button innerHTML
    buttonValue[0].innerHTML =`Feed ${tamagotachiName}`;
    buttonValue[1].innerHTML =`Put ${tamagotachiName} to Bed`;
    buttonValue[2].innerHTML =`Play with ${tamagotachiName}`;
    
}

// function that allows the dropdown option for the rules
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