//Exercise 1: Numbers
let value1=60;
let value2=24.14;

//calculations
let addition=value1 + value2;
let sub=value1 - value2;
let multiplication= value1 * value2;
let division=value1/value2;
let mod=value1 % value2;
let expo= value1 ** value2;

//print
console.log('addition:',addition);
console.log('subtraction:',sub);
console.log('multiplication:',multiplication);
console.log('division',division);
console.log('modulus:',mod);
console.log('exponentiation',expo);

//execirse 2:boolean and operators

let c=18;
let d=10;

//compare and store
let isEqual=c === d;
let isNotEqual=c !== d;
let isGreaterThan= c > d;
let isLessThan= c < d;
let isGreaterThanOrEqual= c >= d;
let isLessThanOrEqual= c <= d;

// compare,store and print

let x=8;
let y=12;

let is_GreaterThan= x > y;
let is_LessThanOrEqual= x <= y;
let is_Equal=x === y;
let is_NotEqual=x !== y;

console.log('is greater than:',is_GreaterThan);
console.log('is less than or equal to:',is_LessThanOrEqual);
console.log('is equal to:',is_Equal);
console.log('is not equal to:',is_NotEqual);

//logical operation

let a=true;
let b=false;

let i= a && b;
console.log('AND Logical operator:',i);

let j= a || b;
console.log('OR Logical operator',j);

let k= !a;
let m=!b;
console.log('NOT Logical operator',k);
console.log('NOT Logical operator',m);

//question 4

let p=10;

p +=5;
console.log("p = ",p);

p -=4;
console.log("p = ",p);

p *=6;
console.log("p = ",p);

p /=7;
console.log("p = ",p);

p %=8;
console.log("p = ",p);