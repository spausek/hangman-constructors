const Letter = function(letter){
	this.letter = letter
	this.display = false;
	this.displayLetter = function(){
		if (this.display){
			return this.letter;
		}

		else if (this.letter === ' '){
			this.display = true;
			return this.letter;
		}

		else {
			  return '_';
              
		}
	};
};
var foo = new Letter("apple")
console.log(foo);