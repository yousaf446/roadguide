define([
    'services/searchService',
    'services/searchAutoService',
    'services/markerService',
    'services/placesService',
    'services/addPlaceService'
], function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('searchController', ['$scope', '$interval', '$timeout', 'searchService', 'searchAutoService', 'markerService', 'placesService', 'addPlaceService',
        function($scope, $interval, $timeout, searchService, searchAutoService, markerService, placesService, addPlaceService) {
            var map_center = new google.maps.LatLng(31.55460609999999, 74.35715810000001);
            var mapOptions = {
                zoom: 10,
                center: map_center,
                styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-150},{"lightness":10}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-150},{"lightness":10}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-40},{"lightness":10}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-100},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-100},{"lightness":20}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-150},{"lightness":20}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-150},{"lightness":20}]}]
            }
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        $scope.latitude = "";
        $scope.longitude = "";
        $scope.total_places = placesService.places.length;//placesService.places.length
        $scope.places = placesService.places;
        $scope.place_counter = 0;
        $scope.area_counter = 0;
        $scope.area = placesService.areas.Islamabad.SectorD;
            console.log($scope.area.length);
        $scope.result = "";
        $scope.total_poi = 0;
        $scope.mutex = false;
        searchAutoService.getAuto($scope);
        var interval = "";
        $scope.stopInterval = function() {
            $interval.cancel(interval);
            $scope.mutex = true;
            console.log("Mid");
        };

        $scope.savePlaces = function() {
            $scope.result = "";
            var area_counter = $scope.area_counter;
            var area_bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng($scope.area[area_counter].bounds.southwest.lat, $scope.area[area_counter].bounds.southwest.lng),
                new google.maps.LatLng($scope.area[area_counter].bounds.northeast.lat, $scope.area[area_counter].bounds.northeast.lng)
            );
            interval = $interval(function() {
                if(!$scope.mutex) {
                    $scope.result = "";
                    searchService.getPlaces($scope, map, $scope.area[area_counter].name, area_bounds, $scope.places[$scope.place_counter]);
                    console.log($scope.place_counter);
                    $timeout(function () {
                        if($scope.result != "") {
                            markerService.getMarker($scope.result, map);
                            $scope.total_poi = $scope.total_poi + $scope.result.length;
                        }
                            addPlaceService.addPlace($scope.result, $scope.area[area_counter].name, $scope.places[$scope.place_counter]).then(function (response) {
                                $scope.place_counter++;
                                if ($scope.area_counter == $scope.area.length)
                                    $scope.stopInterval();
                                if ($scope.place_counter == $scope.total_places) {
                                    $scope.place_counter = 0;
                                    $scope.area_counter++;
                                    area_counter = $scope.area_counter;
                                    area_bounds = new google.maps.LatLngBounds(
                                        new google.maps.LatLng($scope.area[area_counter].bounds.southwest.lat, $scope.area[area_counter].bounds.southwest.lng),
                                        new google.maps.LatLng($scope.area[area_counter].bounds.northeast.lat, $scope.area[area_counter].bounds.northeast.lng)
                                    );
                                }
                            }, function (response) {
                            });
                    }, 1000);
                }
            }, 4000);
        }
            $scope.savePlaces();
    }]);
});