//IIFE:- (immediate invoke function expression) is a javascript function that run as soon as its defined.

//example:-

(function(){
    console.log('I am IIFEE')
}())

for(var j =0; j<5; j++){
    setTimeout(()=>{
        console.log('+++j++', j) // o/p=> 5,5,5,5,5 because of var scoping
    }, 1000)
}

for (let i =0; i<5; i++){
    setTimeout(()=>{
        console.log(i) // o/p=> 0-4, 
    }, 1000)
}

for(var i=0; i<15; i++){
    (function(i){
        setTimeout(()=>{
            console.log(i) // o/p=> 0-14
         },1000)
    })(i)
}
