百度地图JS调用
1. 全局index.html里添加js
`<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=GXxuErmkDqfULHkZHbecDcgWLxP7RMFR"></script>`

2. 需要引入的html页面文件,引用标签添加id
`<div id="allmap" style="height: 207px;"></div>`
3. 控制器js里引入方法调用
（1）初始化地图参数
        var map = new BMap.Map("allmap");
        var marker;
（2）// 初始化地图方法
        var initMap = function(){
            // 地图定位 百度地图API功能
            map.centerAndZoom(new BMap.Point(self.longitude || 120.21937542,self.latitude || 30.25924446), 13);

            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
            var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
            /*缩放控件type有四种类型:
            BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
            var geoc = new BMap.Geocoder();  // 获取百度地图详细地址
            
            map.addControl(top_left_control);        
            map.addControl(top_left_navigation);     
            map.addControl(top_right_navigation); 

            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

            //单击获取点击的经纬度
            map.addEventListener("click",function(e){
            	//详细地址
				var pot = e.point;
		        geoc.getLocation(pot, function(rs){
		            //addressComponents对象可以获取到详细的地址信息
		            var addComp = rs.addressComponents;

		            self.searchAddress = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
		            $scope.$apply();
		        });

                //绘制定位点
                addIcon(e.point.lat,e.point.lng);
            });

            function addIcon(latitude,longitude){
                if(marker){
                    marker.hide();
                }
                //绘制定位点
                var pt = new BMap.Point(longitude, latitude);
                var myIcon = new BMap.Icon("https://fdsaas.oss-cn-hangzhou.aliyuncs.com/icon/sign.png", new BMap.Size(60,75));
                marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                self.latitude = Number(latitude);
                self.longitude = Number(longitude);
            }

            if(!self.longitude||!self.latitude){
                loadAddress();
            }else{
                //绘制定位点
                addIcon(self.latitude,self.longitude);
            }
        };
（3） 定位至当前位置
        var loadAddress =function(){
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    self.latitude = r.latitude;
                    self.longitude = r.longitude;

                    initMap();
                }       
            },{enableHighAccuracy: true})
        };
（4）初始化调用地图，调用定时器解决异步请求延时
		`setTimeout(function () {
				initMap();
			}, 300);`