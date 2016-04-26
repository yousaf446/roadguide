define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('getZameen', ['$http', '$q', function($http, $q) {
        this.getArea = function() {
            var deffered = $q.defer();
            return $http.get('area').then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };

        this.updateArea = function(id) {
            var deffered = $q.defer();
            var data = {
                areaID: id
            }
            return $http.put('area/update', data).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        }
    }]);
});