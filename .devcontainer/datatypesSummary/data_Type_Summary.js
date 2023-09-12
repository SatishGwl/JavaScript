
//primitive data type (int,string,num,boolean,bigInt, undefine, Null)
//non-primitive data type => reference (array, object, functions)

// memory =>stack memory and Heap.

let myNumber = 1234
let anotherNumber = 111
anotherNumber = 222
console.log(anotherNumber, 'another number')
console.log("++myNumber++", myNumber);

let userOne = {
    fname: 'satish',
    email:'satish@google.com'
}

let userTwo = userOne;
userTwo.email = "satish.srcem@gmail.com"
console.log('+++userOne++', userOne)
console.log('+++userTwo++', userTwo)



