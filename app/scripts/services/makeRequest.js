"use strict"

angular.module('exercieDosApp').service('CategoryServices' ,[
		 function(){
		this.getCategories= function(){
			return {
				MLU5725: 'Accesorios para vehiculos',
				MLU1540: 'Servicios'
			};
		};
}])