var fruits =["apple", "banana", "cherry"]

// write a function that console outputFruitOld every fruit in a fruit array 

function outputFruitOld (array) {
	for ( var i = 0 ; i < array.length ; i++){
		console.log(array[i]);
	}
}



function backwardsFruitsOld(array){
	var backwardsFruitsOld = [];
	for ( var i=0 ; i < array.length ; i++){
		backwardsFruitsOld.push(array[i].split("").reverse().join(""));

	}
	console.log(backwardsFruitsOld);
}

backwardsFruitsOld(fruits);



// rewrite using map array method 

var backwardsFruit = fruits.map(function(fruit){

	return fruit.split("").reverse().join("");
});

console.log (backwardsFruit);


//create function called  fiveLettersOnlyOld that only returns fruits that have 5 letters 


function fiveLettersOnlyOld (array){
var filteredFruits = [];
for ( i=0 ; i < array.length ; i++){
	if (array[i].length === 5){
		filteredFruits.push(array[i]);
	}
}
console.log(filteredFruits);
}

fiveLettersOnlyOld(fruits);

//rewrite using filter array method 

function filterIt (cat){
	if (cat.length === 5){
		return cat;
	}

}

var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);



var numbers =[0,1,2,3,4];

 //function addzOld that returns the sum of an array 


 function addzOld (array){
 	var sum = 0 ;
 	for (i=0 ; i < array.length ; i++){
 		sum = sum + array[i];
 	}
 	console.log(sum);
 }

addzOld (numbers);

// rewrite using reduce array method 
 var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){

 	console.log(" current index " + index);
 	console.log(" previousValue " , previousValue );
 	console.log(" currentValue " , currentValue );
 	return previousValue + currentValue ;
 }
 	);

console.log(sum);




















































