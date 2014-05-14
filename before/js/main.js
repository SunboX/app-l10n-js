function makeGreeting() {
  var user = document.getElementById('user');
  var greeting = "Hi, " + user.value + "!";
  return greeting;
}

function makeTomatoCount() {
  var count = document.getElementById('tomato-count').value;
  return "You have " + count + " tomatoes!";
}

var displayMessage = document.getElementById('display-message');
displayMessage.addEventListener("click", function() {
  var displayedMessage = document.getElementById('displayed-message');
  displayedMessage.textContent = "";
  displayedMessage.textContent = makeGreeting() + " " + makeTomatoCount();
}, false);

function reset(element) {
  element.value = "";
  var displayedMessage = document.getElementById('displayed-message');
  displayedMessage.textContent = "";
}

var user = document.getElementById('user');
user.addEventListener("focus", function() {
  var user = document.getElementById('user');
  reset(user);
}, false);

var tomatoCount = document.getElementById('tomato-count');
tomatoCount.addEventListener("focus", function() {
  var tomatoCount = document.getElementById('tomato-count');
  reset(tomatoCount);
}, false);