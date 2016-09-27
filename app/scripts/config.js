"use strict"

angular.module('exercieDosApp')
.config([
  "$stateProvider", "$urlRouterProvider", "$httpProvider",

  function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
 		 .state('home', {
        	url: '/',
        	templateUrl: '/views/home.html'
      	})
     .state('categories', {
        url: '/categories/:idCategory',
        views: {
          '': {
            templateUrl: '/views/partials/categoriesHome.html',
            controller: 'HomeCategoriesCtrl'
          },
          'table@categories': {
            templateUrl: '/views/partials/tableData.html',
            controller: 'TableCategoriesCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  }]);



