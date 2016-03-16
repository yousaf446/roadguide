define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('searchService', ['$http', '$q', function($http, $q) {

        this.getPlaces = function ($rootScope, map, latitude, longitude, type) {

            var location = new google.maps.LatLng(latitude, longitude);
            var request = {
                location: location,
                radius: 5000,
                types: [type]
            };

            var service = new google.maps.places.PlacesService(map);
            service.radarSearch(request, callback);

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    $rootScope.$apply(function () {
                        $rootScope.result = results;
                    });
                } else {
                    console.log("No Result Found");
                }
            }
        };
    }]);
});