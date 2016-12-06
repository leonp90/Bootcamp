const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;

const url = "mongodb://localhost:27017/test";
const app = express();

MongoClient.connect(url, (err, db) =>{
	if (err) throw err;
	console.log("Connected to Db...");

	app.get('/restaurants', (req, res) =>{

		const show = req.query.show
		if (show) {

				const projection = show.split(',').reduce( (oProj, show) => {
					oProj[show] = 1;
					return oProj;
				}, {} )

				req.projection = projection;
			}

		// const show = req.query.show + ":0";
		// console.log(show);
		db.collection('restaurants')
		.find( {}, show)//, {name: 1})
		.toArray()
		.then( data=> res.json(data))
		.catch(err=> console.log(err))

// GET /restaurants?show=_id,name,borough,cuisine

// Show only the fields specified in the query fields for all the documents in the collection restaurant.



	})
})

app.listen(PORT, ()=> console.log('Listening on port ${PORT}'))