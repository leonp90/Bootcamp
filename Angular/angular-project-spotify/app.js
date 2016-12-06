angular
	.module('myApp',[])
	.config(['$sceProvider', function($sceProvider) {
    	$sceProvider.enabled(false);
	}]);