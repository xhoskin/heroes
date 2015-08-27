'use strict';

/* Controllers */

//angular.module('myModule', ['ui.bootstrap']);

var heroesApp = angular.module('heroesApp', []);

heroesApp.controller('monstersListCtrl', ['$scope', '$http', function($scope, $http){

    $http.get('data/cities.json').success(function(data, status, headers, config){
        $scope.cities = data;
    });

    // ** конструктор Стороны Битвы
    $scope.BattleSide = function(monster){
        return {
            monster:    monster,
            damage:     function(){
                if ( this.monster.damageMin === this.monster.damageMax ) {
                    return this.monster.damageMin
                } else {
                    return this.monster.damageMin + "-" + this.monster.damageMax;
                }
            },
            setMonster: function(monster) {
                this.monster = monster;
            }
        }
    }

    $http.get('data/monsters.json').success(function(data, status, headers, config){
        $scope.monsters = data;
        $scope.player = $scope.BattleSide(data[0]);
        $scope.enemy = $scope.BattleSide(data[0]);
    });

}]);
