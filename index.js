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
		this.selectedWord = new Word(this.wordArray[Math.floor(Math.random()*this.wordArray.length)]);
		this.selectedWord.displayLetters();
		console.log('Welcome to Around The World Hangman!');
		console.log(this.selectedWord.hangManWordDisplay() + '\n');

	},

	resetGuess: function(){
		this.guesses = 8;
	},

	promptUser: function(){
		prompt.get(['guessLetter'], function(err, result){
			console.log('');
			console.log('You guessed this letter: ' + result.guessLetter);

			var userGuess = this.selectedWord.checkLetter(result.guessLetter);

			if (userGuess === 0){
				if (this.lettersGuessed.indexOf(result.guessLetter) < 0){
					this.guessLetter.push(result.guessLetter);
					this.guesses --;
					console.log('Wrong Letter!');
					}

				else{
					console.log('Correct!');
				}

				
					if (this.selectedWord.findTheWord()) {
						console.log('You got it! The country was ' + this.selectedWord);
						console.log('Nice!')

						return;
					}
				
			}

			 console.log('Guesses remaining: ', this.guesses);
		    console.log(this.selectedWord.wordDisplay());
				console.log("");
		    console.log('Letters already guessed: ' + this.lettersGuessed);


		    if ((this.guesses > 0) && (this.selectedWord.found === false)){
		    	this.promptUser();
		    } else if(this.guesses === 0){
			    	console.log('You lost! The country was', this.selectedWord.word);
			    	console.log('Try agina!');
			  } else{
			    	console.log(this.selectedWord.wordDisplay());
			  }
		});
	}
};

hangMan.startGame();