/*
* 关于状态码
* BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
* BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
* BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
* BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
* BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
* BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
* BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
* BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
* BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
*/

// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331398, 39.897445);
map.centerAndZoom(point, 12);

var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    } else {
        alert('failed' + this.getStatus());
    }
}, { enableHighAccuracy: true })
