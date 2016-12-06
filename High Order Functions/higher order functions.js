/* CASE 1 - For Loop */ 

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

for( var i=0; i<names.length; i++) {
	console.log(names[i]);
}


/* CASE 2 - forEach */ 

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

names.forEach(function(name) { /* element, index, array */
	console.log(name);
});

/* CASE 3 - forEach */ 

var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];
var videoAndTitlePairs = [];

newReleases.forEach(function(video) {
	videoAndTitlePairs.push({ id: video.id, title: video.title });
});

console.log (videoAndTitlePairs);

/* CASE 4 - map (use) */ 

var videoAndTitlePairs = newReleases.map(function(video) { 
	return { id: video.id, title: video.title }; 
});

/* CASE 5 - forEach (filter) */ 

var videosHighRanking = [];

newReleases.forEach(function(video) { 
	if (video.rating[0] === 5.0) {
		videosHighRanking.push(video)
	}
});

/* CASE 6 - filter */ 

var videosHighRanking = newReleases.filter(function(video) { 
	return video.rating[0] === 5.0
});

/* CASE 7 - get average w/ reduce */ 

newReleases.reduce( function(acc, elem, index, array) {

	var sum = acc + elem.rating;
	var numElems = array.length
	var isLast = (index === numElems-1 );
	
	return isLast ? sum/numElems : sum;
	
}, 0)
