// console.log("Testing!");
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

//Grab age class
let age = document.querySelector(".age");

 // grab the text field value
 let tamagotachiName = document.querySelector("#name").value;
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
         hunger.innerHTML= this.hunger ;
         sleepiness.innerHTML =this.sleepiness;
         // decrease hunger
        this.hunger --
        // // increase sleepiness
        // this.sleepiness ++;
    }
    sleep(){
        console.log(`${this.name} is sleeping!`);
        hunger.innerHTML= this.hunger ;
         sleepiness.innerHTML =this.sleepiness;
         boredom.innerHTML =this.boredom;
        //  decrease sleepiness
        this.sleepiness --;
        // // increase hunger
        // this.hunger ++;
        // // increase boredom
        // this.boredom ++
    }
    play(){
        console.log(`${this.name} is playing!`);
         boredom.innerHTML =this.sleepiness;
         hunger.innerHTML= this.hunger ;
        /// decrease bordeom
        this.boredom --;
        // // increase hunger
        // this.hunger ++;
    }
    ageUp(){
        console.log(`${this.name} has ageUp!`);
        age.innerHTML =this.age
        this.age ++;
    }
    increaseScale(){
        hunger.innerHTML =this.hunger;
        sleepiness.innerHTML =this.sleepiness;
        boredom.innerHTML =this.boredom;
        
        this.hunger ++;
        this.sleepiness++;
        this.boredom ++;
    } 
    
}
// Instantiate your Tamagotchi (If you created a class)
let tamagotchi = new Game("Sammy");
// tamagotchi.feed();
// tamagotchi.play();
// tamagotchi.sleep();
// tamagotchi.ageUp();
// tamagotchi.increaseScale();



// // event handler to each button
// feed.addEventListener("click", feedTamagotchi);
// sleep.addEventListener("click", sleepTamagotchi);
// play.addEventListener("click", playTamagotchi);
//stop and style in scaling section
// const increaseScaleTamgotchi = () => {
//     tamagotchi.increaseScale();
// }

// stopInterval/ style text in the invital
// hunger.innerHTML = tamagotchi.hunger;
// if(tamagotchi.hunger === 5){
//     hunger.style.color = "yellow";
//     console.log(hunger);
// } else if(tamagotchi.hunger === 10){
//     hunger.style.color = "red";
//     alert(`${tamagotachiName} has passed on from hunger!`);
//     clearInterval(increasingScaleTamagotchi);
//     clearInterval(agingUpTamagotchi);
    
// }
// // sleepiness.innerHTML = tamagotchi.sleepiness;
// if(tamagotchi.sleepiness === 5){
//     hunger.style.color = "yellow";
// } else if(tamagotchi.sleepiness === 10){
//     hunger.style.color = "red";
//     alert(`${tamagotachiName} has passed on from sleepiness!`);
//     clearInterval(increasingScaleTamagotchi);
//     clearInterval(agingUpTamagotchi);
    
// }
// // boredom.innerHTML = tamagotchi.boredom;
// if(tamagotchi.boredom === 5){
//     hunger.style.color = "yellow";
// } else if(tamagotchi.boredom === 10){
//     hunger.style.color = "red";
//     alert(`${tamagotachiName} has passed on from boredom!`);
//     clearInterval(increasingScaleTamagotchi);
//     clearInterval(agingUpTamagotchi);
    
// }
// //setInterval  inside the submit
// setInterval(feedTamagotchi, 2000);
// setInterval(sleepTamagotchi, 2000);
// setInterval(playTamagotchi, 2000);
// setInterval(ageUpTamagotchi, 2000);
// stopInterval for those 
/// Start Button/Game
// let start = document.querySelector(".start");
//click the start button to invoke the game and the action

