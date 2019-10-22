// Back end
// creates fullDeck variable
var fullDeck = function() {
  var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  // creates the two arrays for a deck
  var buildDeck = [];
  // creates the empty array of buildDeck
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      // goes through each suit and pairs it with each rank, then loops untill complete
      buildDeck.push(rank + " of " + suit);
      // compindes all new pairing into buildDeck
    });
  });
  return buildDeck;
  // fills empty array and makes it the fullDeck variable
}
// Front end
$(document).ready(function() {

  var finalDeck = fullDeck();
  // takes finalDeck and makes it the same to fullDeck
  finalDeck.forEach(function(build) {
    $("ul#deck").append("<li>" + build + "</li>");
    // goes through each array values and makes it an li element
  });

});
