define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('searchService', ['$http', '$q', function($http, $q) {

        this.getPlaces = function ($rootScope, map, latitude, longitude, type) {
            $rootScope.result = "";
            var loc = new google.maps.LatLng(latitude, longitude);
            var request = {
                location: loc,
                types: [type],
                radius: 1000
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
                    $rootScope.result = "";
                }
            }
        };
    }]);
});