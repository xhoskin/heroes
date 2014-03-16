$(function(){ 

  //класс существа
  function Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
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

  //методы существа
  Creature.prototype.print = function(index) {
    var table = $('[data-creature="' + index + '"]');
    for ( var key in this ) {
      $(table).find('[data-value="' + key + '"]').text( this[key] );
    }
    $(table).find('[data-value="damage"]').text( this.damageMin + "-" + this.damageMax );
  };

  //список существ и функция добавления в него новых существ
  var creaturesList = [];
  var newCreature = function( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
    creaturesList.push( new Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ) );
  }

  //создание существ
  newCreature( "Копейщик",           1, "Замок", 1, 3, 4, 5, 10, 4, 14, 60 );
  newCreature( "Алебардщик",         1, "Замок", 2,	3, 6, 5, 10, 5, 14, 75 );
  newCreature( "Арбалетчик",         2, "Замок", 2, 3, 6, 3, 10, 4, 9, 100);
  newCreature( "Стрелок",            2, "Замок", 2, 3, 6, 3, 10, 6, 9, 150);
  newCreature( "Грифон",             3, "Замок", 3, 6, 8, 8, 25, 6, 7, 200);
  newCreature( "Королевский грифон", 3, "Замок", 3, 6, 9, 9, 25, 9, 7, 240);
  newCreature( "Рыцарь",             4, "Замок", 6, 9, 10, 12, 35, 5, 4, 300);
  newCreature( "Крестоносец",        4, "Замок", 7, 10, 12, 12, 35, 6, 4, 400);
  newCreature( "Монах",              5, "Замок", 10, 12, 12, 7, 30, 5, 3, 400);
  newCreature( "Фанатик",            5, "Замок", 10, 12, 12, 10, 30, 7, 3, 450);
  newCreature( "Кавалерист",         6, "Замок", 15, 25, 15, 15, 100, 7, 2, 1000);
  newCreature( "Чемпион",            6, "Замок", 20, 25, 16, 16, 100, 9, 2, 1200);
  newCreature( "Ангел",              7, "Замок", 50, 50, 20, 20, 200, 12, 1, 3000);
  newCreature( "Архангел",           7, "Замок", 50, 50, 30, 30, 250, 18, 1, 5000);


  //вывод всех существ на экран
  for (var i = 0; i < creaturesList.length; i++) {
    creaturesList[i].print(i);
  }

  console.log( creaturesList );

});
