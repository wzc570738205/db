# **kudu**
## **概述**
Apache Kudu是由Cloudera开源的存储引擎，可以同时提供低延迟的随机读写和高效的数据分析能力。它是一个融合HDFS和HBase功能的新组件，具备介于两者之间的新存储组件。

Kudu支持水平扩展，并且与Cloudera Impala和Apache Spark等当前流行的大数据查询和分析工具结合紧密。Kudu的定位是Fast Analytics on Fast Data，是一个既支持随机读写、又支持OLAP分析的大数据存储引擎。
## **架构**
与HDFS和HBase相似，Kudu使用单个的Master节点，用来管理集群的元数据，并且使用任意数量的Tablet Server节点用来存储实际数据。可以部署多个Master节点来提高容错性。

![](/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.003.png)
## **Table**
表（Table）是数据库中用来存储数据的对象，是有结构的数据集合。Kudu中的表具有schema（纲要）和全局有序的primary key（主键）。Kudu中的一个table会被水平分成多个被称之为tablet的片段。
## **Tablet**
一个tablet是一张table连续的片段，tablet是kudu表的水平分区，类似于hbase的region。每个tablet存储着一定连续range的数据（key），且tablet两两间的range不会重叠。一张表的所有tablet包含了这张表的所有key空间。

Tablet会冗余存储。放置到多个tablet server上，并且在任意给定的时间点，其中一个副本被认为是leader tablet，其余被认之为follower tablet。每个tablet都可以进行数据的读请求，但只有leader tablet负责写数据请求。
## **Tablet Server**
tablet server集群中的小弟，负责数据存储，并提供数据读写服务。

一个tablet server存储table表的tablet，向kudu client客户端提供读取数据服务。对于给定的tablet，一个tablet server充当leader，其他tablet server充当该tablet的fllower副本。只有leader服务写请求，leader和followers可以为每个服务提供读请求。一个tablet server可以服务多个tablet，并且一个tablet可以被多个tablet severs服务着。
## **Master Server**
集群中老大，负责集群管理、元数据管理等功能。
## **特点**
1、主从架构 

主为master，从为 tablet server，通常为三主多从。 

2、高可用性 

Tablet server和Master使用 Raft Consensus Algorithm 来保证节点的高可用，确保只要有一半以上的副本可用，该 tablet 便可用于读写。例如，如果3个副本中有2个或5个副本中的3个可用，则该tablet可用。即使在 leader tablet 出现故障的情况下，读取功能也可以通过 read-only（只读的）follower tablets来进行服务，或者是leader宕掉的情况下，会根据raft机制重新选举leader。

3、水平可扩展

4、OLAP 工作的快速处理

5、与 MapReduce，Spark ，Impala和其他 Hadoop 生态系统组件集成

6、使用 Cloudera Manager 轻松维护和管理

7、底层存储完全是列式结构，每一列都可以自定义压缩

8、查询出来的数据是结构化模型，支持sql操作
## **应用场景**
1、适用于那些既有随机访问，也有批量数据扫描的复合场景。

2、高计算量的场景。

3、使用了高性能的存储设备，包括使用更多的内存。

4、支持数据更新，避免数据反复迁移。

5、支持跨地域的实时数据备份和查询。