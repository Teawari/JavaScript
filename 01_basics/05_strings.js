const name = 'Abhishek Tiwari'
const age = 50;

//console.log( name + age)

// Modern string adding style

console.log(` Hello my name is${name} and my age is ${age}`)

const name1 = new String('Abhishek');
/*console.log(name1);
console.log(name1[0]);
console.log(name[1]);
console.log(name1.charAt(2));
console.log(name1.indexOf('h'));
console.log(name1.toUpperCase());
*/
//console.log(name.substring(0,4))
//console.log(name1.slice(-5,3));
//const newString = name1.slice(-5,5)
//console.log(newString);
const name2 = "  Abhishek  "
console.log(name2);
console.log(name2.trim()); // here the trim function of string will remove the spaces and it will noot count.


const name3 = " abh$shek"
console.log(name3.trim().replace('$', 'i'));
console.log(name3.includes('t'));   // .includes check the availability of given vakue in the string. If its present then it will show true else false

console.log(name3.includes('h'));
