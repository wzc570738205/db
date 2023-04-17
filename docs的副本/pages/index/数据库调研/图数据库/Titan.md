# **Titan**
## **概述**
Titan 是 PingCAP 研发的基于 RocksDB 的高性能单机 key-value 存储引擎，通过把大 value 同 key 分离存储的方式减少写入 LSM-tree 中的数据量级。在 value 较大的场景下显著缓解写入放大效应，降低 RocksDB 后台 compaction 对 IO 带宽和 CPU 的占用，同时提高 SSD 寿命的效果。

在存在大 value 的典型应用场景中，Titan 在写、更新和点读等场景下性能都优于 RocksDB。同原生 RocksDB 相比，Titan 通过一定程度上牺牲硬盘空间和范围查询的性能为代价，来取得更高的写入性能。随着 SSD 单位存储空间价格的降低，和 SSD 设备随机 IO 能力的提升，Titan 的这种设计取舍在未来会产生更加积极的作用。
## **架构**
![](/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.005.png)

Titan 维持 RocksDB 的写入流程不变，在 Flush 和 Compaction 时刻将大 value 从 LSM-tree 中进行分离并存储到 BlobFile 中。同 RocksDB 相比，Titan 增加了 BlobFile，TitanTableBuilder 和 Garbage Collection（GC）等组件，下面我们将会对这些组件逐一介绍。
## **BlobFile**
BlobFile 是存放 LSM-tree 中分离得到的 KV 记录的文件，它由 header、record 、meta block、meta index 和 footer 组成。其中每个 record 用于存放一个 key-value 对；meta block 用于在未来保存用户自定义数据；而 meta index 则用于检索 meta block。

![](/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.006.png)

为了充分利用 prefetch 机制提高顺序扫描数据时的性能，BlobFile 中的 key-value 是按照 key 的顺序有序存放的。除了从 LSM-tree 中分离出的 value 之外，blob record 中还保存了一份 key 的数据。在这份额外存储的 key 的帮助下，Titan 用较小的写放大收获了 GC 时快速查询 key 最新状态的能力。GC 则会利用 key 的更新信息来确定 value 是否已经过期可以被回收。考虑到 Titan 中存储的 value 大小偏大，将其压缩则可以获得较为显著的空间收益。BlobFile 可以选择 [Snappy](https://github.com/google/snappy)、[LZ4](https://github.com/lz4/lz4) 或 [Zstd](https://github.com/facebook/zstd) 在单个记录级别对数据进行压缩，目前 Titan 默认使用的压缩算法是 LZ4。
## **TitanTableBuilder**
RocksDB 提供了 TableBuilder 机制供用户自定义的 table 实现。Titan 则利用了这个能力实现了 TitanTableBuilder，在不对 RocksDB 构建 table 流程做侵入型改动的前提下，实现了将大 value 从 LSM-tree 中分离的功能。

![](/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.007.png)

在 RocksDB 将数据写入 SST 时，TitanTableBuilder 根据 value 大小决定是否需要将 value 分离到外部 BlobFile 中。如果 value 大小小于 Titan 设定的大 value 阈值，数据会直接写入到 RocksDB 的 SST 中；反之，value 则会持久化到 BlobFile 中，相应的位置检索信息将会替代 value 被写入 RocksDB 的 SST 文件中用于在读取时定位 value 的实际位置。同样利用 RocksDB 的 TableBuilder 机制，我们可以在 RocksDB 做 Compaction 的时候将分离到 BlobFile 中的 value 重新写入到 SST 文件中完成从 Titan 到 RocksDB 的降级。

熟悉另一个 KV 分离存储的 LSM-tree 实现 Badger 的读者可能想问为什么 Titan 没有选择选择将直接用 VLog 的方式保存在 WAL 中，从而避免一次额外的写入放大开销。假设我们将 LSM-tree 的 max level 和放大因子分别设定为 5 和 10，则 LSM-tree 的总写入放大大概为 1 + 1 + 10 + 10 + 10 + 10 = 42。其中由 BlobFile 引入的写入放大同 LSM-tree 的整体写入放大相比仅为 1 : 42，可以忽略不计。并且维持 WAL 也可以避免对 RocksDB 的侵入性改动，这也是 Titan 的重要设计目标之一。
## **Garbage Collection**
RocksDB 在 LSM-tree Compaction 时对已删除数据进行空间回收。同样 Titan 也具备 Garbage Collection (GC) 组件用于已删除数据的空间回收。在 Titan 中存在两种不同的 GC 方式分别应对不同的适用场景，分为「传统 GC」和「Level-Merge GC」。
## **特性**
1、支持大规模图集，其支持的规模随集群的节点扩展而扩展。

2、支持大规模并发事务及图操作。Titan的事务处理能力与集群中的机器数量成比例，并能在几毫秒内完成遍历查询。

3、支持通过Hadoop框架进行全局图分析和批处理图处理。

4、支持geo、数值范围，以及在非常大的图形上对顶点和边的全文搜索。

5、原生支持由TinkerPop公开的主流的图数据模型。

6、原生支持图形遍历语言Gremlin。

7、与Gremlin图形服务器轻松集成，实现非语言相关性编程。

8、对于许多图集配置项提供性能优化调节支持。

9、以顶点为中心的索引提供了顶点级查询，以缓解与臭名昭著的超级节点问题相关的问题。

10提供一个优化的磁盘指标，以便有效地使用存储和访问速度。

11、在Apache 2许可下开源。
## **主要功能和优点**
1、多数据中心高可用性。

2、支持ACID和最终的一致性。

3、支持各种存储后端：Apache Cassandra，Apache HBase，Oracle BerkeleyDB。

4、通过与大数据平台(Apache Spark，Apache Giraph和Apache Hadoop)集成，支持全局图数据分析，报告和ETL。

5、通过以下方式支持地理，数值范围和全文本搜索：ElasticSearch，Solr，Lucene。

6、与TinkerPop图栈的本机集成：Gremlin图查询语言，Gremlin图服务器，Gremlin应用程序。