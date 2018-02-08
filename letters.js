
module.exports = Letters;

const Letters = function(word, guess){
	this.word = word;
	this.correctGuess = guess;
	this.showWord = ' ';
	this.displayWord = function(){
		var emptyWord = '';
	 	if(this.correctGuess === undefined){
	 		for(var i = 0; i < this.word.length; i++){
	 			emptyWord += '_';
	 		}
	 	}

	}

	

}