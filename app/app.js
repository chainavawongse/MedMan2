'use strict';

var medManApp = angular.module('medManApp', ['ngResource', 'ngRoute', 'ngAnimate' ]);


medManApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
