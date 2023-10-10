//  function myname(){
//     console.log("A");
//     console.log("b");
//     console.log("h");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("e");
//     console.log("k");
//  }
//  myname()

//  function addtwonumbers(num1,num2) {
//     console.log(num1+num2);
    
//  }
// addtwonumbers(11, 13)


function addtwonumbers(num1,num2) {
    let result = num1 + num2
    return result
    
 }

const result = addtwonumbers(11, 13)
console.log("Result: ", result);
// console.log("Result: ", result);

// function loginusername(username) {
//     if (username === undefined) {
//         console.log("Please enter your username")
//         return
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginusername());




function loginusername(username) {
    if (!username) {
        console.log("Please enter your username")
        return
        
    }
    return `${username} just logged in`
}

console.log(loginusername());
