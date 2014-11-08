//(function(){ 

  var attacker = {},
      defenser = {};

  //класс существа
  function Creature( name, level, damageMin, damageMax, attack, defense, health, speed, growth, goldPrice, resourcePrice ) {
    //properties
    this.name          = name,
    this.level         = level,
    this.damageMin     = damageMin,
    this.damageMax     = damageMax,
    this.attack        = attack,
    this.defense       = defense,
    this.health        = health,
    this.speed         = speed,
    this.growth        = growth,
    this.goldPrice     = goldPrice,
    this.resourcePrice = resourcePrice
  }

  // класс города
  function City( name, list ) {
    //properties
    this.name      = name,
    this.list      = [];
    cities.add( this );
  }

  // список городов
  var cities = {
    list: [],
    add: function(obj) {
      this.list.push(obj);
    },
    print: function(){
      for ( var v in this.list ) {
        $('.city-list').append( '<li><a href="#" data-city="' + v + '">' + this.list[v].name + '</a></li>' );
      }
      //events binding
      $('.city-list a').on('click', function(){
        var id   = $(this).data('city'),
            army = $(this).parent().parent().data('army');
        $(this).tab('show');
        cities.list[id].print(army);
      });
    }
  }

  //методы города
  City.prototype.print = function(army){
    var self = this;
    $('#' + army + '-creatures').empty();
    for (var i = 0; i < this.list.length; i++) {
      var value = this.list[i],
         output = 
           '<li><a href="#" data-creature="' + i +
           '" data-city="' + this.name + '">' + 
           value.name + '</a></li>\n';
      $('#' + army + '-creatures').append(output);
      //events binding
      $('#' + army + '-creatures a').on('click', function(e){
        e.preventDefault();
        var id   = $(this).data('creature');
        self.list[id].print(army);
      });

    }
  }
  
  //добавление существа в список
  City.prototype.addCreature = function( name, level, damageMin, damageMax, attack, defense, health, speed, growth, goldPrice, resourcePrice ){
    this.list.push( new Creature( name, level, damageMin, damageMax, attack, defense, health, speed, growth, goldPrice, resourcePrice) );
  }

  //методы существа
  Creature.prototype.print = function(army) {
    var table = $('#' + army + '-creature'),
        damage = this.damageMin + "-" + this.damageMax ;
    table.show();
    for ( var key in this ) {
      $(table).find('[data-value="' + key + '"]').text( this[key] );
    }
    if ( this.damageMin === this.damageMax ) {
      damage = this.damageMin
    }
    $(table).find('[data-value="damage"]').text( damage );
    $(table).find('[data-value="price"]').html( 
      this.resourcePrice === '' ? this.goldPrice : this.goldPrice + "<br>" + this.resourcePrice 
    );
    if ( army === 'player') {
      attacker = this;
    } else {
      defenser = this;
    }
    printDamage();
  };

  //создание городов
  castle     = new City("Замок");
  rampart    = new City("Оплот");
  necropolis = new City("Некрополис");
  dungeon    = new City("Темница");
  fortress   = new City("Крепость");
  stronghold = new City("Цитадель ");
  fortress   = new City("Крепость");
  conflux    = new City("Сопряжение");
  

  castle.addCreature( "Копейщик",           1, 1,  3,  4,  5,  10,  4,  14, 60,   ''  );
  castle.addCreature( "Алебардщик",         1, 2,  3,  6,  5,  10,  5,  14, 75,   ''  );
  castle.addCreature( "Арбалетчик",         2, 2,  3,  6,  3,  10,  4,  9,  100,  ''  );
  castle.addCreature( "Стрелок",            2, 2,  3,  6,  3,  10,  6,  9,  150,  ''  );
  castle.addCreature( "Грифон",             3, 3,  6,  8,  8,  25,  6,  7,  200,  ''  );
  castle.addCreature( "Королевский грифон", 3, 3,  6,  9,  9,  25,  9,  7,  240,  ''  );
  castle.addCreature( "Рыцарь",             4, 6,  9,  10, 12, 35,  5,  4,  300,  ''  );
  castle.addCreature( "Крестоносец",        4, 7,  10, 12, 12, 35,  6,  4,  400,  ''  );
  castle.addCreature( "Монах",              5, 10, 12, 12, 7,  30,  5,  3,  400,  ''  );
  castle.addCreature( "Фанатик",            5, 10, 12, 12, 10, 30,  7,  3,  450,  ''  );
  castle.addCreature( "Кавалерист",         6, 15, 25, 15, 15, 100, 7,  2,  1000, ''  );
  castle.addCreature( "Чемпион",            6, 20, 25, 16, 16, 100, 9,  2,  1200, ''  );
  castle.addCreature( "Ангел",              7, 50, 50, 20, 20, 200, 12, 1,  3000, '1 самоцвет' );
  castle.addCreature( "Архангел",           7, 50, 50, 30, 30, 250, 18, 1,  5000, '3 самоцвет' );
  //castle.addCreature( "Архангел",           7, 50, 50, 30, 50, 250, 18, 1,  5000, '3 самоцвет' );

  rampart.addCreature( "Капитан кентавров", 1, 2,  3,  6,  3,  10,  8,  14, 90,   '' );
  rampart.addCreature( "Гном",              2, 2,  4,  6,  7,  20,  3,  8,  120,  '' );
  rampart.addCreature( "Боевой гном",       2, 2,  4,  7,  7,  20,  5,  8,  150,  '' );
  rampart.addCreature( "Лесной эльф",       3, 3,  5,  9,  5,  15,  6,  7,  200,  '' );
  rampart.addCreature( "Великий эльф",      3, 3,  5,  9,  5,  15,  7,  7,  225,  '' );
  rampart.addCreature( "Пегас",             4, 5,  9,  9,  8,  30,  8,  5,  250,  '' );
  rampart.addCreature( "Серебряный пегас",  4, 5,  9,  9,  10, 30,  12, 5,  275,  '' );
  rampart.addCreature( "Дендроид-страж",    5, 10, 14, 9,  12, 55,  3,  3,  350,  '' );
  rampart.addCreature( "Дендроид-солдат",   5, 10, 14, 9,  12, 65,  4,  3,  425,  '' );
  rampart.addCreature( "Единорог",          6, 18, 22, 15, 14, 90,  7,  2,  850,  '' );
  rampart.addCreature( "Боевой единорог",   6, 18, 22, 15, 14, 110, 9,  2,  950,  '' );
  rampart.addCreature( "Зелёный дракон",    7, 40, 50, 18, 18, 180, 10, 1,  2400, '1 кристалл' );
  rampart.addCreature( "Золотой дракон",    7, 40, 50, 27, 27, 250, 16, 1,  4000, '2 кристалл' );

  var calculateDamage = function( baseDmg ){
    var 
        // количество атакующих существ
        oursNum   = $('#player-creature-number').val(),    
        // количество защищающихся существ
        theirsNum = $('#enemy-creature-number').val();
    
        // baseDmg -  базовый урон существа
                 
        // условный множитель урона 
        // зависит от того, больше или меньше атака и защита
        if ( attacker.attack >= defenser.defense ) {
            var multDmg = 0.05;
        } else {
            var multDmg = 0.025;
        }
        
        // модификатор урона
        // если атака больше, то за каждую единицу +5% урона
        // если защита больше, то за каждую единицу +2,5% урона
        // МD(баз) = (Атака - Защита) * 0,05  
        // MD(баз) = (Атака - Защита) * 0,025 
        var modDmg = ( attacker.attack - defenser.defense ) * multDmg;
        
        // допустимый промежуток для модификатора: -70%-300% урона
        if ( modDmg > 3 ) { 
            modDmg = 3;
        } else if ( modDmg < -0.7 ) { 
            modDmg = -0.7;
        }
        
        // урон с учетом модификатора
        var modifiedDmg = modDmg * baseDmg;
        
        // итоговая формула урона
        var totalDmg = (modifiedDmg + baseDmg) * oursNum;
        var totalDmgRounded = Math.round( (modifiedDmg + baseDmg) * oursNum );

        return {
            baseDmg:  baseDmg * oursNum,
            modDmg:   ( modDmg * 100 ) + '%',
            totalDmg: totalDmg
        }

  }

  var printDamage = function() {
    var min = calculateDamage(attacker.damageMin)
        max  = calculateDamage(attacker.damageMax)
    $('#calc-damage-base').html( min.baseDmg + '-' + max.baseDmg );
    $('#calc-damage-mod').html( min.modDmg );
    $('#calc-damage-total').html( min.totalDmg + '-' + max.totalDmg );
  }

  $('#player-creature-number').on('input', printDamage);



//})();

$(function () {
  cities.print()
  $('#player-cities>li:nth(0)>a').click();
  $('#player-creatures>li:nth(0)>a').click();
  $('#player-creature-number').val(1);

  $('#enemy-cities>li:nth(0)>a').click();
  $('#enemy-creatures>li:nth(13)>a').click();
  $('#enemy-creature-number').val(2);

  printDamage();
});
