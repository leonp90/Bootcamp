

$(".btn").on("click", function(){


	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json'
})
	.done(function(dataUser){
		console.log(dataUser.results[0]);
			// var dateReg= dataUser.results[0].name;
		// 	 var usName= "";
		// $.each(dataUser.results[0], function(i, dataRand){
			dataUs=dataUser.results[0]
			usReg= dataUs.registered;
			usBirth= dataUs.dob;
			console.log(usReg);
			
			// usName+= dataRand + " ";	

		// })
		// console.log(usName);
		// console.log(dataUser);

		// 	for (var prop in dateReg){
		// 		usName += dateReg[prop] + " ";
		// 	}

		// console.log(dataUser);
		// console.log(dateReg);
		// console.log(usName);
	})
})