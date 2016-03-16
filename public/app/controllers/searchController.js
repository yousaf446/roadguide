define([
    'services/searchService',
    'services/searchAutoService',
    'services/markerService',
    'services/placesService',
    'services/addPlaceService'
], function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('searchController', ['$scope', '$interval', 'searchService', 'searchAutoService', 'markerService', 'placesService', 'addPlaceService',
        function($scope, $interval, searchService, searchAutoService, markerService, placesService, addPlaceService) {
            var map_center = new google.maps.LatLng(31.55460609999999, 74.35715810000001);
            var mapOptions = {
                zoom: 10,
                center: map_center,
                styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-150},{"lightness":10}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-150},{"lightness":10}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-40},{"lightness":10}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-100},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-100},{"lightness":20}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-150},{"lightness":20}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-150},{"lightness":20}]}]
            }
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        $scope.latitude = "";
        $scope.longitude = "";
        $scope.total_places = 2;//placesService.places.length
        $scope.places = placesService.places;
        $scope.place_counter = 0;
        $scope.result = "";
        searchAutoService.getAuto($scope);
        var interval = "";

        $scope.stopInterval = function() {
            $interval.cancel(interval);
            console.log($scope.result);
        };
        $scope.getPlaces = function() {
            interval = $interval(function() {
                searchService.getPlaces($scope, map, $scope.latitude, $scope.longitude, $scope.places[$scope.place_counter]);
                addPlaceService.addPlace($scope.result).then(function(response) {

                }, function(response) {
                });
                $scope.place_counter++;
                if($scope.place_counter == $scope.total_places) $scope.stopInterval();
            }, 2000);
        };
    }]);
});