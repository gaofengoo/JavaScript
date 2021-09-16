function test () {
	var message = 'hi';
}
test();
// console.log(message);

var name = 'a';
console.log(name);
if (true) {
	var name = 'b';
	console.log(name);
}
console.log(name);

let age = 25;
console.log(age);
if (true) {
	let age = 26;
	console.log(age);
}
console.log(age);

// let a = 2;
let a = 1;

const obj = {
	age: 22
};
obj.age = 23;
console.log(obj);

const f1 = function () {};
const s1 = Symbol();
console.log(typeof f1, typeof s1); // 'symbol' 符号

let s2;
let s3; 
console.log(s2, s3);

console.log(typeof NaN);

let floatNum1 = 1.;
let floatNum2 = 10.0;
console.log(floatNum1, floatNum2);

console.log(Number({name: 1}));

// console.log(undefined.toString());

let mySymbol1 = Symbol();
let mySymbol2 = Symbol('foo');
console.log(mySymbol1, mySymbol2);

let sy1 = Symbol('y1'),
	sy2 = Symbol('y2'),
	sy3 = Symbol('y3'),
	sy4 = Symbol('y4');
let o = {
	[sy1]: 'y1 value'
};

Object.defineProperty(o, sy2, {value: 'y2 value'});
Object.defineProperties(o, {
	[sy3]: {value: 'y3 value'},
	[sy4]: {value: 'y4 value'}
});
console.log(o);