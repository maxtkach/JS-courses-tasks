sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];


summer_sports = sports.slice(5);
console.log(`*** Summer sports ***`)
console.log(summer_sports.join(`\n`));
winter_sports = sports.slice(0, 5);
console.log(`*** Winter sports ***`)
console.log(winter_sports.join(` \n`));


fruits = sports.slice(2, 3);
fruits += sports.slice(7, 9);
console.log(`*** Fruits ***`);
console.log(fruits);


	