// Alter button text based on the name that was submited
const submitBTN = document.querySelector(".submit");
submitBTN.addEventListener("click", function alterButtonName (event) {
    event.preventDefault();
    // grab the text field value
    let tamagotachiName = document.querySelector("#name").value;
    // console.log(tamagotachiName);
    // grab the buttonsFeature
    let nameText = document.querySelector(".nameText");
    nameText.innerHTML = `Say Hello to your Tamagotachi Friend, ${tamagotachiName}!`;
    const buttonValue = document.querySelectorAll(".value");
    // console.log(buttonValue);
    // Change the button innerHTML
    buttonValue[0].innerHTML =`Feed ${tamagotachiName}`;
    buttonValue[1].innerHTML =`Put ${tamagotachiName} to Bed`;
    buttonValue[2].innerHTML =`Play with ${tamagotachiName}`;
    
    // tamagotachiName = " ";
    // Age section
 /// Update age function/ call in the function
    const ageUpTamagotchi = () => {
        tamagotchi.ageUp()
        console.log(age)
    //setInterval  inside the submit
        if(tamagotchi.age === 5){
                    console.log("Cute Happy Chicken Eggs")
                    alert(`${tamagotachiName} has evolved`);
                    document.querySelector(".brownEgg").src ="../images/cute-happy-chicken-egg-show-muscle-cartoon-character-chicken-egg-easter-concept_92289-1206.webp"
                } else if(tamagotchi.age === 9){
                    console.log("Little Chick")
                    alert(`${tamagotachiName} has evolved`);
                    document.querySelector(".brownEgg").src ="../images/pngwing.com.png"
                } else if(tamagotchi.age === 13){
                    console.log("Chicken Hen")
                    alert(`${tamagotachiName} has evolved`);
                    document.querySelector(".brownEgg").src ="../images/nTBRr85rc.jpg";
                   }  else if(tamagotchi.age ===19){ clearInterval(agingUpTamagotchi);
                    clearInterval(increasingScaleTamagotchi)
                    alert("Winner Winner Chicken Dinner!")
                    submitBTN.reset();
                }
            
        }
    // stopInterval/ style text in the invital
    const increaseScaleTamgotchi = () => {
        tamagotchi.increaseScale();
 
    if(tamagotchi.hunger === 6 || tamagotchi.sleepiness ===6 || tamagotchi.boredom ===6){
        hunger.style.color = "yellow";
        sleepiness.style.color = "yellow"
        console.log(hunger);
    } else if(tamagotchi.hunger === 11){
        hunger.style.color = "red";
        alert(`${tamagotachiName} has passed on from hunger!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    } else if(tamagotchi.sleepiness === 11){
        sleepiness.style.color = "red";
        alert(`${tamagotachiName} has passed on from sleepiness!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    } else if(tamagotchi.boredom === 11){
        boredom.style.color = "red";
        alert(`${tamagotachiName} has passed on from boredom!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    }
 }
 // feed function
const feedTamagotchi = () => {
    tamagotchi.feed();
    console.log(tamagotchi.hunger);
    // console.log(tamagotchi.sleepiness);
    if(tamagotchi.hunger === 6 ){
        hunger.style.color = "yellow";
        // sleepiness.style.color = "yellow"
        console.log(hunger);
    } else if(tamagotchi.hunger === 11){
        hunger.style.color = "red";
        alert(`${tamagotachiName} has passed on from hunger!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    }
};
 // Sleep function
 const sleepTamagotchi = () =>{
    tamagotchi.sleep();
    // console.log(tamagotchi.hunger);
    console.log(tamagotchi.sleepiness);
    // console.log(tamagotchi.boredom);
    if( tamagotchi.sleepiness ===6){
        sleepiness.style.color = "yellow"
        console.log(hunger);
    } else if(tamagotchi.sleepiness === 11){
        sleepiness.style.color = "red";
        alert(`${tamagotachiName} has passed on from sleepiness!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    }
 }; 
    // play function
const playTamagotchi = () => {
    tamagotchi.play();
    // console.log(tamagotchi.hunger);
    // if reach 10 make it a red color
    console.log(tamagotchi.boredom);
    if(tamagotchi.boredom ===6){
        boredom.style.color = "yellow"
        console.log(hunger);
    } else if(tamagotchi.boredom === 11){
        boredom.style.color = "red";
        alert(`${tamagotachiName} has passed on from boredom!`);
        clearInterval(increasingScaleTamagotchi);
        clearInterval(agingUpTamagotchi);
    }
 };

   // button function for the game 
   feed.addEventListener("click", feedTamagotchi);
   sleep.addEventListener("click", sleepTamagotchi);
   play.addEventListener("click", playTamagotchi);
    
    //setInterval  inside the submit
        let agingUpTamagotchi=setInterval(ageUpTamagotchi, 3000);
        let increasingScaleTamagotchi = setInterval(increaseScaleTamgotchi, 2000);
    //Scale Section
//        
 });
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