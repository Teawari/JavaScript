const userEmail = 'akay@.ai'

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// Nullish Coalescing operator(??) : null or undefined

let val1;
// val1 = 5??10

// val1 = null ?? 10

val1 = undefined ?? 20 ?? 10

console.log(val1);

// tenary opertor

const teaPrice = 100

teaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");