define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('searchService', ['$http', '$q', function($http, $q) {

        this.getPlaces = function ($rootScope, map, area_name, area_bounds, type) {
            $rootScope.result = "";
            console.log(area_bounds);
            var request = {
                bounds: area_bounds,
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
                    $rootScope.result = "";
                }
            }
        };
    }]);
});