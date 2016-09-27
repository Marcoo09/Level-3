'use strict'

angular.module("exercieDosApp").controller("HomeCategoriesCtrl", [
  "$scope", "$stateParams", "CategoryServices",
  function($scope, $stateParams, CategoryServices) {
    var categorias = CategoryServices.getCategories();
    $scope.categoria = categorias[$stateParams.idCategory];
    
  }
]);