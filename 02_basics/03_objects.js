// Object in JavaScript
const mySym = Symbol('AKAY');
const User1 = {
    Name: 'Abhishek',
    age: 20,
    city: 'Pune',
    email: 'akay@gmail.com',
    isLoggedin: false,
    [mySym]: 'AKAY',
}
// console.log(User1.city);
// console.log(User1['email']);
console.log(User1);
User1.email = 'akay122@gmail.com'
Object.freeze(User1);
User1.email = 'samtaclaus@gmail.com';
console.log(User1);