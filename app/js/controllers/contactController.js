'use strict';

medManApp.controller('contactController', function ($scope, contacts) {
    $scope.allContacts = contacts;

    $scope.contact_rows = function() {
        var result = [];

        var total = $scope.contacts.length;
        var counter = 0;

        while(true) {
            var newRow = [];
            for (var i = 0; i < 3; i++) {
                if (!$scope.contacts[i])
                    break;

                newRow[i] = $scope.contacts[i];
                counter++;
            }
            result.push(newRow);
            if (counter > total)
                break;
        }

        return result;
    }

});