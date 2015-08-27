﻿//
// == Города
// ------------------------------------------------------------

var cities = new CityList();

castle     = new City("Замок",      cities);
rampart    = new City("Оплот",      cities);
necropolis = new City("Некрополис", cities);
dungeon    = new City("Темница",    cities);
fortress   = new City("Крепость",   cities);
stronghold = new City("Цитадель ",  cities);
tower      = new City("Башня",      cities);
inferno    = new City("Инферно",    cities);
conflux    = new City("Сопряжение", cities);
neutral    = new City("Нейтралы",   cities);

//
// == Существа
// ------------------------------------------------------------

// ** Замок
castle.addCreature( "Копейщик",           1, 1,  3,  4,  5,  10,  4,  14, 60,   '', 0  );
castle.addCreature( "Алебардщик",         1, 2,  3,  6,  5,  10,  5,  14, 75,   '', 0  );
castle.addCreature( "Арбалетчик",         2, 2,  3,  6,  3,  10,  4,  9,  100,  '', 0  );
castle.addCreature( "Стрелок",            2, 2,  3,  6,  3,  10,  6,  9,  150,  '', 0  );
castle.addCreature( "Грифон",             3, 3,  6,  8,  8,  25,  6,  7,  200,  '', 0  );
castle.addCreature( "Королевский грифон", 3, 3,  6,  9,  9,  25,  9,  7,  240,  '', 0  );
castle.addCreature( "Рыцарь",             4, 6,  9,  10, 12, 35,  5,  4,  300,  '', 0  );
castle.addCreature( "Крестоносец",        4, 7,  10, 12, 12, 35,  6,  4,  400,  '', 0  );
castle.addCreature( "Монах",              5, 10, 12, 12, 7,  30,  5,  3,  400,  '', 0  );
castle.addCreature( "Фанатик",            5, 10, 12, 12, 10, 30,  7,  3,  450,  '', 0  );
castle.addCreature( "Кавалерист",         6, 15, 25, 15, 15, 100, 7,  2,  1000, '', 0  );
castle.addCreature( "Чемпион",            6, 20, 25, 16, 16, 100, 9,  2,  1200, '', 0  );
castle.addCreature( "Ангел",              7, 50, 50, 20, 20, 200, 12, 1,  3000, '1 самоцвет', 0 );
castle.addCreature( "Архангел",           7, 50, 50, 30, 30, 250, 18, 1,  5000, '3 самоцвет', 0 );

// ** Оплот
rampart.addCreature( 'Кентавр',           1, 2,  3,	 5,	 3,	 8,	  6,  14, 70,   '', 1 );
rampart.addCreature( "Капитан кентавров", 1, 2,  3,  6,  3,  10,  8,  14, 90,   '', 1 );
rampart.addCreature( "Гном",              2, 2,  4,  6,  7,  20,  3,  8,  120,  '', 1 );
rampart.addCreature( "Боевой гном",       2, 2,  4,  7,  7,  20,  5,  8,  150,  '', 1 );
rampart.addCreature( "Лесной эльф",       3, 3,  5,  9,  5,  15,  6,  7,  200,  '', 1 );
rampart.addCreature( "Великий эльф",      3, 3,  5,  9,  5,  15,  7,  7,  225,  '', 1 );
rampart.addCreature( "Пегас",             4, 5,  9,  9,  8,  30,  8,  5,  250,  '', 1 );
rampart.addCreature( "Серебряный пегас",  4, 5,  9,  9,  10, 30,  12, 5,  275,  '', 1 );
rampart.addCreature( "Дендроид-страж",    5, 10, 14, 9,  12, 55,  3,  3,  350,  '', 1 );
rampart.addCreature( "Дендроид-солдат",   5, 10, 14, 9,  12, 65,  4,  3,  425,  '', 1 );
rampart.addCreature( "Единорог",          6, 18, 22, 15, 14, 90,  7,  2,  850,  '', 1 );
rampart.addCreature( "Боевой единорог",   6, 18, 22, 15, 14, 110, 9,  2,  950,  '', 1 );
rampart.addCreature( "Зелёный дракон",    7, 40, 50, 18, 18, 180, 10, 1,  2400, '1 кристалл', 1 );
rampart.addCreature( "Золотой дракон",    7, 40, 50, 27, 27, 250, 16, 1,  4000, '2 кристалл', 1 );

