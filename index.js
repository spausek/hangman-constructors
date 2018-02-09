var prompt = require('prompt');
var Letter = require('./letters.js')

prompt.start();

hangMan = {
	wordsCorrect: 0,
	guesses: 8,
	lettersGuessed: [],
	wordArray: Letter.words
	startGame: function(word){
		//need word constructor function...i think
	}
	

}
	console.log(hangMan.wordArray);