
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
