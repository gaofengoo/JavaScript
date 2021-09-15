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






