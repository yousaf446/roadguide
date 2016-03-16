define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('schoolService', function() {
        this.getSchools = function(map, location, $rootScope) {
            var request = {
                location: location,
                radius: 10000,
                types: ['school']
            };

            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for(i in results) {
                        var school_lat = results[i].geometry.location.lat();
                        var school_lng = results[i].geometry.location.lng();
                        results[i].distance = distance(location.lat(), location.lng(), school_lat, school_lng, 'K');
                        if(results[i].rating == undefined) results[i].rating = parseFloat(Math.random() * (5 - 3) + 3).toFixed(1);
                    }
                    $rootScope.$apply(function() {
                        $rootScope.schools = results;
                    });
                    $("#overlay").hide();
                } else {
                    console.log("No School Found");
                    $("#overlay").hide();
                }
            }

            function distance(lat1, lon1, lat2, lon2, unit) {
                var radlat1 = Math.PI * lat1/180
                var radlat2 = Math.PI * lat2/180
                var theta = lon1-lon2
                var radtheta = Math.PI * theta/180
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                dist = Math.acos(dist)
                dist = dist * 180/Math.PI
                dist = dist * 60 * 1.1515
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return parseFloat(dist).toFixed(2)+" km";
            }
        };
    });
});