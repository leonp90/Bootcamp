angular.module('myApp', ['ngRoute'])
	.config( function($routeProvider){

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			})
			.when('/popular', {
				templateUrl: 'views/popular.html',
				controller: 'popularController'
			})
			.when('/upcoming', {
				templateUrl: 'views/upcoming.html',
				controller: 'upcomingController'
			})
			.when('/nowPlaying', {
				templateUrl: 'views/nowplaying.html',
				controller: 'nowplayingController'
			})
			.when('/topRated', {
				templateUrl: 'views/toprated.html',
				controller: 'topRatedController'
			})
			.when('/resultsSearch', {
				templateUrl: 'views/search.html',
				controller: 'searchController'
			})
	})