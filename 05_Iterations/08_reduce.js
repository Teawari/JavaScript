const MyNums = [1,2,3,4]

// const MyTotal  = MyNums.reduce(function (acc, currval) {
//     console.log(`accumulator value: ${acc} and currentvalue ${currval}`);
//     return acc + currval

// }, 0 )

const MyTotal = MyNums.reduce( (acc ,currval) => acc + currval , 0)

console.log(MyTotal);


const shoppingcart = [
    {
        itemname: 'JS Course',
        price: 299
    },
    {
        itemname: 'py Course',
        price: 299
    },
    {
        itemname: 'cpp Course',
        price: 299
    }
]

const CartValue = shoppingcart.reduce( ( acc,item) => acc + item.price, 0)
console.log(CartValue);