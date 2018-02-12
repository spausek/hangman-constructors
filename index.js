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
		this.selectedWord.getLetters();
		console.log('Welcome to Around The World Hangman!');
		console.log(this.selectedWord.wordDisplay() + '\n');
		this.promptUser();

	},

	resetGuess: function(){
		this.guesses = 8;
	},

	promptUser: function(){
		let self = this;
		prompt.get(['guessALetter'], function(err, result){
			console.log('');
			console.log('You guessed this letter: ' + result.guessALetter);

			var userGuess = self.selectedWord.checkLetter();
			

			if (userGuess === 0){
				if (self.lettersGuessed.indexOf(result.guessALetter) < 0){
					self.lettersGuessed.push(result.guessALetter);
					self.guesses --;
					console.log('Wrong Letter!');
					}

				else {
					//couldn't get guessed letter condition to work
					console.log('Correct!');
				}

				
					if (self.selectedWord.findTheWord()) {
						console.log('You got it! The country was ' + self.selectedWord);
						console.log('Nice!')

						return;
					}
				
			}

			 console.log('Guesses remaining: ', self.guesses);
		    console.log(self.selectedWord.wordDisplay());
				console.log("");
		    console.log('Letters already guessed: ' + self.lettersGuessed);


		    if ((self.guesses > 0) && (self.selectedWord.found === false)){
		    	self.promptUser();
		    } else if(self.guesses === 0){
			    	console.log('You lost! The country was', self.selectedWord.word);
			    	console.log('Try again!');
			  } else{
			    	console.log(self.selectedWord.wordDisplay());
			  }
		});
	}
};

hangMan.startGame();