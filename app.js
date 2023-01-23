let userName = prompt('What is your name?');
alert('Hello there ' + userName);

let question1 = confirm("Did I live in Hungary for two and a half years?");
if(question1 == true) {
  alert("Correct.");
} else {
  alert("Incorrect.");
}

let question2 = confirm("Was I born in Norwich?");
if(question2 == true) {
  alert("Correct.");
} else {
  alert("Incorrect.");
}

let question3 = confirm("Do I have a half brother?");
if(question3 == true) {
  alert("Correct.");
} else {
  alert("Incorrect.");
}

let question4 = confirm("Do I support Ipswich Town?");
if(question4 == true) {
  alert("Incorrect.");
} else {
  alert("Correct.");
}
