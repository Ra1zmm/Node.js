
var generator = require('generate-password');

var password = generator.generate({
	length: 14,
	numbers: true,
	symbols: true
});

console.log(password);