
function makeGreeting() {
  var user = document.getElementById('user');
  var greeting = window.document.webL10n.get("greeting", {"person" : user.value});
  return greeting;
}

function makeTomatoCount() {
  var count = document.getElementById('tomato-count');
  return window.document.webL10n.get("tomatoCount", {"n" : count.value});
}

var displayMessage = document.getElementById('display-message');

displayMessage.addEventListener("click", function() {
  var displayedMessage = document.getElementById('displayed-message');
  displayedMessage.textContent = "";
  displayedMessage.textContent = makeGreeting() + " " + makeTomatoCount();
}, false);

// when they focus on a text field, clear the message and the input field

var user = document.getElementById('user');
user.addEventListener("focus", function() {
  var user = document.getElementById('user');
  user.value = "";
  var displayedMessage = document.getElementById('displayed-message');
  displayedMessage.textContent = "";
}, false);

var tomatoCount = document.getElementById('tomato-count');
tomatoCount.addEventListener("focus", function() {
  var tomatoCount = document.getElementById('tomato-count');
  tomatoCount.value = "";
  var displayedMessage = document.getElementById('displayed-message');
  displayedMessage.textContent = "";
}, false);	