'use strict';

angular.module('Revolution')
    .factory('RevolutionService', function($http) {
        return {
            registration: function (info) {
                return $http.post("/registration", info)
                    .then(function (res) {
                        return res;
                    }, function (err) {
                        return err;
                    });
            },

            feedback: function (info) {
                return $http.post("/feedback", info)
                    .then(function (res) {
                        return res;
                    }, function (err) {
                        return err;
                    });
            }
        }
    });