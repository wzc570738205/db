<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 16:00:01
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 16:00:21
-->
# **presto**
## **概述**
Presto是由Facebook开发的一个分布式SQL查询引擎， 它被设计为用来专门进行高速、实时的数据分析。它的产生是为了解决Hive的MapReduce模型太慢以及不能通过BI或Dashboards直接展现HDFS数据等问题。Presto是一个纯粹的计算引擎，它不存储数据，其通过Connector获取第三方Storage服务的数据。
## **架构**

![](/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.003.png)

Presto沿用了通用的Master-Slave架构，Coordinator即Presto的Master，Worker即其Slave，Discovery Service就是用来保存Worker结点信息的，通过HTTP协议通信，而Connector用于获取第三方存储的Metadata及原始数据等。

Coordinator负责解析SQL语句，生成执行计划，分发执行任务给Worker节点执行；Worker节点负责实际执行查询任务。Worker节点启动后向Discovery Server服务注册，Coordinator从Discovery Server获得可以正常工作的Worker节点。假如配置了Hive Connector，需要配置一个Hive MetaStore服务为Presto提供Hive元信息，Worker节点与HDFS交互读取数据。
## **特点**
1.Ad-hoc，期望查询时间秒级或几分钟

2.比Hive快10倍

3.支持多数据源，如Hive、Kafka、MySQL、MonogoDB、Redis、JMX等，也可自己实现Connector

Client Protocol: HTTP+JSON, support various languages(Python, Ruby, PHP, Node.js Java)

支持JDBC/ODBC连接

4.ANSI SQL，支持窗口函数，join，聚合，复杂查询等。

## **与hive比较** 
![](/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.004.png)

上图显示了MapReduce与Presto的执行过程的不同点，MR每个操作要么需要写磁盘，要么需要等待前一个stage全部完成才开始执行，而Presto将SQL转换为多个stage，每个stage又由多个tasks执行，每个tasks又将分为多个split。所有的task是并行的方式进行允许，stage之间数据是以pipeline形式流式的执行，数据之间的传输也是通过网络以Memory-to-Memory的形式进行，没有磁盘io操作。这也是Presto性能比Hive快很多倍的决定性原因。