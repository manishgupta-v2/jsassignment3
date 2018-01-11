/* 10 write a function composeu that takes two unary functions  and returns a unary function that can ball them both

composeu(double, square) (3) // 36
*/

function double (n) {
    return n+n;
}

function square (n) {
    return n*n;
}

function composeu(ufunc1, ufunc2){
    return function func(x){
        return square(double(x));
    };
}

var res = composeu(double, square) (3);
console.log(res); 

