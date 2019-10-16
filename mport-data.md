#### mongodb导入导出数据文件

##### 一，数据库导入
1. ./mongorestore -d (导入数据库名称) --drop --dir (现在存放的数据的文件路径)
2. ./mongorestore -d field（需要导入数据库名称）-dev --drop --dir dbdirectory（存放数据的位置）

##### 二，数据库导出
1. 导出数据库操作
2. mongodump -d field（需要导出的数据库名称） -o dbdirectory（需要存放文件夹的位置）
3. 参数说明：
4. MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017
5. 需要备份的数据库实例，例如：test
6. 备份的数据存放位置，例如：/home/mongodump/，当然该目录需要提前建立，这个目录里面存放该数据库实例的备份数据。
