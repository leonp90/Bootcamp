angular.module('myApp')
	.controller('myController', function($scope, spotifyService) {

		$scope.title = "SpotiFinder 🎶 😎"
		$scope.artistQuery = '';
		$scope.artistId = '';
		$scope.albumId = '';
		$scope.isTrackSelected = false;

		$scope.artists = [];
		$scope.albums = [];
		$scope.tracks = [];
		$scope.selectedTrack = {};
		$scope.selectedAlbum = {};

		$scope.findArtists = function(e) {
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
					$scope.artists = response.data.artists.items;
					console.log("paso 1 ---->>>" + $scope.artists);
					$scope.isTrackSelected = false;
				});
		}

		$scope.findAlbums = function() {
				spotifyService.getAlbums($scope.artistId)
					.then( function(response) {
						$scope.albums = response.data.items;
						console.log("segundo paso ---->"$scope.albums)
					})
			}

		$scope.getTracks = function() {
				spotifyService.getTracks($scope.albumId)
					.then(function(response){
						$scope.tracks = response.data.items;
						$scope.selectedAlbum = $scope.albums.filter(function (album) {
							return album.id === $scope.albumId;
						})[0];

						console.log($scope.tracks)
					})
		}

		$scope.selectTrack = function (track) {
			$scope.selectedTrack = track;
			$scope.isTrackSelected = true;
			$scope.artists = [];
			$scope.albums = [];
			$scope.tracks = [];
			$scope.selectedAlbum = {};
			console.log(track);
		};



	})