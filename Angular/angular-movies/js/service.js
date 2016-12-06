angular.module('myApp')
	.factory('movieService', function($http){
			function getPopular() {
				return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=aac5b20fb158a4b0406f925d833f49af&language=en-US");
			}
			function getUpcoming () {
				return $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=aac5b20fb158a4b0406f925d833f49af&language=en-US")
			}
			function getNowplaying() {
				return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=aac5b20fb158a4b0406f925d833f49af&language=en-US")
			}
			function getToprated () {
				return $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=aac5b20fb158a4b0406f925d833f49af&language=en-US")
			}
			function getResultsSearch(name) {
				return $http.get("https://api.themoviedb.org/3/search/movie?api_key=aac5b20fb158a4b0406f925d833f49af&language=en-US&query="+name);
			}

			return {
				getPopular: getPopular,
				getUpcoming: getUpcoming,
				getNowplaying: getNowplaying,
				getToprated: getToprated,
				getResultsSearch: getResultsSearch

			}
	})
