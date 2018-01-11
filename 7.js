/* 7 without writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function

inc(5) //6

inc(inc(5)) //7
*/

/*invoke a function As a method*/
var obj = {
    inc:function(x){
        return x+1;
    }
};

console.log(obj.inc(5));
var res = obj.inc(obj.inc(5)); 
console.log(res);
console.log();


/*invoke a function As a function*/
function inc(x){
    console.log(this.x);
}
 
inc(5); 
inc(inc(5));
console.log();


/*invoke a function As a constructor*/
function Inc(x){
    return{
        inc:function(x){
            return x+1;
        }
    };
}
var myObject = new Inc();
console.log(myObject.inc(5));
console.log(myObject.inc(myObject.inc(5)));
console.log();



/*inc is Alise of curry function*/
function add(x,y){
    return x+y;
}

function curry(func, x){
    function cal(y){
        return func(x,y);
    };
    return cal;
}

inc =  curry(add, 1);
console.log(inc(5));
console.log(inc(inc(5)));