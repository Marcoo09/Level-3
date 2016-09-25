"use strict"

angular.module('exercieDosApp')
		.controller('menuController',[
			'$scope',"menuApp",
			 function( $scope, menuApp ){
				$scope.listaMenu= menuApp.getMenuSuperior();
}])

		