// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
var chainingResult = integers
	.sort( function( b , a ){return a-b });

console.log ("result " , chainingResult); 
	
// 2.  Remove any integers greater than 19.
	var chainingRemove = integers
		.sort(function(a,b){return b-a})
		.filter(function(num){return num < 19 });

	console.log( "result" ,chainingRemove )

// 3.  Multiply each remaining number by 1.5 and then subtract 1.
	var chainingRemoveNew = chainingRemove
	.map(function(x) { return (x * 1.5) -1 }); 

	console.log( "result" ,chainingRemoveNew )

// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var chainingsum = chainingRemoveNew
	.reduce(function(previous , current) { return (previous + current) }); 

	console.log( "result" ,chainingsum );



