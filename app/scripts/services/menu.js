 "use strict"

 angular.module('exercieDosApp')
 	.service('menuApp', [
 		"CategoryServices", 
 			function( CategoryServices){
 		
 			this.getMenuSuperior= function(){
 			var categories = CategoryServices.getCategories();
 			var menu=[];

 			for (var keyCategoria in categories) {
        	menu.push({
          	name: categories[keyCategoria],
          	title: categories[keyCategoria],
          	url: "#/categories/" + keyCategoria
       	 });
      	}

      	return menu;
  	};
 }])