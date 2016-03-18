define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('markerService', function() {
        this.markers = [];
        this.mark_count = 0;
        this.bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow();
        this.getMarker = function(prop_data, map) {

            for (i in prop_data) {
                if(prop_data[i].geometry.location.lat() != "" && prop_data[i].geometry.location.lng() != "") {
                    var latlng = new google.maps.LatLng(prop_data[i].geometry.location.lat(), prop_data[i].geometry.location.lng());
                    this.bounds.extend(latlng)
                    this.markers[this.mark_count] = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        //title: prop_data[i].address
                    });
                    /*this.markers[this.mark_count].addListener('click', function() {
                        infowindow.setContent(this.title);
                        infowindow.setPosition(this.getPosition());
                        infowindow.open(map);
                        map.setCenter(this.getPosition());
                    });*/

                    this.mark_count++;
                }
            }
            map.fitBounds(this.bounds);
        };
        this.clearOverlays = function(map) {
            var prev_markers = this.markers;
            for(i in prev_markers) {
                if (prev_markers[i]) {
                    prev_markers[i].setMap(null);
                }
            }
                prev_markers.length = 0;
                this.mark_count = 0;
        }
    });
});