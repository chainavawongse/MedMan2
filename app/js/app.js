'use strict';

var medManApp = angular.module('medManApp', ['ngRoute']);


medManApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/', {
          templateUrl: 'templates/index.html',
          controller: 'homeController',
          title : ''
      })
      .when('/Home', {
          templateUrl: 'templates/index.html',
          controller: 'homeController',
          title : 'Home'

      })
      .otherwise({redirectTo: '/'});
}]);

medManApp.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
