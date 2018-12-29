var imgFile = new ImgUploadeFiles('.box-img-upload',function(e){
	this.init({
		MAX : 5, //限制个数
		MH : 5800, //像素限制高度
		MW : 5900, //像素限制宽度
		callback : function(arr){
			console.log(arr)
		}
	});
});
// var imgFile1 = new ImgUploadeFiles('.box2',function(e){
// 	this.init({
// 		MAX : 5,
// 		MH : 1800, //像素限制高度
// 		MW : 1900, //像素限制宽度
// 		callback : function(arr){
// 			console.log(arr)
// 		}
// 	});
// });
// var imgFile3 = new ImgUploadeFiles('.box3',function(e){
// 	this.init({
// 		MAX : 3,
// 		MH : 800, //像素限制高度
// 		MW : 900, //像素限制宽度
// 		callback : function(arr){
// 			console.log(arr)
// 		}
// 	});
// });
// var imgFile4 = new ImgUploadeFiles('.box4',function(e){
// 	this.init({
// 		MAX : 1,
// 		MH : 800, //像素限制高度
// 		MW : 900, //像素限制宽度
// 		callback : function(arr){
// 			console.log(arr)
// 		}
// 	});
// });