angular.module('myApp')
	.controller('opOneController', function($scope) {	

			$scope.calculate = function(e){
				e.preventDefault();
				$scope.result = $scope.valueA/100 * $scope.valueB;
			}

	})
	.controller('opTwoController', function($scope){

			$scope.calculate = function(e){
				e.preventDefault();
				$scope.result = $scope.valueA/$scope.valueB * 100;
			}

	})
	.controller('opThreeController', function($scope){

			$scope.calculate= function(e){
				e.preventDefault();
				$scope.result = ($scope.valueB - $scope.valueA )/$scope.valueA * 100;

			}
	})