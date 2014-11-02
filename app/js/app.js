'use strict';

var medManApp = angular.module('medManApp', ['ngRoute']);


medManApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
      .when('/', {
          templateUrl: 'templates/index.html',
          controller: 'homeController',
          title : 'Home'
      })
      .when('/Home', {
          templateUrl: 'templates/index.html',
          controller: 'homeController',
          title : 'Home'

      })
      .when('/Vendors', {
          templateUrl: 'templates/vendors.html',
          controller: 'vendorController',
          title: 'Vendors'
      })
      .when('/ContactUs', {
          templateUrl: 'templates/contact.html',
          controller: 'contactController',
          title: 'Contact Us'
      })
      .when('/WhatWeDo', {
          templateUrl: 'templates/about.html',
          controller: 'homeController',
          title: 'About Us'
      })
      .when('/About', {
          templateUrl: 'templates/about.html',
          controller: 'homeController',
          title: 'About Us'
      })
      .otherwise({redirectTo: '/'});
}]);

medManApp.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