// ** Башня	
tower.addCreature( 'Гремлин',               1,	1,	2,	3,	3,	4,	4,	16,	30, '', 2 );
tower.addCreature( 'Мастер-гремлин',        1,  1, 2, 4, 4, 4, 5, 16, 40, '', 2 );
tower.addCreature( 'Каменная горгулья',     2,  2, 3, 6, 6, 16, 6, 9, 130, '', 2 );
tower.addCreature( 'Обсидиановая горгулья', 2,  2, 3, 7, 7, 16, 9, 9, 160, '', 2 );
tower.addCreature( 'Каменный голем',        3,  4, 5, 7, 10, 30, 3, 6, 150, '', 2 );
tower.addCreature( 'Стальной голем',        3,  4, 5, 9, 10, 35, 5, 6, 200, '', 2 );
tower.addCreature( 'Маг',                   4,  7, 9, 11, 8, 25, 5, 4, 350, '', 2 );
tower.addCreature( 'Архимаг',               4,  7, 9, 12, 9, 30, 7, 4, 450, '', 2 );
tower.addCreature( 'Джинн',                 5,  13, 16, 12, 12, 40, 7, 3, 550, '', 2 );
tower.addCreature( 'Мастер-джинн',          5,  13, 16, 12, 12, 40, 11, 3, 600, '', 2 );
tower.addCreature( 'Нага',                  6,  20, 20, 16, 13, 110, 5, 2, 1100, '', 2 );
tower.addCreature( 'Королевская нага',      6,  30, 30, 16, 13, 110, 7, 2, 1600, '', 2 );
tower.addCreature( 'Гигант',                7,  40, 60, 19, 16, 150, 7, 1, 2000, '1 самоцвет', 2 );
tower.addCreature( 'Титан',                 7,  40, 60, 24, 24, 300, 11, 1, 5000, '2 самоцвета', 2 );

// ** Некрополис	
necropolis.addCreature( 'Скелет',		1,	1,	3,	5,	4,	6,	4,	12,	60	, '', 3 );
necropolis.addCreature( 'Скелет-воин',		1,		1,	3,	6,	6,	6,	5,	12,	70	, '', 3 );
necropolis.addCreature( 'Живой мертвец',		2,		2,	3,	5,	5,	15,	3,	8,	100, '', 3 );
necropolis.addCreature( 'Зомби',		2,		2,	3,	5,	5,	20,	4,	8,	125	, '', 3 );
necropolis.addCreature( 'Страж',		3,		3,	5,	7,	7,	18,	5,	7,	200	, '', 3 );
necropolis.addCreature( 'Привидение',		3,		3,	5,	7,	7,	18,	7,	7,	230	, '', 3 );
necropolis.addCreature( 'Вампир',		4,		5,	8,	10,	9,	30,	6,	4,	360	, '', 3 );
necropolis.addCreature( 'Вампир-лорд',		4,		5,	8,	10,	10,	40,	9,	4,	500	, '', 3 );
necropolis.addCreature( 'Лич',		5,		11,	13,	13,	10,	30,	6,	3,	550	, '', 3 );
necropolis.addCreature( 'Могущественный лич',		5,		11,	15,	13,	10,	40,	7,	3,	600	, '', 3 );
necropolis.addCreature( 'Чёрный рыцарь',		6,		15,	30,	16,	16,	120,	7,	2,	1200	, '', 3 );
necropolis.addCreature( 'Рыцарь смерти',		6,		15,	30,	18,	18,	120,	9,	2,	1500	, '', 3 );
necropolis.addCreature( 'Костяной дракон',		7,		25,	50,	17,	15,	150,	9,	1,	1800	, '', 3 );
necropolis.addCreature( 'Дракон-привидение',		7,		25,	50,	19,	17,	200,	14,	1,	3000,	'1 ртуть', 3 );

