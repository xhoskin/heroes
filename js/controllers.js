'use strict';

/* Controllers */

//angular.module('myModule', ['ui.bootstrap']);

var heroesApp = angular.module('heroesApp', []);

heroesApp.controller('monstersListCtrl', ['$scope', '$http', function($scope, $http){

    $http.get('data/cities.json').success(function(data, status, headers, config){
        $scope.cities = data;
    });

    $scope.range = function(min, max){
        return min === max ? min : min + '-' + max
    }

    $scope.BattleSide = function(monster){
        return {
            monster:    monster,
            quantity:   1,
            setMonster: function(monster) {
                this.monster = monster;
            }
        }
    }

    $scope.Calculator = function( player, enemy ){
        return {
            player: player,
            enemy:  enemy,
            damage: function(baseDmg){

                // baseDmg -  базовый урон существа

                // условный множитель урона 
                // зависит от того, больше или меньше атака и защита
                if ( player.monster.attack >= enemy.monster.defense ) {
                    var multDmg = 0.05;
                } else {
                    var multDmg = 0.025;
                }

                // модификатор урона
                // если атака больше, то за каждую единицу +5% урона
                // если защита больше, то за каждую единицу -2,5% урона
                // МD(баз) = (Атака - Защита) * 0,05  
                // MD(баз) = (Атака - Защита) * 0,025 
                var modDmg = ( player.monster.attack - enemy.monster.defense ) * multDmg;

                // допустимый промежуток для модификатора: [-70%, 300%] урона
                if ( modDmg > 3 ) { 
                    modDmg = 3;
                } else if ( modDmg < -0.7 ) { 
                    modDmg = -0.7;
                }

                // урон с учетом модификатора
                var modifiedDmg = baseDmg * modDmg;

                // итоговая формула урона
                var totalDmg = (modifiedDmg + baseDmg) * player.quantity;

                return {
                    baseDmg:  baseDmg * player.quantity,
                    totalDmg: totalDmg,
                    modDmg:   ( modDmg * 100 )
                }
            },
            min: function(){
                return this.damage(this.player.monster.damageMin);
            },
            max: function(){
                return this.damage(this.player.monster.damageMax);
            },
            // базовый урон, который наносит 1 юнит
            unitDmg:    function(unit){
                return $scope.range( unit.damageMin, unit.damageMax );
            },
            // базовый урон, который наносит весь стек
            stackDmg:   function(){
                return $scope.range( Math.round(this.min().baseDmg), Math.round(this.max().baseDmg) );
            },
            // полный урон, с учетом модификаторов
            totalDmg:   function(){
                return $scope.range( Math.round(this.min().totalDmg), Math.round(this.max().totalDmg) );
            },
            // модификатор урона - на сколько процентов увеличится или уменьшится
            modDmg:     function(){
                return Math.round( this.min().modDmg );
            },
            needToKill: function(){
                var stackHealth = this.enemy.monster.health * this.enemy.quantity;
                var kill = {
                    min: stackHealth / ( this.min().totalDmg / this.player.quantity ),
                    max: stackHealth / ( this.max().totalDmg / this.player.quantity ),
                };
                return $scope.range( Math.floor(kill.max), Math.floor(kill.min) );
            },
            healthLeft: function(){
                var stackHealth = this.enemy.monster.health * this.enemy.quantity;
                var healthLeft = {
                    min: stackHealth - this.min().totalDmg,
                    max: stackHealth - this.max().totalDmg,
                }

                if ( healthLeft.min < 0 ) { healthLeft.min = 0 }
                if ( healthLeft.max < 0 ) { healthLeft.max = 0 }

                return $scope.range( Math.floor(healthLeft.max), Math.floor(healthLeft.min) );
            }
        }
    }

    $http.get('data/monsters.json').success(function(data, status, headers, config){
        $scope.monsters = data;
        $scope.player = $scope.BattleSide(data[0]);
        $scope.enemy = $scope.BattleSide(data[0]);

        $scope.calc = $scope.Calculator( $scope.player, $scope.enemy );
    });

}]);
