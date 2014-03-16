$(function(){ 

  function Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
    //methods
    this.print = function(index) {
      var table = $('[data-creature="' + index + '"]');
      for ( var key in this ) {
        $(table).find('[data-value="' + key + '"]').text( this[key] );
      }
      $(table).find('[data-value="damage"]').text( this.damageMin + "-" + this.damageMax );
    };

    //properties
    this.name      = name,
    this.city      = city,
    this.level     = level,
    this.damageMin = damageMin,
    this.damageMax = damageMax,
    this.attack    = attack,
    this.defense   = defense,
    this.health    = health,
    this.speed     = speed,
    this.growth    = growth,
    this.price     = price

  }

  var creaturesList = [];
  var newCreature = function( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
    creaturesList.push( new Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ) );
  }

  //creation
  newCreature( "Копейщик", 1, "Замок", 1, 3, 4, 5, 10, 4, 14, 60 );
  newCreature( "Алебардщик",	1,	"Замок",	2,	3,	6,	5,	10,	5,	14,	75 );

  //printing
  for (var i = 0; i < creaturesList.length; i++) {
    creaturesList[i].print(i);
  }

});


    apple  = red
    grass += green
    sky   -= blue
