var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
 var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
 for (var cards = 1; cards <= 16 ; cards++ )
 var cardLoop = []
 while (cards.length < 16) {
  var random =  Math.floor(Math.random() * 16)
  cardLoop.push(cards[random])
  cards.splice (random, 1)
 }
   return cardLoop
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
