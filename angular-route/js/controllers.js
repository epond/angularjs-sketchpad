'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('PhoneListCtrl', ['$scope',
  function($scope) {
    $scope.phone = 'Rosebud';
  }]);

controllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.data = "Cthulhu R'lyeh " + $routeParams.phoneId;
  }]);
