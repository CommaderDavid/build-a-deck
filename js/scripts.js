// Back end
var fullDeck = function() {
  var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var buildDeck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      buildDeck.push(rank + " of " + suit);
    });
  });
  return buildDeck;
}
// Front end
$(document).ready(function() {

  var finalDeck = fullDeck();
  finalDeck.forEach(function(build) {
    $("ul#deck").append("<li>" + build + "</li>");
  });

});
