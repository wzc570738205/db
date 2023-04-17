# **JanusGraph(on HBase)**
## **概述**
JanusGraph是一个可扩展的图数据库，可以把包含数千亿个顶点和边的图存储在多机集群上。它支持事务，支持数千用户实时、并发访问存储在其中的图。JanusGraph本身专注在图数据的序列化、丰富图数据建模和高效查询的执行。此外，JanusGraph使用Hadoop来做图分析和批量图数据处理。JanusGraph为数据的持久化、数据索引和客户端访问实现了健壮的，模块化的接口。JanusGraph的模块化架构使得它可以广泛地与各类存储、索引和客户端技术交互操作。它也简化了JanusGraph扩展支持新系统的过程。
## **架构**
![](/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.004.png)

JanusGraph是模块化的体系结构（JanusGraph has a modular architecture）。

它使用hadoop来做图的分析和图的批处理，使用模块化接口来做数据持久化、索引和客户端访问。

在JanusGraph和磁盘之间有多个后端存储系统和多个索引系统。（Between JanusGraph and the disks sits one or more storage and indexing adapters.）

它支持的外部存储系统，目前标准支持的有（当然也可以将第三方的存储系统作为JanusGraph的后端存储系统）：

1、Apache Cassandra

2、Apache HBase

3、Oracle Berkeley DB Java Edition

4、Google Cloud BigTable

支持的外部索引系统：

1、Elasticsearch

2、Apache Solr

3、Apache Lucene
## **特性**
1、分布式部署，因此，支持集群。

2、可以存储大图，比如包含数千亿Vertices和edges的图。

3、支持数千用户实时、并发访问。（并发访问肯定是实时的，这个唉，没必要强调好像）

4、集群节点可以线性扩展，以支持更大的图和更多的并发访问用户。

5、数据分布式存储，并且每一份数据都有多个副本，因此，有更好的计算性能和容错性。

6、支持在多个数据中心做高可用，支持热备份。

7、支持各种后端存储系统，目前标准支持以下四种，当然也可以增加第三方的存储系统：

Apache Cassandra

Apache HBase

Google Cloud Bigtable

Oracle BerkeleyDB

8、通过集成大数据平台，比如Apache Spark、Apache Giraph、Apache Hadoop等，支持全局图数据分析、报表、ETL

9、支持geo（Gene Expression Omnibus，基因数据分析）、numeric range（这个的含义不清楚）

10、集成ElasticSearch、Apache Solr、Apache Lucene等系统后，可以支持全文搜索。

11、原生集成Apache TinkerPop图技术栈，包括Gremlin graph query language、Gremlin graph server、Gremin applications。

12、开源，基于Apache 2 Licence。

13、通过使用以下系统可以可视化存储在JanusGraph中的图数据：

Cytoscape

Gephi plugin for Apache TinkerPop

Graphexp

KeyLines by Cambridge Intelligence

Linkurious
## **适用场景**
1、新闻事件的关联分析

2、识别反欺诈潜在风险

3、不一致性验证识别

4、失联客户管理

5、知识图谱的可视化展示