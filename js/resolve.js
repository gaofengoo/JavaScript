window.onload = function(){
	var list = prompt("Enter you keyword","");
	var arrayList = list.split(",");
	var resultString = "";
	for(var i=0;i<arrayList.length;i++){
		resultString += "keyword:" + arrayList[i] + "<br />";
	}
	var print = document.getElementById('print');
	print.innerHTML = resultString;

	var stringList = "a,b,c,d";
	console.log(stringList.split(",",3));
}

