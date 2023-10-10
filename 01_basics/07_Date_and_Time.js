// Dates
/*
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString());``
console.log(myDate.toTimeString());
console.log(myDate.toUTCString()); 
*/ 

// Date is object datatype 

let myCreatedDate = new Date(2023,9,10)  
console.log(myCreatedDate.toLocaleDateString()); 

const date1 = new Date('2023-09-10');
console.log(date1.toLocaleString());

// timestamp

 console.log(Math.floor(Date.now()/1000));