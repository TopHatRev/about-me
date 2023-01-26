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
function filmQuestion() {
  let Question1 = prompt("What is one my favourite films?.").toLowerCase();

  let filmsILike = ["whiplash", "come and see", "nightcrawler", "dunkirk"];

  for (let i = 0; i < filmsILike.length; i++) {
    if (Question1 == filmsILike[i]) {
      alert("Yes I love " + Question1 + "!");
      userPoints++;
    }
  }
}

// question two
function footballQuestion() {
  let Question2 = confirm("Do I support Norwich");

  if (Question2 == true) {
    alert("Good.");
    userPoints++;
  } else {
    alert(">:(");
  }
}
function houseQuestion() {
  let Question3 = confirm("Have I lived abroad?");

  if (Question3 == true) {
    alert("Indeed.");
    userPoints++;
  } else {
    alert("Nope.");
  }
}
function foodQuestion() {
  let Question4 = prompt("What is one my favourite foods?.").toLowerCase();

  let foodILike = ["ramen", "carbonara", "steak au poivre"];

  for (let i = 0; i < foodILike.length; i++) {
    if (Question4 == foodILike[i]) {
      alert(Question4 + " is peak.");
      userPoints++;
    }
  }
}
function danceQuestion() {
  let Question5 = confirm("What do you think ,  do i like dancing? ");

  if (Question5 == true) {
    alert("Well done ! ");
    userPoints++;
  } else {
    alert("ohh noo");
  }
}

filmQuestion();
footballQuestion();
houseQuestion();
foodQuestion();
danceQuestion();
alert("Well done " + user + "! You scored " + userPoints + "/5");
