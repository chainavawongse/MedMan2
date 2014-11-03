medManApp.factory('dataService', function ($http, $q) {
    return {
        getContactInfo: function () {
            return $http.get('data/contactInfo.json');
        }
    }
});