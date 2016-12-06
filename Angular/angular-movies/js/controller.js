angular.module('myApp')
	.controller('homeController', function($scope) {	
		
			
	})
	.controller('popularController', function($scope, $rootScope, movieService) {
		$scope.title = "The most popular movies"
		$scope.activetab = 'popular';

		$scope.findMovies= function(){
				movieService.getPopular()
					.then( function(response){
						$scope.moviesPop = response.data.results;
					})
			}
		$scope.findMovies();
	})