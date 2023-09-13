// currying 

//ans:- currying is the function that accept multiple argument , it iwll transfor this function into series of function.

const addCurry =(a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log(addCurry(2)(3)(5)) 
// function area(length){
//     function areaWithWidth(width){
//         console.log(length*width);
//     }
// }


// i am creating simple function

// const addSum = (a,b,c)=>{  
//     return a+b+c;
// }
// console.log(addSum(1,2,3))

const addSum = (a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log('currying functions',addCurry(2)(3)(5))  // currying function


//Currying: a function that accepts multiple arguments. It will transform this function into a series of functions, where every little function will accept a single argument until all arguments are completed