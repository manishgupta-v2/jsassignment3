/* 9 write a function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.

var double = twice(add);

double(11) // retuns 22


var square =  twice(mul);

square(11) // returns 121
*/

function add (x,y) {
    return x+y;
}

function mul (x,y) {
    return x*y;
}

function twice(func){
    return function unary(n){
        return func(n,n);
    };
}


var double = twice(add);
console.log(double(11)); 

var square =  twice(mul);
console.log(square(11)); 