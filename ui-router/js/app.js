'use strict';

/* App Module */

var uiRouterDemoApp = angular.module('uiRouterDemoApp', [
  'ui.router',
  'controllers'
]);

// This annotated source may help fix the routing
// https://github.com/angular-ui/ui-router/blob/gh-pages/sample/states.js

uiRouterDemoApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/phones');

    $stateProvider.
      state('phones', {
        url: '/phones',
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      state('phones.detail', {
        url: '/:phoneId',
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      });
  }]);