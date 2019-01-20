// 字符串
var string1 = "This is ";
var string2 = "Tom";
var string3 = string1 + string2;
console.log(string3);

var string4 = "This";
var string5 = "is";
var string6 = "Tom";
var string7 = string4 + " " + string5 + " " + string6;
console.log(string7);

var string8 = "My";
string8 += " name";
console.log(string8);

var newString = "".concat("This"," ","is"," ","My"," ","mother");
console.log(newString);

var num = 23.0;
var booleanValue = true; 
var total = "This number is " + booleanValue;
console.log(total);

var stringObj = new String("This value is");
var stringEnd = "a string";
var stringValue = stringObj + " " + stringEnd;
console.log(stringValue);

// var strName = prompt("What's you name?","");
// if(strName.toLowerCase() == "gaofeng"){
// 	alert("You name is gaofeng!");
// }else{
// 	alert("You name isn't gaofeng.");
// }

var number1 = 10.00;
// if(number1 == "10") alert("The value is ten");

var strObject = new String("new string");
var string9 = "new string";
// if(strObject == string9){
// 	alert(true);
// }
if(strObject === string9){
	alert(true);
}else{
	alert(false);
}

var num1 = "3";
var num2 = "4";
var compare = num1.localeCompare(num2); 
// localeCompare()方法接受一个字符串参数，如果num2和num1值相等，这个值为0，如果num2大于num1，返回-1；反之，为1
console.log(compare); // -1
