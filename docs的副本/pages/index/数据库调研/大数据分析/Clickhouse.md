<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 16:02:58
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 16:03:10
-->
# **Clickhouse**
## **概述**
Clickhouse是开源列式数据库，用于联机分析处理（OLAP）的列式数据库管理系统（columnar DBMS），专为在线数据分析而设计，官方提供的文档表名，ClickHouse 日处理记录数”十亿级”。
## **架构**
ClickHouse采用Multi-Master多主架构，集群中的每个节点角色对等，客户端访问任意一个节点都能得到相同的效果。这种多主的架构有许多优势，例如对等的角色使系统架构变得更加简单，不用再区分主控节点、数据节点和计算节点，集群中的所有节点功能相同。所以它天然规避了单点故障的问题，非常适合用于多数据中心、异地多活的场景。

目前ClickHouse公开的资料相对匮乏，比如在架构设计层面就很难找到完整的资料，甚至连一张整体的架构图都没有。下图为 ClickHouse架构设计中的核心模块

![](/docs/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.010.png)
## **特点**
1、列式存储

2、数据高效压缩

3、基于磁盘存储

4、数据有序存储：支持在建表时，指定将数据按照某些列进行sort by

5、主键索引

6、稀疏索引

7、数据Sharding

8、数据partitioning：partition by

9、数据TTL

10、高吞吐写入能力

11、主备同步

12、多核并行

13、分布式计算

14、向量化执行与SIMD

15、动态代码生成Runtime Codegen

16、复杂数据类型支持
## **优缺点**
## **优点**
1 多个服务器上的分布式处理：分布式查询：从分布式表查询-> 重写 ->负载均衡,发送给远程节点查询->接收结果、合并

2 非常快速的扫描，可用于实时查询

3 列存储非常适合使用“宽”/“非规范化”表（许多列）：计算类查询时，大大减少IO消耗

4 压缩性好：相对mysql压缩10倍

5 SQL支持（有限制）

6 良好的功能集，包括支持近似计算

7 不同的表引擎：MergeTree，ReplicatedMergeTree，Distributed等

8 非常适合结构日志/事件数据以及时间序列数据（引擎MergeTree需要日期字段）

9 索引支持（仅限主键，不是所有存储引擎）

10 漂亮的命令行界面，具有用户友好的进度条和格式
## **缺点**
1 没有真正的删除/更新支持，也没有事务（与Spark和大多数大数据系统相同），没有delete/update 

2 没有二级密钥（与Spark和大多数大数据系统相同）

3 只支持自己的协议（没有MySQL协议支持）

4 有限的SQL支持，以及连接实现是不同的。如果要从MySQL或Spark迁移，则可能必须使用连接重新编写所有查询。

5 没有[窗口功能](https://en.wikipedia.org/wiki/Select_\(SQL\)#Window_function)。

