//Translate
//Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".


var word= function(x){
	var chars = x.split('');
	for (var i = 0; i <= chars.length-1; i++) {
		var final = [];
		if (chars[i] == ("a"||"e"||"i"||"o"||"u")){
			final += chars[i] ;
		} else{
			final += chars[i]+ "o" + chars[i];
		}
	console.log (final);
		
	}
}

/* PROBAR CON indexOf() */


//sum() & multiply()

//Define a function sum() and a function multiply() that sums and multiplies 
//(respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
//should return 24.


function sum(x){
	var y= 0;
	for (var i = 0; i<x.length ; i++){
		y += x[i];
	} 
	return y;
}

function mul(x){
	var y = 1;
	for (var i = 0; i < x.length -1; i++) {
		console.log(y);
		y += x[i] * y;
	}
	return y;
}
/*

reverse()

Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".*/

function reverse(text) {
  var cache = '';
  for (var i = text.length - 1; i >= 0; i--)
    cache += text[i];
  return cache;
}

//translate()
// Represent a small bilingual lexicon as a Javascript object in the following fashion 
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and 
//use it to translate your Christmas cards from English into Swedish.

// {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}

// "merry christmas and happy new year" => "god jul och gott nytt år"

function translateToSwedish ( msg ) {

	var dictionary = {
		merry: "god",
		christmas: "jul",
		and: "och",
		happy: "gott",
		new: "nytt",
		year: "år"
	}
	var wordsMsg = msg.split(" ");
	var currentWord, translatedWord;
	var translatedWords = [];

	for (var i=0; i<wordsMsg.length; i++) {
		currentWord = wordsMsg[i];
		translatedWord = dictionary[currentWord];

		translatedWords.push( translatedWord )
	}

	return translatedWords.join(" ");

}

translateToSwedish("merry christmas and happy new year") // => "god jul och gott nytt år"



/*findLongestWord()

Write a function findLongestWord() that takes an array of words 

and returns the length of the longest one.*/

myArr=["length", "of", "the"];

var findLongestWord =function(myArr){
	var longest= "";
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i].length > longest.length) {
			longest = myArr[i];
		}
	}
		return (longest);

} 

/*
filterLongWords()

Write a function filterLongWords() that takes an 
array of words and an integer i and returns the array 
of words that are longer than i.
*/


function filterLongWords(myArr, x){
	var newArr= []
	for (var i = 0; i < myArr.length; i++) {
		if(myArr[i].length > x){
			newArr.push(myArr[i]);
		} 
	}
	return (newArr);
}

/*charFreq()

Write a function charFreq() that takes a string and builds
 a frequency listing of the characters contained in it. 
 Represent the frequency listing as a Javascript object. 
 Try it with something like 
 charFreq("abbabcbdbabdbdbabababcbcbab").*/

charFreq("abbabcbdbabdbdbabababcbcbab");

 function charFreq (text) { 
    var currentChar; 
    var freq = {};
    for(var i = 0; i < text.length; i++){ 
        currentChar = text[i];
        if ( freq[currentChar] == undefined ) {
            freq[currentChar] = 1;
        }
        else {
            freq[currentChar]++
        }
    }

    return freq;   /*
    */
}

/*PROBAR CON .match()*/




