/*
* js示例验证
* 1.while循环和do while循环
* 2.for in
* 3.break和continue
* 4.变量
* 5.数据类型
* 6.严格模式
*/


'use strict';


// 1.while循环和do while循环
var a = 0;
var b = 0;
var x = '';
var y = '';
while (a < 5) {
	x = x + 'The number a is ' + a + ';';
	a++;
}
console.log(x);

do {
	y = y + 'The number b is ' + b + ';';
	b++;
}
while (b < 5);
console.log(y);


// 2.for in
var output = '';
var key = undefined;
var person = {
	name: 'gaofeng',
	age: '27',
	height: 180
};
for (key in person) {
	output += ' ' + key;
}
console.log(output);


// break和continue
var breakWords = '';
var continueWords = '';
for (var i = 0; i < 10; i++) {
	if (i == 3) {
		break;
	}
	breakWords += 'The breakWords is ' + i + ';';
}
for (var j = 0; j < 10; j++) {
	if (j == 3) {
		continue;
	}
	continueWords += 'The continueWords is ' + j + ';';
}
console.log(breakWords);
console.log(continueWords);


// 4.变量
console.log(changeNumber);
var changeNumber = 5;


// 5.数据类型
/*
* 值类型（基本类型）：字符串（String），数字（Number），布尔（Boolean），空对象的引用（Null），未定义（Undefined），Symbol
* 引用数据类型：对象（Object），数组（Array），函数（Function）
*/


/*
* 6.严格模式
* 6.1不允许使用未申明的变量
* 6.2不允许删除变量，对象，函数
* 6.3不允许变量重名
* 6.4不允许使用八进制
* 6.5不允许使用转义字符
* 6.6不允许对只读属性赋值
* 6.7不允许对一个使用getter方法读取的属性赋值
* 6.8不允许删除一个不允许删除的属性
* 6.9变量名不能使用‘eval’或‘arguments’字符串
* 6.10不允许使用下面这种语句
* 6.11在作用域eval()创建的变量不能被调用
* 6.12禁止this关键字指向全局对象
*/

// 6.1不允许使用未声明的变量
// number1 = 3.14;
// object1 = {
// 	name: 'jack',
// 	age: 56
// };
// console.log(number1, object1);

// 6.2不允许删除变量，对象，函数
var number2 = 2;
function hello () {

}
// delete number2;
// delete hello;

// 6.3不允许变量重名
// function hello2 (p1, p1) {

// }

// 6.4不允许使用八进制
// var number3 = 010;

// 6.5不允许使用转义字符
var string1 = '\'';
console.log(string1);

// 6.6不允许对只读属性赋值
var object2 = {};
Object.defineProperty(object2, 'x', {value: 0, writeAble: false});
// object2.x = 'hello';

// 6.7不允许对一个使用getter方法读取的属性赋值
var object3 = {
	get x() {
		return 0;
	}
};
// object3.x = '';

// 6.8不允许删除一个不允许删除的属性
// delete Object.prototype;

// 6.9变量名不能使用‘eval’或‘arguments’字符串
// var eval = 3.14;
// var arguments = 2;

// 6.10不允许使用下面这种语句
// with (Math) {
// 	x = cors(2);
// }

// 6.11在作用域eval()创建的变量不能被调用
eval('var evalDemo = 2');
// console.log(evalDemo);

// 6.12禁止this关键字指向全局对象
function fun1 () {
	this.name = 'hello';
}
// fun1();









