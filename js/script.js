$(function(){ 

  //класс существа
  function Creature( name, city, level, damageMin, damageMax, attack, defense, health, speed, growth, price ){
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
    var table = $('#your-creature');
    for ( var key in this ) {
      $(table).find('[data-value="' + key + '"]').text( this[key] );
    }
    $(table).find('[data-value="damage"]').text( this.damageMin + "-" + this.damageMax );
  };

  //список существ
  var creatures = {
    list: [],
    //добавление существа в список
    add: function( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ){
      this.list.push( new Creature( name, level, city, damageMin, damageMax, attack, defense, health, speed, growth, price ) );
    },
    //вывод списка существ
    print: function(){
      for (var i = 0; i < this.list.length; i++) {
        var value = this.list[i],
           output = 
             '<li><a href="#" data-creature-id="' +
             i + '">' + 
             value.name +
             '</a></li>\n';
        $('#creatures-list').append(output);
      }
    }
  };

  //создание существ
  creatures.add( "Копейщик",           1, "Замок", 1, 3, 4, 5, 10, 4, 14, 60  );
  creatures.add( "Алебардщик",         1, "Замок", 2,	3, 6, 5, 10, 5, 14, 75  );
  creatures.add( "Арбалетчик",         2, "Замок", 2, 3, 6, 3, 10, 4, 9, 100  );
  creatures.add( "Стрелок",            2, "Замок", 2, 3, 6, 3, 10, 6, 9, 150  );
  creatures.add( "Грифон",             3, "Замок", 3, 6, 8, 8, 25, 6, 7, 200  );
  creatures.add( "Королевский грифон", 3, "Замок", 3, 6, 9, 9, 25, 9, 7, 240  );
  creatures.add( "Рыцарь",             4, "Замок", 6, 9, 10, 12, 35, 5, 4, 300  );
  creatures.add( "Крестоносец",        4, "Замок", 7, 10, 12, 12, 35, 6, 4, 400  );
  creatures.add( "Монах",              5, "Замок", 10, 12, 12, 7, 30, 5, 3, 400  );
  creatures.add( "Фанатик",            5, "Замок", 10, 12, 12, 10, 30, 7, 3, 450  );
  creatures.add( "Кавалерист",         6, "Замок", 15, 25, 15, 15, 100, 7, 2, 1000  );
  creatures.add( "Чемпион",            6, "Замок", 20, 25, 16, 16, 100, 9, 2, 1200  );
  creatures.add( "Ангел",              7, "Замок", 50, 50, 20, 20, 200, 12, 1, 3000  );
  creatures.add( "Архангел",           7, "Замок", 50, 50, 30, 30, 250, 18, 1, 5000  );

  console.log( creatures );

  creatures.print();

  //events binding
  $('#creatures-list a').on('click', function(){
    var id = $(this).data('creature-id');
    console.log( creatures.list[id].print() );
  });

});
