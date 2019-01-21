var unKnow = " ";
// console.log(typeof unKnow);

if((typeof unKnow != "undefined") && (typeof unKnow.valueOf() == "string") && (unKnow.length > 0)){
	console.log("符合条件");
}else{
	console.log("不符合条件");
}

if(unKnow.length == 0){
	console.log("空字符串");
}