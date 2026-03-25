// SMART AQUARIUM FEEDER APP



// Values, Data Types, and Operations
// Store fish name and food quantity

let fishName = " Gold Fish";
let foodQuantity = 5; // in grams
// Display feeding information
console.log("Feeding " + fishName + " with " + foodQuantity + " grams of food.");

// Stringing Characters Together
// Create a reminder message
let reminderMessage = "Don't forget to feed" + fishName + " daily!";
console.log(reminderMessage);

// Control Structures and Logic
// Check if it's feeding time
let currentHour = 10;
let feedingHour = 10;

// Pseudocode:
// IF current time equals feeding time
//    show reminder
// ELSE
//    do nothing
if (currentHour === feedingHour) {
    console.log("It's time to feed" + fishName + "!");
} else {
    console.log("Not feeding time yet.");
}   

// Building Arrays
// List of fish in aquarium
let fishList = ["Goldfish", "Betta", "Guppy"];
console.log(fishList);

// Using Arrays
// Loop through fish list
// Pseudocode:
// FOR each fish in fishList
//    print fish name
fishList.forEach(function(fish) {
  console.log("Fish:", fish);
});

// Creating and Using Objects
let fishObject = {
  name: "Goldfish",
  type: "Freshwater",
  feedingTime: "10 AM"
};
// Access object properties
// Pseudocode:
// PRINT fish name and feeding time
console.log("Fish Name: " + fishObject.name);
console.log("Feeding Time: " + fishObject.feedingTime);
