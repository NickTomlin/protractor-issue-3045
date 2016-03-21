'use strict';

angular.module('test', []);

angular.module('test').controller('TestCtrl', function($scope) {
	$scope.showResult = function() {
		$scope.result = 'hello';
	};
});