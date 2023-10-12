// iife -- immeduateli invoked function expression


(function chai(){
    // named iife
    console.log(`DB connected`);
})();

((name) => {
    // functioned iffe
    console.log(`Second DB connected`)
})()
