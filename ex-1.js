// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20);// false: different numbers
Object.is(0, -0);// false: Object.is treats +0 and -0 as different
Object.is(NaN, 100);// false: different values
Object.is("one", "two");// false: different strings
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });// false: two separate objects in memory
Object.is(null, undefined);// false: different values

10 === 20;// false: different numbers
10 === "10";// false: different types
3.14 !== 3.14; // false: they are equal, so "not equal" is false
"TechUp" !== "TechUp";// false: same strings
NaN === NaN;// false: NaN is not equal to itself
0 !== -0;// true: +0 and -0 are different

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;// false: two separate objects in memory
