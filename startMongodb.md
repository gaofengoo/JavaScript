## 启动mongodb
cd /usr/local/mongodb/bin 
bin> ./mongod -dbpath ../data -logpath ../logs/log.log -logappend -bind_ip 127.0.0.1  -auth -fork

- -dbpath 数据存放地址
- -logpath 日志存放地址
- -logappend 以追加的方式写入日志
- -bind_ip 限制访问ip
- -fork 在后台运行
- -auth 启动授权验证

## windows下启动mongodb并添加到服务

mongod --logpath D:\mongodb\log\mongo.log --logappend --dbpath D:\mongodb\data --directoryperdb --serviceName MongoDB --install  

## 关闭mongodb
bin> ./mongo
> use admin
> db.shutdownServer()

## 重启需要注意将data中的lock删除
