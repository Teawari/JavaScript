const myApp = {}
myApp.id = 'mrAbhi123'
myApp.name = 'Abhishek'
myApp.isLoggedin = false
  
// console.log(myApp);
 
const regularUser = {
    email: 'email.com',
    fullname: {
        username: {
            firstname: 'Abhishek',
            lastname: 'Kumar'
        }

    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: 'c', 2: 'd'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {...obj1, ...obj2};

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

console.log(Object.keys(myApp));
console.log(Object.values(myApp));

// de-structure and json
const course = {
    coursename: "tiwari jee ki chai",
    price: 9999,
    courseTutor: "abhishek",
}

const  {courseTutor} = course
console.log(courseTutor);