// ** Темница   
dungeon.addCreature( 'Троглодит',		1,		1,	3,	4,	3,	5,	4,	14,	50, '', 4 );	
dungeon.addCreature( 'Адский троглодит',		1,		1,	3,	5,	4,	6,	5,	14,	65, '', 4 );	
dungeon.addCreature( 'Гарпия',		2,		1,	4,	5,	6,	14,	6,	8,	130, '', 4 );	
dungeon.addCreature( 'Гарпия-ведьма',		2,		1,	4,	6,	6,	14,	9,	8,	170, '', 4 );	
dungeon.addCreature( 'Бехолдер',		3,		3,	5,	9,	7,	22,	5,	7,	250, '', 4 );	
dungeon.addCreature( 'Созерцатель',		3,		3,	5,	10,	8,	22,	7,	7,	280, '', 4 );	
dungeon.addCreature( 'Медуза',		4,		6,	8,	9,	9,	25,	5,	4,	300, '', 4 );	
dungeon.addCreature( 'Королева медуз',		4,		6,	8,	10,	10,	30,	6,	4,	330, '', 4 );	
dungeon.addCreature( 'Минотавр',		5,		12,	20,	14,	12,	50,	6,	3,	500, '', 4 );	
dungeon.addCreature( 'Король минотавров',		5,		12,	20,	15,	15,	50,	8,	3,	575, '', 4 );	
dungeon.addCreature( 'Мантикора',		6,		14,	20,	15,	13,	80,	7,	2,	850, '', 4 );	
dungeon.addCreature( 'Скорпикора',		6,		14,	20,	16,	14,	80,	11,	2,	1050, '', 4 );	
dungeon.addCreature( 'Красный дракон',		7,		40,	50,	19,	19,	180,	11,	1,	2500,	'1 сера', 4 );
dungeon.addCreature( 'Чёрный дракон',		7,		40,	50,	25,	25,	300,	15,	1,	4000,	'2 серы', 4 );

// ** Инферно   
inferno.addCreature( 'Бес',		1,		1,	2,	2,	3,	4,	5,	15,	50, '', 5 );	
inferno.addCreature( 'Чёрт',		1,		1,	2,	4,	4,	4,	7,	15,	60, '', 5 );	
inferno.addCreature( 'Гог',		2,		2,	4,	6,	4,	13,	4,	8,	125, '', 5 );	
inferno.addCreature( 'Магог',		2,		2,	4,	7,	4,	13,	6,	8,	175, '', 5 );	
inferno.addCreature( 'Адская гончая',		3,		2,	7,	10,	6,	25,	7,	5,	200, '', 5 );	
inferno.addCreature( 'Цербер',		3,		2,	7,	10,	8,	25,	8,	5,	250, '', 5 );	
inferno.addCreature( 'Демон',		4,		7,	9,	10,	10,	35,	5,	4,	250, '', 5 );	
inferno.addCreature( 'Рогатый демон',		4,		7,	9,	10,	10,	40,	6,	4,	270, '', 5 );	
inferno.addCreature( 'Порождение зла',		5,		13,	17,	13,	13,	45,	6,	3,	500, '', 5 );	
inferno.addCreature( 'Адское отродье',		5,		13,	17,	13,	13,	45,	7,	3,	700, '', 5 );	
inferno.addCreature( 'Ифрит',		6,		16,	24,	16,	12,	90,	9,	2,	900, '', 5 );	
inferno.addCreature( 'Султан-ифрит',		6,		16,	24,	16,	14,	90,	13,	2,	1100, '', 5 );	
inferno.addCreature( 'Дьявол',		7,		30,	40,	19,	21,	160,	11,	1,	2700,	'1 ртуть', 5 );
inferno.addCreature( 'Архидьявол',		7,		30,	40,	26,	28,	200,	17,	1,	4500,	'2 ртути', 5 );

