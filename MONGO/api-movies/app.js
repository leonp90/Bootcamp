const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;

const url = "mongodb://localhost:27017/movies";
const app = express();

MongoClient.connect(url, (err, db)=> {
	if(err) throw err;
	console.log("connected to...");


	app.get('/movies', (req, res)=>{

		const limit= +req.query.size || 20;
		const page = +req.query.page || 1;
		const skip = (limit * (page-1)) + 1;

			db.collection('movieDetails')
			.find( {}, {title:1, _id:0})
			.sort( {title:1})
			.limit(5) //LIMIT OF RESULTS IN EVERY CONSULT
			.skip(skip) //TO SKIP NEXT BLOCK OF DATA
			.toArray()
			.then(	data=> res.json(data)	)
			// .then(	()=>db.close()	)
			.catch(err => console.log(err))
		
	});

	app.get('/movies/genres/:genre', (req, res)=>{

		const limit= +req.query.size || 20;
		const page = +req.query.page || 1;
		const skip = (limit * (page-1)) + 1;

		const genre = req.params.genre;

			db.collection('movieDetails')
			.find( {genres: genre})
			.sort( {title:1})
			.limit(limit) //LIMIT OF RESULTS IN EVERY CONSULT
			.skip(skip) //TO SKIP NEXT BLOCK OF DATA
			.toArray()
			.then(	data=> res.json(data)	)
			// .then(	()=>db.close()	)
			.catch(err => console.log(err))
		
	});

});

app.listen(PORT, ()=> console.log('Listening on port ${PORT}'))
