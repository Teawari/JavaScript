// For loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index
//     console.log(index);
    
// }

// Multiplication table code
/*
for (let i = 1; i <=10; i++) {
    console.log(`Multiplication table of: ${i}`);
    for (let j = 1; j<= 10; j++) {
        // console.log(`inner loop value: ${i} and inner loop${i}`);
      console.log(i + '*' + j + ' = ' + i*j );
       
        
    }
    
}
*/

// Break and Continue

// for ( let akay =1; akay <= 20; akay++){
//     if (akay == 5) {
//         console.log(`Akay is best`);
//         break
//     }
//     console.log(`value of akay is ${akay}`);

// }
for ( let akay =1; akay <= 20; akay++){
    if (akay == 5) {
        console.log(`Akay is best`);
        continue
    }
    console.log(`value of akay is ${akay}`);

}