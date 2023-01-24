let userPoints = 0;

alert("Welcome to my guessing game.");

let user = prompt("What can I call you?");

// ensure the user ACTUALLY gives their name
while (!user) {
  user = prompt("I really need your name, please give it.");
}

// lament at Ronald
if (user == "Matt") {
  alert("Ew.");
}

alert("Hello there " + user + "! I'm so glad you decided to visit my website!");

// question one
let filmQuestion = prompt("What is one my favourite films?.").toLowerCase();

let filmsILike = ["whiplash", "come and see", "nightcrawler", "dunkirk"];

for (let i = 0; i < filmsILike.length; i++) {
  if (filmQuestion == filmsILike[i]) {
    alert("Yes I love " + filmQuestion + "!");
    userPoints++;
  }
}

// question two
let footballQuestion = confirm("Do I support Norwich");

if (footballQuestion == true) {
  alert("Good.");
  userPoints++;
} else {
  alert(">:(");
}

let houseQuestion = confirm("Have I lived abroad?");

if (houseQuestion == true) {
  alert("Indeed.");
  userPoints++;
} else {
  alert("Nope.");
}

let foodQuestion = prompt("What is one my favourite foods?.").toLowerCase();

let foodILike = ["ramen", "carbonara", "steak au poivre"];

for (let i = 0; i < foodILike.length; i++) {
  if (foodQuestion == foodILike[i]) {
    alert(foodQuestion + " is peak.");
    userPoints++;
  }
}

alert("Well done " + user + "! You scored " + userPoints + "/4");