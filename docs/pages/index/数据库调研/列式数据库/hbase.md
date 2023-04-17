<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 16:09:51
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 16:10:17
-->
# **hbase**
## **概述**
HBase 是一个开源的、分布式的、版本化的 NoSQL 数据库（也即非关系型数据库），它利用 Hadoop 分布式文件系统（Hadoop Distributed File System，HDFS）提供分布式数据存储。与传统的关系型数据库类似，HBase 也以表的形式组织数据，表也由行和列组成；不同的是，HBase 有列族的概念，它将一列或者多列组织在一起，HBase 的每一个列都必须属于某个列族。
## **架构**
![](/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.002.png)

从HBase的架构图上可以看出，HBase中的存储包括HMaster、HRegionSever、HRegion、HLog、Store、MemStore、StoreFile、HFile等。
## **Client**
包含访问HBase的接口并维护cache来加快对HBase的访问
## **Zookeeper**
保证任何时候，集群中只有一个master

存贮所有Region的寻址入口。

实时监控Region server的上线和下线信息。并实时通知Master

存储HBase的schema和table元数据
## **Master**
为Region server分配region

负责Region server的负载均衡

发现失效的Region server并重新分配其上的region

管理用户对table的增删改操作
## **RegionServer**
Region server维护region，处理对这些region的IO请求

Region server负责切分在运行过程中变得过大的region　
## **HLog(WAL log)** 
HLog文件就是一个普通的Hadoop Sequence File，Sequence File 的Key是 HLogKey对象，HLogKey中记录了写入数据的归属信息，除了table和 region名字外，同时还包括sequence number和timestamp，timestamp是” 写入时间”，sequence number的起始值为0，

或者是最近一次存入文件系 统中sequence number。

HLog SequeceFile的Value是HBase的KeyValue对象，即对应HFile中的 KeyValue
## **Region**
HBase自动把表水平划分成多个区域(region)，每个region会保存一个表 里面某段连续的数据；每个表一开始只有一个region，随着数据不断插 入表，region不断增大，当增大到一个阀值的时候，region就会等分会 两个新的region（裂变）；

当table中的行不断增多，就会有越来越多的region。这样一张完整的表 被保存在多个Regionserver上。
## **Memstore 与 storefile**
一个region由多个store组成，一个store对应一个CF（列族）

store包括位于内存中的memstore和位于磁盘的storefile写操作先写入 memstore，当memstore中的数据达到某个阈值，hregionserver会启动 flashcache进程写入storefile，每次写入形成单独的一个storefile

当storefile文件的数量增长到一定阈值后，系统会进行合并（minor、 major compaction），在合并过程中会进行版本合并和删除工作 （majar），形成更大的storefile。

当一个region所有storefile的大小和超过一定阈值后，会把当前的region 分割为两个，并由hmaster分配到相应的regionserver服务器，实现负载均衡。

客户端检索数据，先在memstore找，找不到再找storefile

HRegion是HBase中分布式存储和负载均衡的最小单元。最小单元就表 示不同的HRegion可以分布在不同的HRegion server上。

HRegion由一个或者多个Store组成，每个store保存一个columns family。

每个Strore又由一个memStore和0至多个StoreFile组成。StoreFile 以HFile格式保存在HDFS上。
## **特点**
1、大：一个表可以有上亿行，上百万列。

2、面向列：面向列表(簇)的存储和权限控制，列(簇)独立检索。

3、稀疏：对于为空(NULL)的列，并不占用存储空间，因此，表可以设计的非常稀疏。

4、无模式：每一行都有一个可以排序的主键和任意多的列，列可以根据需要动态增加，同一张表中不同的行可以有截然不同的列。

5、数据多版本：每个单元中的数据可以有多个版本，默认情况下，版本号自动分配，版本号就是单元格插入时的时间戳。

6、数据类型单一：HBase中的数据都是字符串，没有类型。
## **优缺点**
## **优点**
列可以动态增加，并且列为空就不存储数据,节省存储空间。 

Hbase自动切分数据，使得数据存储自动具有水平scalability。
## **缺点**
不能支持条件查询，只支持按照Row key来查询。

不适合于大范围扫描查询。

不支持事务。

不直接支持SQL 的语句查询。
