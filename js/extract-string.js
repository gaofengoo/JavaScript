var string = "my name is gaofeng:a,b,c,d.";
var start = string.indexOf(":");
var end = string.indexOf(".", start + 1);
var list = string.substring(start + 1, end);
var fen = list.split(",");


console.log(list, fen);

