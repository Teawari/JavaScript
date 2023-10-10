// const marvel_heroes = ['Ironman', 'Captain America', 'Thor'];
// const dc_heroes = ['Batman', 'Superman', 'Aquaman'];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

/* here as after pushng the dc_heroes array under marvel_heroes array, 
it has taken whole dc_heroes as single element in the array */

// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


// spread operator in array

// const aall_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(aall_new_heroes);

// const max = [1,2,3, [10,11,12],[4,8,9,[7,1,9]]]
// const new_max = max.flat(Infinity);

// console.log(new_max);

console.log(Array.isArray('Abhishek'));
console.log(Array.from('Abhishek'));

let score1 = 100;
let score2 = 150;
let score3 = 200;

console.log(Array.of(score1, score2, score3));