//Integer Number Range

var integer=function(x1,x2){
	if (x2 < x1) {
		console.log(-1);
	}else {
		while (x2 > (x1 +1)){
			console.log(x2 - 1);
			x2--;
		} 
	}
}

//Multiplication table

function multiplication (){
	var fila= [];
	for (var i = 1 ; i <= 10; i++) {
		for (var j = 1; j <= 10; j++) {
			fila[j]=i*j;
			
		}
		console.log(fila);
	}
}

//Multiplication on demand

function multiplication (x){
	var result = [];
	for (var i = 1 ; i <= 10; i++) {
		result[i]= x*i;
	}
	console.log(result);
}

//Calculation
function calculation(){
resultados= 0;
x= 0;
while (x < 500){
	if((x % 23) == 0){
		resultados +=x
		console.log("Multiples de 23: " + x);
	} 
	x++;
}
console.log("Suma total: " + resultados);
	
}

//Max() function

function max(a,b){
	if(a > b){
		return a;
	}else{
		return b;
	}


//maxOfThree() 

function maxThree(a,b,c){
	if(a > b){
		if(a > c){
			return a;
		}else{
			return c;
		}
	}else {
		if(b > c){
			return b;
		}else{
			return c;
		}
	}
}

//isVowel()

function vowel(x){
	if(x == "a"|| "e" || "i" || "o" ||"u"){
		return true;
	}else{
		return false;
	}
}

//Hexadecimal

function hexadecimal(){
	var
}
