//  if (2 === '2'){
//     console.log('executed')
//  }

//  const temperature = 50
//  if (temperature <= 47){
//    console.log('temperature is less than normal heat temperature')
//  }
//  else {
//    console.log('temperature is more than normal heat temperature');
//  }

// const score = 100

// if( score < 100){
//    console.log(`you missed from hitting century`);
// }
// else{
//    console.log(`You hit a century in the match against pakistan`)
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log(`Allow to buy course`);
}

if (loggedInFromGoogle || loggedInFromGmail) {
    console.log("User logged in");
}