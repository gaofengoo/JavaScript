/*
* js示例验证
* 1.while循环和do while循环
* 2.for in
* 3.break和continue
* 4.变量
* 5.数据类型
* 6.严格模式
* 7.作用域
* 8.try catch, throw, finally
* 9.js声明提升
* 10.闭包
* 11.改变this指向
* 12.js版本
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
var changeNumber3 = 3;
testChange();
function testChange () {
    var changeNumber3 = 33;
    // changeNumber2 = 2;
    console.log(this, changeNumber3);
}
console.log(changeNumber3);


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
//  name: 'jack',
//  age: 56
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
//  x = cors(2);
// }

// 6.11在作用域eval()创建的变量不能被调用
eval('var evalDemo = 2');
// console.log(evalDemo);

// 6.12禁止this关键字指向全局对象
function fun1 () {
    this.name = 'hello';
}
// fun1();


// 7.作用域
myFunciton();
// console.log(carName);
function myFunciton () {
    // carName = 'jack';
}

// 8.try catch, throw, finally
try {
    var str1 = '';
    if (str1 == '') {
        throw '空字符串';
    }
    // addAlert('hello');
} catch (err) {
    console.log(err);
} finally {
    console.log('end');
}

// 9.js声明提升
name1 = 'jack';
console.log(name1);
var name1;

var name2;
console.log(name2);
name2 = 'rock';

newFun2 = function () {
    return 'new function!'
}
console.log(helloWorld(), newFun2());
function helloWorld () {
    return 'hello world!';
}
var newFun2;


// 10.闭包（有权访问另一个函数作用域中变量的函数。闭包会携带包含它的函数的作用域，所以比其他函数会占用更多的内存，过度使用闭包会导致内存占用过多）
var add = (function () {
    var count = 0;
    return function () {
        return count += 1;
    }
})();

add();
add();
console.log(add());


/* 
* 11.改变this指向
* 11.1this的指向（总是指向当前函数所在的对象）
* 11.1.1指向window
* 11.1.2在函数内未声明的变量，指向window
* 11.2改变this的指向
*/

// 11.1.1指向window
var custom1 = 1;
console.log(this.custom1);

// 11.1.2在函数内未声明的变量，指向window
// var custom2 = 2;
function customFun () {
    // custom2 = 2;
    // console.log(this.custom2);
}
customFun();

/* 
* 11.2改变this的指向
* 11.2.1call
* 11.2.2apply
* 11.2.3bind
*/

// 11.2.1call
function fn1 (name) {
    this.name = name;
    this.fn1 = function () {
        console.log(this.name);
    }
};
var obj1 = {};
fn1.call(obj1, 'callChange');
console.log(obj1.name);
obj1.fn1();

// 11.2.2apply
function fn2 (name, age) {
    this.name = name;
    this.age = age;
    this.fn3 = function () {
        console.log(this.name);
    }
};
var obj2 = {};
fn2.apply(obj2, ['applyChange', 18]);
console.log(obj2.age);
obj2.fn3();

// 11.2.3bind
function fn4 () {
    console.log(this.name);
};
var obj3 = {
    name: 'bindChange'
};
var b = fn4.bind(obj3);
b();


/*
* 12.js版本（从 2015 年起，ECMAScript 按年命名ECMAScript 2015）
* 
* 1.ECMAScript 1 (1997) 第一版
* 2.ECMAScript 2 (1998) 只改变编辑方式
* 3.ECMAScript 3 (1999) 添加了正则表达式, 添加了 try/catch。
* 4.ECMAScript 4 从未发布过
* 
* 5.ECMAScript 5 (2009) 
* 添加了“严格模式”。
* 添加了 JSON 支持。
* 添加了 String.trim()。
* 添加了 Array.isArray()。
* 添加了数组迭代方法。
*
* 5.1 ECMAScript 5.1 (2011) 编辑改变
*
* 6.ECMAScript 2015 (ES6)
* 添加了默认参数值
* 添加了 Array.find()
* 添加了 Array.findIndex()
* Let与Const
* 类
* 模块化
* 箭头函数
* 函数参数默认值
* 模板字符串
* 解构赋值
* 延展操作符
* 对象属性简写
* Promise
*
* 7.ECMAScript 2016 
* 添加了指数运算符（**）
* 添加了 Array.prototype.includes
* 数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则
* 返回false。
* a ** b指数运算符，它与 Math.pow(a, b)相同
*
* 8.ECMAScript 2017
* 添加了字符串填充
* 添加了新的 Object 属性
* 添加了异步功能
* 添加了共享内存
* async/await
* Object.values()
* Object.entries()
* String padding: padStart()和padEnd()，填充字符串达到当前长度
* 函数参数列表结尾允许逗号
* Object.getOwnPropertyDescriptors()
* ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入
* 
* 9.ECMAScript 2018 
* 添加了 rest / spread 属性
* 增加 RegExp
* 异步迭代
* Promise.finally()
* Rest/Spread 属性
* 正则表达式命名捕获组（Regular Expression Named Capture Groups）
* 正则表达式反向断言（lookbehind）
* 正则表达式dotAll模式
* 正则表达式 Unicode 转义
* 非转义序列的模板字符串
* 
* 10.ECMAScript 2019 
* 行分隔符（U + 2028）和段分隔符（U + 2029）符号现在允许在字符串文字中，与JSON匹配
* 更加友好的 JSON.stringify
* 新增了Array的flat()方法和flatMap()方法
* 新增了String的trimStart()方法和trimEnd()方法
* Object.fromEntries()
* Symbol.prototype.description
* String.prototype.matchAll
* Function.prototype.toString()现在返回精确字符，包括空格和注释
* 简化try {} catch {},修改 catch 绑定
* 新的基本数据类型BigInt
* globalThis
* import()
* Legacy RegEx
* 私有的实例方法和访问器
*
* 11.ECMAScript 2020 
*/