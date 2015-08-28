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
            // базовый урон, который наносит 1 юнит
            unitDmg:    function(){
                var unit = this.monster;
                return $scope.range( unit.damageMin, unit.damageMax );
            },
            // базовый урон, который наносит весь стек
            stackDmg:   function(){
                var unit = this.monster;
                return $scope.range( unit.damageMin * this.quantity , unit.damageMax * this.quantity );
            },
            setMonster: function(monster) {
                this.monster = monster;
            }
        }
    }

    $scope.Calculator = function(){
        return {
            damage: function(){

                // количество атакующих существ
                //if ( isNaN(player.quantity * 1) ) {
                    //var player.quantity   = $('#player-creature-number').val();
                //}

                // baseDmg -  базовый урон существа
                var baseDmg = $scope.player.monster.damage;

                // условный множитель урона 
                // зависит от того, больше или меньше атака и защита
                if ( $scope.player.monster.attack >= $scope.enemy.monster.defense ) {
                    var multDmg = 0.05;
                } else {
                    var multDmg = 0.025;
                }

                // модификатор урона
                // если атака больше, то за каждую единицу +5% урона
                // если защита больше, то за каждую единицу +2,5% урона
                // МD(баз) = (Атака - Защита) * 0,05  
                // MD(баз) = (Атака - Защита) * 0,025 
                var modDmg = ( $scope.player.monster.attack - $scope.enemy.monster.defense ) * multDmg;

                // допустимый промежуток для модификатора: [-70%, 300%] урона
                if ( modDmg > 3 ) { 
                    modDmg = 3;
                } else if ( modDmg < -0.7 ) { 
                    modDmg = -0.7;
                }

                // урон с учетом модификатора
                var modifiedDmg = baseDmg * modDmg;

                // итоговая формула урона
                var totalDmg = (modifiedDmg + baseDmg) * $scope.player.quantity;
                var totalDmgRounded = Math.round( (modifiedDmg + baseDmg) * player.quantity );

                return {
                    baseDmg:  baseDmg * $scope.player.quantity,
                        modDmg:   ( modDmg * 100 ),
                        totalDmg: totalDmg
                }
            },
            /*
            kill: function(){
                var calc = this;

                // количество атакующих существ
                var oursNum   = $('#player-creature-number').val();

                // количество защищающихся существ
                var theirsNum = $('#enemy-creature-number').val();

                var dmg = {
                    min: calc.damage(battle.attacker.damageMin, 1).totalDmg,
                    max: calc.damage(battle.attacker.damageMax, 1).totalDmg
                };

                var needToKill = {
                    min: battle.defenser.health * theirsNum / dmg.min,
                    max: battle.defenser.health * theirsNum / dmg.max
                };

                return needToKill;
            },
            healthLeft: function(){
                var calc = this;

                var dmg = {
                    min: calc.damage(battle.attacker.damageMin).totalDmg,
                    max: calc.damage(battle.attacker.damageMax).totalDmg
                }

                var healthLeft = {
                    min: battle.defenser.health - dmg.min,
                    max: battle.defenser.health - dmg.max,
                }

                if ( healthLeft.min < 0 ) { healthLeft.min = 0 }
                if ( healthLeft.max < 0 ) { healthLeft.max = 0 }

                return healthLeft;
            }
            */
        }
    }

    $http.get('data/monsters.json').success(function(data, status, headers, config){
        $scope.monsters = data;
        $scope.player = $scope.BattleSide(data[0]);
        $scope.enemy = $scope.BattleSide(data[0]);

        //$scope.calc = $scope.Calculator();
    });

}]);
