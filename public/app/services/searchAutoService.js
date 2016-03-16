define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('searchAutoService', function() {
        this.getAuto = function($rootScope) {

            var adr_options = {
                types: ['geocode'],
                componentRestrictions: {country: 'pk'}
            };

            var address = document.getElementById('location');

            var autocomplete_adr = new google.maps.places.Autocomplete(address, adr_options);

            autocomplete_adr.addListener('place_changed', function() {

                var place = autocomplete_adr.getPlace();
                if (!place.geometry) {
                    return;
                }
                $rootScope.latitude = place.geometry.location.lat();
                $rootScope.longitude = place.geometry.location.lng();
            });
        };
    });
});