'use strict';

/**
 * @ngdoc function
 * @name exercieDosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the exercieDosApp
 */
angular.module('exercieDosApp')
	.factory('mercadoLibre', ["$stateParams","$http","$log",function($stateParams,$http,$log){
	var MercadoLibre= function(){
		this.listaArticulos = [];
    	this.busy = false;
    	this.after = '';
    };

    MercadoLibre.prototype.nextPage = function() {
    if (this.busy) {return}
   else{ this.busy = true;}

    var url = 'https://api.mercadolibre.com/sites/MLU/search?category=' + this.after + $stateParams.idCategory ;
    $http.get(url, {params:{'limit':60}})
    					.then(function(response) {
     						 var listaArticulos = response.data.results;
     						 for (var i = 0; i < listaArticulos.length; i++) {
     						   this.listaArticulos.push(listaArticulos[i].data.results);
     						 }
     						 this.after = "t3_" + this.listaArticulos[this.listaArticulos.length - 1];
     						 this.busy = false;
     						 $log.debug(listaArticulos);
   						 }.bind(this));
 													 };

 		 return MercadoLibre;
}])

  .controller('TableCategoriesCtrl', [
  	"$scope","$log","$http","$stateParams","mercadoLibre",
  		function($scope, $log, $http,$stateParams, mercadoLibre) {

   				//no se si funciona
  		/*	$scope.offset= 0;
  			 $scope.totalPage = function() {
      		return new Array(5);
    		};
   				//no se si funciona 
   		*/
   		$scope.merca = new MercadoLibre();
   		$scope.listaArticulos= $scope.merca.listaArticulos;
   		$log.debug($scope.merca)
/*
   	//PARA TODA LA PÁGINA
   		$log.debug($stateParams)
   			$http.get('https://api.mercadolibre.com/sites/MLU/search?category='+ $stateParams.idCategory , {
   				params:{
   					'limit':60,
   					'offset':0
   				}
   			})	
   				.then(function(response){
   					$scope.listaArticulos= response.data.results;
   				});

   				//no se si funciona ACA ME QUEDE CON LA PAGINACION
   			/*	var change= function(index){
   						var a = 1 +  index;
   						$scope.offset+=1;
   						$http.get('https://api.mercadolibre.com/sites/MLU/search?category='+ $stateParams.idCategory , {
   						params:{
   						'limit': 1,
   					'	offset':$scope.offset
   				}})
   					.then(function(response){
   					$scope.listaArticulos= response.data.results;
   						});

   					}
   				//no se si funciona
   			*/
   
   //PARA EL MODAL */
   			$scope.requestSellerInfo = function(articulos, index){
   				var identificador = articulos[index].seller_address.id;
   				var promise = $http.get('https://api.mercadolibre.com/users/' +identificador );

   					promise.then(function(response){
   						$scope.datosVendedor = response.data;
   							});
   			};	

   			$http.get('https://api.mercadolibre.com/users/223411944').then(function(response){
   				$scope.usuario= response.data;
   			})

  }]);


   