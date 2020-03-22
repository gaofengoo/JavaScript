1.黄龙包玉刚游泳馆,模拟手环通信（购票后绑定手环，当前手环被使用）
- GET
- localhost:9000/api/notify/4567897654567 #添加请求id


2.标准智慧场馆/运动卡消费,模拟手环进出闸机
- GET
- localhost:9000/api/accessctr/card?Card=30152&Reader=0&ID=x6tA4AVF00
- Card #手环内码
- Reader #为0,表示进闸机.为1,表示出闸机
- ID #闸机编号