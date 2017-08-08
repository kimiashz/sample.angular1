/* sample angular project - application js */

window.application = {
    version: '@@VERSION'
};

var sampleApp = angular.module('sampleApp', ['ngRoute', 'ngMaterial', 'ngAria', 'ngResource']);

angular.module('sampleApp')
    .config(function ($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html',
            resolve: {
                store: function (todoStorage) {

                    return todoStorage.then(function (module) {
                        module.get();
                        return module;
                    });
                }
            }
        };

        $routeProvider
            .when('/', routeConfig)
            .when('/:status', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });
