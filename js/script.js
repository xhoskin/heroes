(function(){ 

  //класс существа
  function Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ) {
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

  //города
  var cities = {
    list: [],
    add: function(obj) {
      this.list.push(obj);
    }
  }

  function City( name, list ) {
    //properties
    this.name      = name,
    this.list      = [];
    cities.add( this );
  }


  //методы города
  City.prototype.print = function(){
    for (var i = 0; i < this.list.length; i++) {
      var value = this.list[i],
         output = 
           '<li><a href="#" data-creature-id="' + i +
           '" data-city="' + this.name
           + '>' + 
           value.name +
           '</a></li>\n';
      $('#creatures-list').append(output);
      //events binding
      $('#creatures-list a').on('click', function(){
        var id = $(this).data('creature-id');
        console.log( this.list[id].print() );
      });

    }
  }
  
  //добавление существа в список
  City.prototype.addCreature = function( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
    this.list.push( new Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ) );
  }

  //методы существа
  Creature.prototype.print = function(index) {
    var table = $('#your-creature');
    table.show();
    for ( var key in this ) {
      $(table).find('[data-value="' + key + '"]').text( this[key] );
    }
    $(table).find('[data-value="damage"]').text( this.damageMin + "-" + this.damageMax );
  };

  //создание городов
  castle  = new City("Замок");
  rampart = new City("Оплот");

  castle.addCreature( "Копейщик",           1,  1,  3,  4,  5,  10,  4, 14, 60  );
  castle.addCreature( "Алебардщик",         1,  2,  3,  6,  5,  10,  5, 14, 75  );
  castle.addCreature( "Арбалетчик",         2,  2,  3,  6,  3,  10,  4,  9, 100  );
  castle.addCreature( "Стрелок",            2,  2,  3,  6,  3,  10,  6,  9, 150  );
  castle.addCreature( "Грифон",             3,  3,  6,  8,  8,  25,  6,  7, 200  );
  castle.addCreature( "Королевский грифон", 3,  3,  6,  9,  9,  25,  9,  7, 240  );
  castle.addCreature( "Рыцарь",             4,  6,  9, 10, 12,  35,  5,  4, 300  );
  castle.addCreature( "Крестоносец",        4,  7, 10, 12, 12,  35,  6,  4, 400  );
  castle.addCreature( "Монах",              5, 10, 12, 12,  7,  30,  5,  3, 400  );
  castle.addCreature( "Фанатик",            5, 10, 12, 12, 10,  30,  7,  3, 450  );
  castle.addCreature( "Кавалерист",         6, 15, 25, 15, 15, 100,  7,  2, 1000  );
  castle.addCreature( "Чемпион",            6, 20, 25, 16, 16, 100,  9,  2, 1200  );
  castle.addCreature( "Ангел",              7, 50, 50, 20, 20, 200, 12,  1, 3000  );
  castle.addCreature( "Архангел",           7, 50, 50, 30, 30, 250, 18,  1, 5000  );
  
  rampart.addCreature( "Капитан кентавров", 1,  2,  3,  6,  3,  10,  8, 14,   90 );
  rampart.addCreature( "Гном",              2,  2,  4,  6,  7,  20,  3,  8,  120 );
  rampart.addCreature( "Боевой гном",       2,  2,  4,  7,  7,  20,  5,  8,  150 );
  rampart.addCreature( "Лесной эльф",       3,  3,  5,  9,  5,  15,  6,  7,  200 );
  rampart.addCreature( "Великий эльф",      3,  3,  5,  9,  5,  15,  7,  7,  225 );
  rampart.addCreature( "Пегас",             4,  5,  9,  9,  8,  30,  8,  5,  250 );
  rampart.addCreature( "Серебряный пегас",  4,  5,  9,  9, 10,  30, 12,  5,  275 );
  rampart.addCreature( "Дендроид-страж",    5, 10, 14,  9, 12,  55,  3,  3,  350 );
  rampart.addCreature( "Дендроид-солдат",   5, 10, 14,  9, 12,  65,  4,  3,  425 );
  rampart.addCreature( "Единорог",          6, 18, 22, 15, 14,  90,  7,  2,  850 );
  rampart.addCreature( "Боевой единорог",   6, 18, 22, 15, 14, 110,  9,  2,  950 );
  rampart.addCreature( "Зелёный дракон",    7, 40, 50, 18, 18, 180, 10,  1, 2400 );
  rampart.addCreature( "Золотой дракон",    7, 40, 50, 27, 27, 250, 16,  1, 4000 );

  rampart.print();

})();
