console.log("Up and running!");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
	];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}

};

var flipCard = function() {
	var cardId = parseInt(this.getAttribute('data-id'),10);
	console.log("User flipped " + (cards[cardsId].rank));
	this.src = cards[cardsId].cardImage;
	cardsInPlay.push(cards[cardsId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
};





