'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('PhoneListCtrl', ['$scope',
  function($scope) {
    console.log("1");
    $scope.phone = 'Rosebud';
  }]);

controllers.controller('PhoneDetailCtrl', ['$scope',
  function($scope) {
    console.log("2");
    $scope.data = "Cthulhu R'lyeh ";
  }]);
