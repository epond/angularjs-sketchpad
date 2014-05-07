'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('PhoneListCtrl', ['$scope',
  function($scope) {
    console.log("1");
    $scope.phone = 'Rosebud';
  }]);

controllers.controller('PhoneDetailCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {
    console.log("2");
    $scope.data = $stateParams.phoneId + " Cthulhu R'lyeh ";
  }]);
