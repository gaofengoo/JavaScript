#### ##### 测试项目发布
##### Terminus 执行命令行
- pm2 list （查看pm2所有进程）
- pm2 start （开启项目进程）
- pm2 stop （关闭项目进程）
- pm2 reload field(重新运行项目名称，项目api更新过)

##### Cyberduck
- 账号：root
- 密码：Penguin123
- 测试中台：test2
- 培训：test3
- 场馆：test4
- 1的所有都是test.hulasports.com+端口号
- 3的测试地址是 testtrain.hulasports.com

##### 标准版智慧场馆
1.测试环境1-开发者自测
    IP:118.31.247.210
    服务器连接密码:Penguin123
    域名:照旧
    说明:开发人员自己自测服务器，可连接上面数据库
3.测试环境2-测试人员hotfix
    IP:116.62.108.177
    服务器连接密码:Penguin123
    域名:hotfix.hulasports.com
    说明:测试人员测试服务器，开发人员拥有发布权限（对应git上的hotfix线），不可连接上面的数据
4.测试环境3-测试人员dev
    IP:120.27.230.67
    服务器连接密码:Penguin123
    域名:dev.hulasports.com
    说明:测试人员测试服务器，开发人员拥有发布权限（对应git上的dev线），不可连接上面的数据

##### 关于git说明
    1.需求线改动从dev拉取，自测完毕后合并到dev，然后dev发布到dev服务器给测试人员测试
    2.线上紧急bug改动从hotfix拉取或者直接在hotfix上改动，自测完毕后 合并到hotfix，然后hotfix发布到hotfix服务器给测试人员测试
    ps:线上紧急bug认定由产品认定，开发人员测试出的寻常bug可以改动在自己的需求线上，合并到dev的时候会发布到dev服务器给开发人员测试