// ** Крепость  
fortress.addCreature( 'Гнолл',		1,		2,	3,	3,	5,	6,	4,	12,	50	, '', 6 );
fortress.addCreature( 'Гнолл-мародёр',		1,		2,	3,	4,	6,	6,	5,	12,	70, '', 6 );	
fortress.addCreature( 'Ящер',		2,		2,	3,	5,	6,	14,	4,	9,	110, '', 6 );	
fortress.addCreature( 'Ящер-воин',		2,		2,	5,	6,	8,	15,	5,	9,	140, '', 6 );	
fortress.addCreature( 'Змий',		3,		2,	5,	7,	9,	20,	9,	8,	220, '', 6 );	
fortress.addCreature( 'Стрекоза',		3,		2,	5,	8,	10,	20,	13,	8,	240, '', 6 );	
fortress.addCreature( 'Василиск',		4,		6,	10,	11,	11,	35,	5,	4,	325, '', 6 );	
fortress.addCreature( 'Великий василиск',		4,		6,	10,	12,	12,	40,	7,	4,	400, '', 6 );	
fortress.addCreature( 'Горгона',		5,		12,	16,	10,	14,	70,	5,	3,	525, '', 6 );	
fortress.addCreature( 'Могучая горгона',		5,		12,	16,	11,	16,	70,	6,	3,	600, '', 6 );	
fortress.addCreature( 'Виверна',		6,		14,	18,	14,	14,	70,	7,	2,	800, '', 6 );	
fortress.addCreature( 'Виверна-монарх',		6,		18,	22,	14,	14,	70,	11,	2,	1100	, '', 6 );
fortress.addCreature( 'Гидра',		7,		25,	45,	16,	18,	175,	5,	1,	2200, '', 6 );	
fortress.addCreature( 'Гидра хаоса',		7,		25,	45,	18,	20,	250,	7,	1,	3500,	'1 сера', 6 );

// ** Цитадель  
stronghold.addCreature( 'Гоблин',		1,		1,	2,	4,	2,	5,	5,	15,	40, '', 7 );	
stronghold.addCreature( 'Хобгоблин',		1,		1,	2,	5,	3,	5,	7,	15,	50, '', 7 );	
stronghold.addCreature( 'Наездник на волке',		2,		2,	4,	7,	5,	10,	6,	9,	100, '', 7 );	
stronghold.addCreature( 'Налётчик',		2,		3,	4,	8,	5,	10,	8,	9,	140, '', 7 );	
stronghold.addCreature( 'Орк',		3,		2,	5,	8,	4,	15,	4,	7,	150, '', 7 );	
stronghold.addCreature( 'Орк-вождь',		3,		2,	5,	8,	4,	20,	5,	7,	165, '', 7 );	
stronghold.addCreature( 'Огр',		4,		6,	12,	13,	7,	40,	4,	4,	300, '', 7 );	
stronghold.addCreature( 'Огр-маг',		4,		6,	12,	13,	7,	60,	5,	4,	400, '', 7 );	
stronghold.addCreature( 'Птица рух',		5,		11,	15,	13,	11,	60,	7,	3,	600, '', 7 );	
stronghold.addCreature( 'Птица грома',		5,		11,	15,	13,	11,	60,	11,	3,	700, '', 7 );	
stronghold.addCreature( 'Циклоп',		6,		16,	20,	15,	12,	70,	6,	2,	750, '', 7 );	
stronghold.addCreature( 'Король циклопов',		6,		16,	20,	17,	13,	70,	8,	2,	1100, '', 7 );	
stronghold.addCreature( 'Чудище',		7,		30,	50,	17,	17,	160,	6,	1,	1500, '', 7 );	
stronghold.addCreature( 'Древнее чудище',		7,		30,	50,	19,	19,	300,	9,	1,	3000,	'1 кристалл', 7 );

