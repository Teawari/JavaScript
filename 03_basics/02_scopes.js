// let  a = 10
// const b =20
// var c = 30
// console.log(a,b,c);
// console.log(b);
// console.log(c);

let c = 100

if (true) {
let  a = 10
const b =20
let c = 30
// console.log("Inner: ", c);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'Abhishek'

    function two(){
        const adress = 'Talegaon'
        console.log(username);
       
    // console.log(adress)
    two()
}
   
}
// one()

if(true){
     const username = 'Abhishek'
     if(username==='Abhishek'){
        const website = ' Replit'
        // console.log(username + website);
     }
    //  console.log(website);
}
// console.log(username);

//+++++++++++++++++++ Interesting +++++++++++++++++++++
console.log(addone(7));  // we can execute this
function addone(num){
    return num+1
}

console.log(addtwo(10));  // we cannot execute it before the initialixation of variable
const addtwo = function(num){
    return num+2
}
