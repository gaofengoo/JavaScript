// json JavaScript object notation
var json1 = {
    "name": "gaofeng",
    "age": 24
};

var json2 = {
    name: "miaozi",
    age: 26
};

var json3 = {
    "name": "gaofeng",
    "age": 24,
    "home": true
};

var json4 = {
    "name": "gaofeng",
    "age": 24,
    "home": true,
    "work": ["a", "b", "c"]
}

delete json3.name;
delete json3["home"];

console.log(json1, json2, json3);
console.log("demo2-->" + demo2);
for (a in json3) {
    demo1 += a + "<br />";
    demo1 += json3[a] + "<br />";
}

// var x = "";
var i, x = "";
for (i in json4.work) {
    x += json4.work[i] + "<br />";
};
console.log(x);