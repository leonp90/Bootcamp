function getRestaurants (db, req, res) {


		const { projection}= req
		
		
		db.collection('restaurants')
		.find( {}, projection )//, {name: 1})
		.toArray()
		.then( data=> res.json(data))
		.catch(err=> console.log(err))

}

module.exports = getRestaurants;