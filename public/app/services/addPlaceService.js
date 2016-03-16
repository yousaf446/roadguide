define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('addPlaceService', ['$http', '$q', function($http, $q) {
        this.addPlace = function(data) {
            var deffered = $q.defer();
            return $http.post('place/add', data).then(function successCallback(response) {
                console.log(response);
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                console.log(response);
                deffered.reject(response);
                return deffered.promise;
            });
        };
    }]);
});