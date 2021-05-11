/*
* js示例验证
* 1.while循环和do while循环
* 2.for in
* 3.break和continue
* 4.变量
* 5.数据类型
*/


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