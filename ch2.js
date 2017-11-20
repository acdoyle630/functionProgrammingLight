/*jshint esversion: 6*/

//es6 allows default parameters
function foo(x = 3){
  console.log(x);
}

//default parameter
foo();
//undefined defaults
foo(undefined);
//reassigns
foo(null);
foo(0);

function bar(x,y,z){
  console.log( arguments.length );
}

//length of expected paremeters
console.log(bar.length);

//length of actual called arguments
bar( 3, 4, 5 ,6 );

function foobar( x, y, z,...args) {
  console.log(x, y, z, args);
}

foobar(); // undefined, undefined, undefined, []
foobar( 1, 2, 3 );  // 1, 2, 3, []
foobar( 1, 2, 3, 4 ); // 1, 2, 3, [4]
foobar( 1, 2, 3, 4, 5 ); // 1, 2, 3, [4, 5]


function zoo(...args) {
    console.log( args[3] );
}

var arr = [ 1, 2, 3, 4, 5 ];
// need to spread arr into individual arguments to zoo
zoo( ...arr );

//assign index x and y, rest into args
function soo( [x,y,...args] = [] ) {
    console.log( x, y, args);
}

soo( [1,2,3] );


function doo( {x,y} = {} ) {
    console.log( x, y );
}

doo( {
    y: 3
} );

function func() {
    var retValue1 = 11;
    var retValue2 = 31;
    return [ retValue1, retValue2 ];
}

var [ x, y ] = func();
console.log( x + y );


//higher order functions
function forEach(list,fn) {
    for (let num of list) {
        fn( num );
    }
}

forEach( [1,2,3,4,5], function each(val){
    console.log( val );
} );

function upper() {
    return function inner(msg){
        return msg.toUpperCase();
    };
}

var f = upper();

console.log(f( "Hello!" ));

// higher order 2

//1 - define function
function higherOrder() {
    highOrderInner( function inner(msg){
        return msg.toUpperCase();
    } );
}

//2 - define function
function highOrderInner(func) {
    func( "Hello!" );
}

//3 - invoke
console.log(higherOrder());


function HighOrderLowerCase(){
   return helper( function inner(msg){
    return msg.toLowerCase();
  });
}

function helper(func){
  return func("FUCK");
}

var lowerFuck = HighOrderLowerCase();
console.log(lowerFuck);

function wat(x){
  return function huh(y){
    return x + y;
  };
}

//dude cool as fuck
let startAtTen = wat(10);
//startAtTen = function huh
//start(5) = huh(5) inside wat(10)
console.log(startAtTen(5));

//upper or lower

function formatter(func){
  return function innner(str){
    return func(str);
  };
}

let lower = formatter(function formattin(v){
  return v.toLowerCase();
});

let upCase = formatter(function formatting(v){
  return v.toUpperCase();
});

//lower becomes inner function, still has access to func bc closure
console.log(lower("WOW"));
console.log(upCase('fuck'));