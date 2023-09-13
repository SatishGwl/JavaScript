
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

var clouser = init();
clouser()

//advantantage:- to achived encapsulation we can use clouser.
// creating private scoped variable which is not accessible outside by any external stuff.
// function currying .
