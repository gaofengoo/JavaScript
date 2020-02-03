##### 标注版图片上传
1. 上传图片统一传送至阿里云
2. 其他支线智慧场馆，部分场馆柜员连接内网，图片上传至本地方便调用。
3. 其他角色上传至aliyun（图片上传至本地，organization/swim/enter.controller.js的save方法，上传图片至aliyun参考主线上传图片方法）

##### 运动卡消费
1，test-field.hulasports.com/api/accessctr/card?Card=30154&Reader=0&ID=FB5IC04H&Serial=1122
参数说明：
Card：运动卡实体卡号
Reader：0表示进，1表示出
ID：当前场馆的venueNo
Serial：当前闸机的硬件参数
2，手环的ip地址，为测试环境的ip

##### 运行微信端
1，wx/order/wx-order.controller.js # 解除注释，本地测试

##### 黄龙培训
1，班级管理上传图片
serve新增cached文件夹，前端assets新增pic文件夹

##### 项目版本发布
hotfix版本发布
1. hotfix
2. 自测
3. 提测（避免版本冲突，事先询问是否有版本冲突）
4. 发布测试环境
5. 测试
6. 收尾
    1. 告知涛
    2. hotfix合并至dev
    3. dev重新发布