// ** Сопряжение    
conflux.addCreature( 'Маленькая фея',		1,		1,	2,	2,	2,	3,	7,	20,	25, '', 8 );	
conflux.addCreature( 'Фея',		1,		1,	3,	2,	2,	3,	9,	20,	30, '', 8 );	
conflux.addCreature( 'Элементаль воздуха',		2,		2,	8,	9,	9,	25,	7,	6,	250, '', 8 );	
conflux.addCreature( 'Штормовой элементаль',		2,		2,	8,	9,	9,	25,	8,	6,	275, '', 8 );	
conflux.addCreature( 'Элементаль воды',		3,		3,	7,	8,	10,	30,	5,	6,	300, '', 8 );	
conflux.addCreature( 'Ледяной элементаль',		3,		3,	7,	8,	10,	30,	6,	6,	375, '', 8 );	
conflux.addCreature( 'Элементаль огня',		4,		4,	6,	10,	8,	35,	6,	5,	350, '', 8 );	
conflux.addCreature( 'Энергетический элементаль',		4,		4,	6,	12,	8,	35,	8,	5,	400, '', 8 );	
conflux.addCreature( 'Элементаль земли',		5,		4,	8,	10,	10,	40,	4,	4,	400, '', 8 );	
conflux.addCreature( 'Магмовый элементаль',		5,		6,	10,	11,	11,	40,	6,	4,	500, '', 8 );	
conflux.addCreature( 'Психический элементаль',		6,		10,	20,	15,	13,	75,	7,	2,	750, '', 8 );	
conflux.addCreature( 'Магический элементаль',		6,		15,	25,	15,	13,	80,	9,	2,	800, '', 8 );	
conflux.addCreature( 'Огненная птица',		7,		30,	40,	18,	18,	150,	15,	2,	1500, '', 8 );	
conflux.addCreature( 'Феникс',		7,		30,	40,	21,	18,	200,	21,	2,	2000,	'1 ртуть', 8 );

// ** Нейтрал   
neutral.addCreature( 'Крестьянин',		1,		1,	1,	1,	1,	1,	3,	25,	10, '', 9 );	
neutral.addCreature( 'Хоббит',		1,		1,	3,	4,	2,	4,	5,	15,	40, '', 9 );	
neutral.addCreature( 'Наездник на кабане',		2,		2,	3,	6,	5,	15,	6,	8,	150, '', 9 );	
neutral.addCreature( 'Вор',		2,		2,	4,	8,	3,	10,	6,	8,	100, '', 9 );	
neutral.addCreature( 'Кочевник',		3,		2,	6,	9,	8,	30,	7,	7,	200, '', 9 );	
neutral.addCreature( 'Мумия',		3,		3,	5,	7,	7,	30,	5,	7,	300, '', 9 );	
neutral.addCreature( 'Снайпер',		4,		8,	10,	12,	10,	15,	9,	4,	400, '', 9 );	
neutral.addCreature( 'Золотой голем',		5,		8,	10,	11,	12,	50,	5,	3,	500, '', 9 );	
neutral.addCreature( 'Тролль',		5,		10,	15,	14,	7,	40,	7,	3,	500, '', 9 );	
neutral.addCreature( 'Алмазный голем',		6,		10,	14,	13,	12,	60,	5,	2,	750, '', 9 );	
neutral.addCreature( 'Чародей',		6,		14,	14,	17,	12,	30,	9,	2,	750, '', 9 );	
neutral.addCreature( 'Сказочный дракон',		7,		20,	30,	20,	20,	500,	15,	1,	10000,	'8 самоцветов', 9 );
neutral.addCreature( 'Ржавый дракон',		7,		50,	50,	30,	30,	750,	17,	1,	15000,	'14 серы', 9 );
neutral.addCreature( 'Кристаллический дракон',		7,		60,	75,	40,	40,	800,	16,	1,	20000,	'10 кристаллов', 9 );
neutral.addCreature( 'Лазурный дракон',		7,		70,	80,	50,	50,	1000,	19,	1,	30000,	'20 ртути', 9 );
