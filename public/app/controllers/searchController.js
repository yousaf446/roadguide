define([
    'services/searchService',
    'services/searchAutoService',
    'services/markerService',
    'services/placesService',
    'services/addPlaceService',
    'services/getZameen',
], function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('searchController', ['$scope', '$interval', '$timeout', 'searchService', 'searchAutoService', 'markerService', 'placesService', 'addPlaceService', 'getZameen',
        function($scope, $interval, $timeout, searchService, searchAutoService, markerService, placesService, addPlaceService, getZameen) {
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
        $scope.result = "";
        $scope.total_poi = 0;
        $scope.mutex = false;
        searchAutoService.getAuto($scope);
        var interval = "";
        $scope.stopInterval = function() {
            $interval.cancel(interval);
            $scope.mutex = true;
            getZameen.updateArea($scope.area._id);
            console.log("Completed");
            $timeout(function () {
                    location.reload();
            },
            2000);
        };
        $scope.getArea = function() {
            getZameen.getArea().then(function (response) {
                $scope.area = response.data.data[0];
                $scope.savePlaces();
            }, function (response) {
            });
        };
            $scope.getArea();
        $scope.savePlaces = function() {
            $scope.result = "";
            console.log($scope.area.bounds);
            var area_bounds = new google.maps.LatLngBounds(
                new google.maps.LatLng($scope.area.bounds.southwest.lat, $scope.area.bounds.southwest.lng),
                new google.maps.LatLng($scope.area.bounds.northeast.lat, $scope.area.bounds.northeast.lng)
            );
            interval = $interval(function() {
                if(!$scope.mutex) {
                    $scope.result = "";
                    searchService.getPlaces($scope, map, $scope.area.latitude, $scope.area.longitude, $scope.places[$scope.place_counter]);
                    $timeout(function () {
                        if($scope.result != "") {
                            markerService.getMarker($scope.result, map);
                            $scope.total_poi = $scope.total_poi + $scope.result.length;
                        }
                            addPlaceService.addPlace($scope.result, $scope.area.name, $scope.area.cityName, $scope.places[$scope.place_counter]).then(function (response) {
                                $scope.place_counter++;
                                if ($scope.place_counter == $scope.total_places)
                                    $scope.stopInterval();
                            }, function (response) {
                            });
                    }, 1000);
                }
            }, 4000);
        }
            //$scope.savePlaces();
    }]);
});