# **HyperTable**
## **概述**
Hypertable是一个使用C++ 语言开发的开源、高性能、可伸缩的数据库，其以Google的BigTable相关论文为基础指导，采用与HBase非常相似的分布式模型，其目的是要构建一个针对分布式海量数据的高并发数据库。

目前Hypertable只支持最基本的增、删、改、查功能，对于事务处理和关联查询等关系型数据库的高级特性都尚未支持。同时，就少量数据记录的查询性能和吞吐量而言，Hypertable可能也不如传统的关系型数据库。
## **架构**
![](/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.003.png)

Hypertable的核心组件包括Hyperspace、RangeServer、Master和DFS Broker四部分。其中Hyperspace是Hypertable中最重要的组件之一，其提供了对分布式锁服务的支持以及对元数据的管理，是保证Hypertable数据一致性的核心。

Hyperspace类似于Google BigTable 系统中的 Chubby，在这里我们可以认为他是一个文件存储系统，主要用来存储一些元数据信息，同时提供分布式锁服务，另外还负责提供高效、可靠的主机选举服务。

RangeServer 是实际对外提供服务的组件单元，负责数据的读取和写入。在Hypertable的设计中，对每一张表都按照主键进行切分，形成多个Range（类似于关系型数据库中的分表）负责管理。在Hypetable中，通常会部署多个RangeServer，每个RangeServer都负责管理部分数据，由Master来负责进行RangeServer的集群管理。

Master是元数据管理中心，管理包括创建表、删除表或是其他表空间变更在内的所有元数据操作，同时负责检测RangeServer的工作状态，一旦某一个RangeServer宕机或是重启，能够自动进行Range的重新分配，从而实现对RangeServer集群的管理和负载均衡。

DFS Broker则是底层分布式文件系统的抽象层，用于衔接上层Hypertable和底层文件存储。所有对文件系统的读写操作，都是通过DFS Broker来完成的。目前已经可以接入Hypertable中分布系统包括HDFS、MapR、Ceph和KFS等，针对任何其他新的文件系统，只需要实现一个对应的DFS Broker，就可以将其快速接入到整个Hypetable系统中。
## **特点**
1、支持对大量并发请求的处理。

2、支持对海量数据的管理。

3、扩展性良好，在保证可用性的前提下，能够通过随意添加集群中的机器来实现水平扩容。

4、可用性极高，具有非常好的容错性，任何节点的失败，既不会造成系统瘫痪也不会影响数据的完整性。