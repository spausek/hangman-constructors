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

}
var foo = new Word('Apples');
console.log(foo);