// for of loop

// ["","",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello Mr. Abhishek"

for (const greet of greetings) {
    console.log(greet);
    
}

// Maps

const map = new Map()
map.set('In', 'India')
map.set('In', 'India')  // Map is known for unique value, it doesnot repeat the data
map.set('UK', 'United Kingdom')
map.set('FR', 'France')

console.log(map);
 for (const [key, value] of map) {
    console.log(key, ':-', value);
 }