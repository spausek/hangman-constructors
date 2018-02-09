var letter = require('./letters.js');

var Word = function(word) {
	this.word = word;
	this.letters = [];
	this.found = false;
	this.getLetters = function (word) {
		for (var i = 0; i < this.word.length; i++){
			this.letters.push(new letter.Letter(this.word[i])); //should push the letters or underscores into the letters array
		}
	};

	this.findTheWord = function (){
		var count = 0;
		for (var i = 0; i < this.letters.length; i ++){
			if (this.letters[i].display){
				count++;
			}

		}

			if (count === this.letters.length){
				this.found = true;
			}

			return this.found;
		
	};

	this.checkLetter = function(guessedLetter){
		var returnThis = 0;
		for (var i = 0; i < this.letters.length;){
			if (this.letters[i].letter === guessedLetter){
				this.letters[i].display = true;
				returnThis++;
			}
		}

		return returnThis;
	}

	this.wordDisplay = function(){
		var hangmanWordDisplay = '';
		for (var i = 0; i < this.lets.length; i++){
			hangmanWordDisplay =+ this.letters[i].displayLetter();
		}
		return hangmanWordDisplay;

	};

};
var foo = new Word('Apples');
console.log(foo);// maybe works?