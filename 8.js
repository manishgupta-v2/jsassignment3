/* 8 Write  methodize, a function that converts a binary function to a method.

Number.prototype.add = methodize(add);

(3).add(4)  // 7
*/

function add (x,y) {
    return x+y;
}

function methodize(func){
    return function(y){
        return func(this,y);
    };
}

Number.prototype.add = methodize(add); // methodize(add) replace with Number.add function(y){}

console.log((3).add(4));
