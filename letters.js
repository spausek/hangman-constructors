var words = ['Jamaica', 'Australia', 'Japan', 'Italy', 'Germany', 'Austria', 'China', 'Mongolia', 'Egypt', 'Israel']

const Letter = function(character) {
	this.character = character
	this.disply = false;
	this.displayLetter = function() {
		if (this.display) {
			return this.character;
		} else if (this.character === " ") {
				this.display = true;
				return this.character;
		} else {
				return "_ ";
		}
	};
};

exports.Letter = Letter;
var foo = new Letter("apple pie")
console.log(foo);

exports.Letter = Letter;
exports.words = words;