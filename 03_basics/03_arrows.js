// const user = {
//     username: 'Abhishek',
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`Hey Mr.${this.username}  , welcome to Akaymeals.com`);
//         console.log(this);
//     }
    
// }
// user.welcomeMessage()
// user.username = 'Tiwari jee'
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = 'Abhishek'
//     console.log(this.username);
   
// }
// chai()

// const chai = function(){
//     let username = 'Abhishek'
//     console.log(this.username);
// }

const chai = () => {
    let username = 'Abhishek'
    console.log(this.username);
}
// chai()


// const difference = (num1,num2) =>{
//     return num1 - num2
// }


const difference = (num1,num2) => num1 - num2 
// we can use like this also const difference = (num1 - num2) => (num1 - num2)

console.log(difference( 1000,547));