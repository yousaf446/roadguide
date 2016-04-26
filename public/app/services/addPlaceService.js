define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('addPlaceService', ['$http', '$q', function($http, $q) {
        this.addPlace = function(data, area_name, city_name, search_type) {
            var deffered = $q.defer();
            var final_data = {
                city: city_name,
                area: area_name,
                search: search_type,
                result: data
            }
            return $http.post('place/add', final_data).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };
    }]);
});