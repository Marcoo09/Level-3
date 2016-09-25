'use strict'

angular.module('exercieDosApp')
					.filter('limitToMore',function(){
						return function(index){
								return 5 + index;
							};
						});