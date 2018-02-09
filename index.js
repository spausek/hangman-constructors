var prompt = require('prompt');
var Letter = require('./letters.js');
var Word = require('./word.js');

prompt.start();

hangMan = {
	wordsCorrect: 0,
	guesses: 8,
	lettersGuessed: [],
	selectedWord: null,
	wordArray: Letter.words,
	startGame: function(word){
		this.resetGuess();
		this.selectedWord = new Word.Word(this.wordArray[Math.floor(Math.random()*this.wordArray.length)]);
		this.selectedWord.displayLetters();
		console.log('Welcome to Around The World Hangman!');
		console.log(this.selectedWord.hangManWordDisplay() + '\n');

	},

	resetGuess: function(){
		this.guesses = 8;
	},
	
	

}
	