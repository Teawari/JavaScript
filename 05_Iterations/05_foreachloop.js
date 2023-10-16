const coding = ['js', 'ruby', 'java', 'javascript','cpp']

// coding.forEach(  function(akay){
//     console.log(akay);
// })
coding.forEach( (akay) => {
    console.log(akay);
})

coding.forEach(  (item, index, arr)   => {
    console.log(item,index,arr);

} )


const myCoding = [
    {
        languageName: "javascript",
        filename: " js"
    },
    {
        languageName: "python",
        filename: " py"
    },
    {
        languageName: "java",
        filename: " java"
    },
]
myCoding.forEach( (item) => {
    console.log(item.filename);
})