var app = angular.module('app',[]);
app.controller('FirstController', function($scope,$log){
	console.log("FirstController:name =>"+$scope.name);
	$log.info("FirstController:age =>"+$scope.age);
});