var a = "hello";
var b = 4;
console.log(" datatype test staring ... ")
if (a == "hello") {
	console.log(" hello checked and passed... ");
} else {
	console.log(" else block executed... ");
}

//for loop : print number from 1 to 100
for (var i = 1; i < 100; i++) {
	console.log(i);
}

//while loop
var j = 1;
while (j < 5) {
	console.log(j);
	j++;
}

//do while loop
var k = 10;
do {
	console.log(k);
} while (k < 6)

//	use a function
	console.log("add function ... ");
console.log(add(400, 150));
function add(a, b) {
	return a + b;

}

//array in javascript
var b = [ "pune", "8", "mumbai", "nagpur", "4" ];
for (var k = 0; k < b.length; k++) {
	console.log(b[k]);
}

var c = new Array();

for (var t = 0; t < 5; t++) {
	c[t] = "String" + t;
}
for (var m = 0; m < c.length; m++) {
	console.log(c[m]);
}

//String Functions
var name = " TheBestTester ";
console.log(name.charAt(2));
console.log(name.indexOf("B"));
console.log(name.concat("Concat Action Performed"));
console.log(name.slice(3, 5)); // starting index = inclusive && ending index =
//exclusive
console.log(name.toUpperCase());
console.log(name.trim());

var city = new String("Pune"); // creating a string object
