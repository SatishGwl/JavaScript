
// what is clousers advantantage and disadvantage of clousers

// clouser is the combination of a function bundled together with reference its surrounding.
//clouse is an inner function which always has access to the variable and parameters of its outer function even when the outer function has returned.


// function init(){
//     var name = "satish"
//      function def(){
//         console.log(name)
//     }
//     def()
// }
// init()


/*
function init(){
    var name = "satish"
     return function def(){
        console.log(name)
    }
}
init()()
*/

// to use clouser better way 

// var clouser = init();
// clouser()

//advantantage:- to achived encapsulation we can use clouser.
// creating private scoped variable which is not accessible outside by any external stuff.
// function currying .



// some more example

const abc = ()=>{
    var name = "clouserVar"
    return function def() {
        console.log(name)
    }
    def()
}
const clouser = abc();
clouser()

function sum(a,b,c){
    return a+b+c;
}
const curriedsum = sum.bind(null, 1);
console.log(curriedsum(2, 3)); 


function clouserFuntion(){
    function xyz(){
        console.log('==userName===', userName);
    }
    var userName = 'Satish'
    xyz()
}
const clouserFunc = abc()
clouserFuntion()


function checkClouser(){
    const name = "clouser Vriable"
    function lexicalScopeFunc(){
        var lexicalVariable = "i am lexical scope variable"
        function clouserLexicalScope(){
            console.log(lexicalVariable , 'lexicalVariable');
        }
        clouserLexicalScope()
    }
    lexicalScopeFunc()
}
console.log('check clouser',checkClouser())
