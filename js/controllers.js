'use strict';

/* Controllers */

//angular.module('myModule', ['ui.bootstrap']);

var heroesApp = angular.module('heroesApp', []);

heroesApp.controller('monstersListCtrl', ['$scope', '$http', function($scope, $http){

    $http.get('data/cities.json').success(function(data, status, headers, config){
        $scope.cities = data;
    });

    $http.get('data/monsters.json').success(function(data, status, headers, config){
        $scope.monsters = data;
    });

}]);
