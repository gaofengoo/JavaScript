window.onload = function(){
	// 因为分号是用来分隔可执行的语句，函数不是可执行的语句，所以函数不已分号结束
	// 1，函数声明
	function myFunction1(){
		console.log("1，函数声明");
	}

	// 2，函数表达式
	var myFunction2 = function(a, b){
		return a * b;
	};
	var out1 = myFunction2(2, 3);
	console.log(out1);

	//  3，构造函数，可以写成格式2；很多时候，需要避免使用new关键字
	var myFunction3 = new Function("a", "b", "return a * b");
	var out2 = myFunction3(4, 3);
	console.log(out2);

	// 4，函数提升
	myFunction4(4);
	function myFunction4(y){
		return y * y;
	}	

}