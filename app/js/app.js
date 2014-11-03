'use strict';

var medManApp = angular.module('medManApp', ['ngRoute']);


medManApp.config(['$routeProvider', function($routeProvider, $q) {

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
          title: 'Contact Us',
          resolve:  {
              contacts: function(dataService, $q) {
                  var defer = $q.defer();

                  dataService.getContactInfo()
                      .success(function(data) {
                          var result = [];

                          var total = data.length;
                          var counter = 0;

                          while(true) {
                              var newRow = [];
                              for (var i = 0; i < 3; i++) {
                                  if (!data[i])
                                      break;

                                  newRow[i] = data[i];
                                  counter++;
                              }
                              result.push(newRow);
                              if (counter >= total)
                                  break;
                          }
                          defer.resolve(result);
                      })
                      .error(function() {
                          defer.reject('could not find contactInfo.json');
                      });

                  return defer.promise;
              }
          }
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
