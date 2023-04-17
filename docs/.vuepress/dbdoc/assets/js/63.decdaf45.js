(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{418:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"列式数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列式数据库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("列式数据库")])]),t._v(" "),a("h1",{attrs:{id:"cassandra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cassandra"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Cassandra")])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Cassandra是一个开源的列存储数据库，具有分布式，去中心化，灵活伸缩,高可用，错误容忍，可调的一致性。它的分布式结构基于Amazon的Dynamo,数据模型基于Google的bigtable.由facebook创建,现已捐献给Apache基金会。")]),t._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.001.png",alt:""}})]),t._v(" "),a("p",[t._v("Cassandra集群由成节点(Node)、机架(Rack)和数据中心(Data Center)组成。")]),t._v(" "),a("h2",{attrs:{id:"节点-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点-node"}},[t._v("#")]),t._v(" "),a("strong",[t._v("节点(Node)")])]),t._v(" "),a("p",[t._v("指运行Cassandra实例的服务器。节点可以是物理主机、云上的机器实例，或者是Docker容器。")]),t._v(" "),a("h2",{attrs:{id:"机架-rack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机架-rack"}},[t._v("#")]),t._v(" "),a("strong",[t._v("机架(Rack)")])]),t._v(" "),a("p",[t._v("指一组相互靠近的Cassandra节点。机架可以是包含连接到公共网络交换机节点的物理机架。在云端，机架通常指在同一可用区域中运行机器实例集合。")]),t._v(" "),a("h2",{attrs:{id:"数据中心-data-center"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据中心-data-center"}},[t._v("#")]),t._v(" "),a("strong",[t._v("数据中心(Data Center)")])]),t._v(" "),a("p",[t._v("指逻辑机架的集合，通常位于同一栋建筑中，通过可靠的网络连接。在云端，数据中心通常映射到云区域。如阿里云上的华北1区，华南2区。")]),t._v(" "),a("p",[t._v("Cassandra通常跨多个数据中心存储数据副本，以确保高可用性，同时会将查询路由到同一数据中心的其他节点，以实现最优性能。为了实现这一点，Cassandra使用两个内部协议来管理基于集群拓扑的数据路由：gossip和snitches。")]),t._v(" "),a("h2",{attrs:{id:"八卦协议-gossip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八卦协议-gossip"}},[t._v("#")]),t._v(" "),a("strong",[t._v("八卦协议(Gossip)")])]),t._v(" "),a("p",[t._v("Gossip协议又被称为流行病协议（Epidemic Protocol），也叫反熵（Anti-Entropy），当前的新冠就是流行病协议的一个典型案例，为了方便记忆我们按字面意思叫它八卦协议。")]),t._v(" "),a("p",[t._v("Gossip协议于1987年在ACM上发表的论文 "),a("a",{attrs:{href:"http://bitsavers.trailing-edge.com/pdf/xerox/parc/techReports/CSL-89-1_Epidemic_Algorithms_for_Replicated_Database_Maintenance.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Epidemic Algorithms for Replicated Database Maintenance》"),a("OutboundLink")],1),t._v("中被提出，有兴趣可以读一下原文(搞架构啃论文是绕不过的坎儿)。主要用在分布式数据库系统中各个副本节点间的数据同步，这种场景的一个最大特点就是组成网络的节点都是对等的，网络中即使有的节点因宕机而重启，或有新节点加入，但经过一段时间后，这些节点的状态也会与其他节点达成一致，也就是说，Gossip天然具有分布式容错的优点。它是一个带冗余的容错算法，属于一种最终一致性算法。虽然无法保证在某个时刻所有节点状态一致，但可以保证在”最终“所有节点一致，”最终“是一个现实中存在，但理论上无法证明的时间点。")]),t._v(" "),a("p",[t._v("Cassandra中的Gossip协议允许每个节点跟踪群集中其他节点的状态。每个Cassandra实例中的“ Gossiper”每秒运行一次，并最多选择三个随机节点来发起gossip会话。节点之间相互交换有关其他节点的信息，以便所有节点快速了解整个群集状态。 Cassandra会根据Gossip会话是否可以连接来确定节点是运行状态还是关闭状态，从而帮助其在集群中优化路由请求。")]),t._v(" "),a("h2",{attrs:{id:"告密者-snitches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#告密者-snitches"}},[t._v("#")]),t._v(" "),a("strong",[t._v("告密者(Snitches)")])]),t._v(" "),a("p",[t._v("在Cassandra中请求路由的另一个关键技术是“Snitch”。 翻译成中文是告密者，就像语义一样，告密者的工作是通知每个节点与其他节点的相对距离。 此信息用于确定从哪些节点读取和写入，以及在节点出现故障或无法访问机架或数据中心时如何以最优路径分发副本以最大限度地提高可用性。")]),t._v(" "),a("h2",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特点")])]),t._v(" "),a("p",[t._v("Cassandra因其卓越的技术特性而变得如此受欢迎。Cassandra的特性如下：")]),t._v(" "),a("p",[t._v("1、弹性可扩展性 - Cassandra是高度可扩展的; 它允许添加更多的硬件以适应更多的客户和更多的数据根据要求。")]),t._v(" "),a("p",[t._v("2、始终基于架构 - Cassandra没有单点故障，它可以连续用于不能承担故障的关键业务应用程序。")]),t._v(" "),a("p",[t._v("3、快速线性性能 - Cassandra是线性可扩展性的，即它为你增加集群中的节点数量增加你的吞吐量。因此，保持一个快速的响应时间。")]),t._v(" "),a("p",[t._v("4、灵活的数据存储 - Cassandra适应所有可能的数据格式，包括：结构化，半结构化和非结构化。它可以根据您的需要动态地适应变化的数据结构。")]),t._v(" "),a("p",[t._v("5、便捷的数据分发 - Cassandra通过在多个数据中心之间复制数据，可以灵活地在需要时分发数据。")]),t._v(" "),a("p",[t._v("6、事务支持 - Cassandra支持属性，如原子性，一致性，隔离和持久性（ACID）。")]),t._v(" "),a("p",[t._v("7、快速写入 - Cassandra被设计为在廉价的商品硬件上运行。 它执行快速写入，并可以存储数百TB的数据，而不牺牲读取效率。")]),t._v(" "),a("h1",{attrs:{id:"hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase"}},[t._v("#")]),t._v(" "),a("strong",[t._v("hbase")])]),t._v(" "),a("h2",{attrs:{id:"概述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("HBase 是一个开源的、分布式的、版本化的 NoSQL 数据库（也即非关系型数据库），它利用 Hadoop 分布式文件系统（Hadoop Distributed File System，HDFS）提供分布式数据存储。与传统的关系型数据库类似，HBase 也以表的形式组织数据，表也由行和列组成；不同的是，HBase 有列族的概念，它将一列或者多列组织在一起，HBase 的每一个列都必须属于某个列族。")]),t._v(" "),a("h2",{attrs:{id:"架构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.002.png",alt:""}})]),t._v(" "),a("p",[t._v("从HBase的架构图上可以看出，HBase中的存储包括HMaster、HRegionSever、HRegion、HLog、Store、MemStore、StoreFile、HFile等。")]),t._v(" "),a("h2",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Client")])]),t._v(" "),a("p",[t._v("包含访问HBase的接口并维护cache来加快对HBase的访问")]),t._v(" "),a("h2",{attrs:{id:"zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Zookeeper")])]),t._v(" "),a("p",[t._v("保证任何时候，集群中只有一个master")]),t._v(" "),a("p",[t._v("存贮所有Region的寻址入口。")]),t._v(" "),a("p",[t._v("实时监控Region server的上线和下线信息。并实时通知Master")]),t._v(" "),a("p",[t._v("存储HBase的schema和table元数据")]),t._v(" "),a("h2",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Master")])]),t._v(" "),a("p",[t._v("为Region server分配region")]),t._v(" "),a("p",[t._v("负责Region server的负载均衡")]),t._v(" "),a("p",[t._v("发现失效的Region server并重新分配其上的region")]),t._v(" "),a("p",[t._v("管理用户对table的增删改操作")]),t._v(" "),a("h2",{attrs:{id:"regionserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regionserver"}},[t._v("#")]),t._v(" "),a("strong",[t._v("RegionServer")])]),t._v(" "),a("p",[t._v("Region server维护region，处理对这些region的IO请求")]),t._v(" "),a("p",[t._v("Region server负责切分在运行过程中变得过大的region")]),t._v(" "),a("h2",{attrs:{id:"hlog-wal-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hlog-wal-log"}},[t._v("#")]),t._v(" "),a("strong",[t._v("HLog(WAL log)")])]),t._v(" "),a("p",[t._v("HLog文件就是一个普通的Hadoop Sequence File，Sequence File 的Key是 HLogKey对象，HLogKey中记录了写入数据的归属信息，除了table和 region名字外，同时还包括sequence number和timestamp，timestamp是” 写入时间”，sequence number的起始值为0，")]),t._v(" "),a("p",[t._v("或者是最近一次存入文件系 统中sequence number。")]),t._v(" "),a("p",[t._v("HLog SequeceFile的Value是HBase的KeyValue对象，即对应HFile中的 KeyValue")]),t._v(" "),a("h2",{attrs:{id:"region"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Region")])]),t._v(" "),a("p",[t._v("HBase自动把表水平划分成多个区域(region)，每个region会保存一个表 里面某段连续的数据；每个表一开始只有一个region，随着数据不断插 入表，region不断增大，当增大到一个阀值的时候，region就会等分会 两个新的region（裂变）；")]),t._v(" "),a("p",[t._v("当table中的行不断增多，就会有越来越多的region。这样一张完整的表 被保存在多个Regionserver上。")]),t._v(" "),a("h2",{attrs:{id:"memstore-与-storefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memstore-与-storefile"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Memstore 与 storefile")])]),t._v(" "),a("p",[t._v("一个region由多个store组成，一个store对应一个CF（列族）")]),t._v(" "),a("p",[t._v("store包括位于内存中的memstore和位于磁盘的storefile写操作先写入 memstore，当memstore中的数据达到某个阈值，hregionserver会启动 flashcache进程写入storefile，每次写入形成单独的一个storefile")]),t._v(" "),a("p",[t._v("当storefile文件的数量增长到一定阈值后，系统会进行合并（minor、 major compaction），在合并过程中会进行版本合并和删除工作 （majar），形成更大的storefile。")]),t._v(" "),a("p",[t._v("当一个region所有storefile的大小和超过一定阈值后，会把当前的region 分割为两个，并由hmaster分配到相应的regionserver服务器，实现负载均衡。")]),t._v(" "),a("p",[t._v("客户端检索数据，先在memstore找，找不到再找storefile")]),t._v(" "),a("p",[t._v("HRegion是HBase中分布式存储和负载均衡的最小单元。最小单元就表 示不同的HRegion可以分布在不同的HRegion server上。")]),t._v(" "),a("p",[t._v("HRegion由一个或者多个Store组成，每个store保存一个columns family。")]),t._v(" "),a("p",[t._v("每个Strore又由一个memStore和0至多个StoreFile组成。StoreFile 以HFile格式保存在HDFS上。")]),t._v(" "),a("h2",{attrs:{id:"特点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特点")])]),t._v(" "),a("p",[t._v("1、大：一个表可以有上亿行，上百万列。")]),t._v(" "),a("p",[t._v("2、面向列：面向列表(簇)的存储和权限控制，列(簇)独立检索。")]),t._v(" "),a("p",[t._v("3、稀疏：对于为空(NULL)的列，并不占用存储空间，因此，表可以设计的非常稀疏。")]),t._v(" "),a("p",[t._v("4、无模式：每一行都有一个可以排序的主键和任意多的列，列可以根据需要动态增加，同一张表中不同的行可以有截然不同的列。")]),t._v(" "),a("p",[t._v("5、数据多版本：每个单元中的数据可以有多个版本，默认情况下，版本号自动分配，版本号就是单元格插入时的时间戳。")]),t._v(" "),a("p",[t._v("6、数据类型单一：HBase中的数据都是字符串，没有类型。")]),t._v(" "),a("h2",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("优缺点")])]),t._v(" "),a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("优点")])]),t._v(" "),a("p",[t._v("列可以动态增加，并且列为空就不存储数据,节省存储空间。")]),t._v(" "),a("p",[t._v("Hbase自动切分数据，使得数据存储自动具有水平scalability。")]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("缺点")])]),t._v(" "),a("p",[t._v("不能支持条件查询，只支持按照Row key来查询。")]),t._v(" "),a("p",[t._v("不适合于大范围扫描查询。")]),t._v(" "),a("p",[t._v("不支持事务。")]),t._v(" "),a("p",[t._v("不直接支持SQL 的语句查询。")]),t._v(" "),a("h1",{attrs:{id:"hypertable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hypertable"}},[t._v("#")]),t._v(" "),a("strong",[t._v("HyperTable")])]),t._v(" "),a("h2",{attrs:{id:"概述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Hypertable是一个使用C++ 语言开发的开源、高性能、可伸缩的数据库，其以Google的BigTable相关论文为基础指导，采用与HBase非常相似的分布式模型，其目的是要构建一个针对分布式海量数据的高并发数据库。")]),t._v(" "),a("p",[t._v("目前Hypertable只支持最基本的增、删、改、查功能，对于事务处理和关联查询等关系型数据库的高级特性都尚未支持。同时，就少量数据记录的查询性能和吞吐量而言，Hypertable可能也不如传统的关系型数据库。")]),t._v(" "),a("h2",{attrs:{id:"架构-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.003.png",alt:""}})]),t._v(" "),a("p",[t._v("Hypertable的核心组件包括Hyperspace、RangeServer、Master和DFS Broker四部分。其中Hyperspace是Hypertable中最重要的组件之一，其提供了对分布式锁服务的支持以及对元数据的管理，是保证Hypertable数据一致性的核心。")]),t._v(" "),a("p",[t._v("Hyperspace类似于Google BigTable 系统中的 Chubby，在这里我们可以认为他是一个文件存储系统，主要用来存储一些元数据信息，同时提供分布式锁服务，另外还负责提供高效、可靠的主机选举服务。")]),t._v(" "),a("p",[t._v("RangeServer 是实际对外提供服务的组件单元，负责数据的读取和写入。在Hypertable的设计中，对每一张表都按照主键进行切分，形成多个Range（类似于关系型数据库中的分表）负责管理。在Hypetable中，通常会部署多个RangeServer，每个RangeServer都负责管理部分数据，由Master来负责进行RangeServer的集群管理。")]),t._v(" "),a("p",[t._v("Master是元数据管理中心，管理包括创建表、删除表或是其他表空间变更在内的所有元数据操作，同时负责检测RangeServer的工作状态，一旦某一个RangeServer宕机或是重启，能够自动进行Range的重新分配，从而实现对RangeServer集群的管理和负载均衡。")]),t._v(" "),a("p",[t._v("DFS Broker则是底层分布式文件系统的抽象层，用于衔接上层Hypertable和底层文件存储。所有对文件系统的读写操作，都是通过DFS Broker来完成的。目前已经可以接入Hypertable中分布系统包括HDFS、MapR、Ceph和KFS等，针对任何其他新的文件系统，只需要实现一个对应的DFS Broker，就可以将其快速接入到整个Hypetable系统中。")]),t._v(" "),a("h2",{attrs:{id:"特点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特点")])]),t._v(" "),a("p",[t._v("1、支持对大量并发请求的处理。")]),t._v(" "),a("p",[t._v("2、支持对海量数据的管理。")]),t._v(" "),a("p",[t._v("3、扩展性良好，在保证可用性的前提下，能够通过随意添加集群中的机器来实现水平扩容。")]),t._v(" "),a("p",[t._v("4、可用性极高，具有非常好的容错性，任何节点的失败，既不会造成系统瘫痪也不会影响数据的完整性。")]),t._v(" "),a("h1",{attrs:{id:"kudu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kudu"}},[t._v("#")]),t._v(" "),a("strong",[t._v("kudu")])]),t._v(" "),a("h2",{attrs:{id:"概述-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Apache Kudu是由Cloudera开源的存储引擎，可以同时提供低延迟的随机读写和高效的数据分析能力。它是一个融合HDFS和HBase功能的新组件，具备介于两者之间的新存储组件。")]),t._v(" "),a("p",[t._v("Kudu支持水平扩展，并且与Cloudera Impala和Apache Spark等当前流行的大数据查询和分析工具结合紧密。Kudu的定位是Fast Analytics on Fast Data，是一个既支持随机读写、又支持OLAP分析的大数据存储引擎。")]),t._v(" "),a("h2",{attrs:{id:"架构-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[t._v("与HDFS和HBase相似，Kudu使用单个的Master节点，用来管理集群的元数据，并且使用任意数量的Tablet Server节点用来存储实际数据。可以部署多个Master节点来提高容错性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.003.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Table")])]),t._v(" "),a("p",[t._v("表（Table）是数据库中用来存储数据的对象，是有结构的数据集合。Kudu中的表具有schema（纲要）和全局有序的primary key（主键）。Kudu中的一个table会被水平分成多个被称之为tablet的片段。")]),t._v(" "),a("h2",{attrs:{id:"tablet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Tablet")])]),t._v(" "),a("p",[t._v("一个tablet是一张table连续的片段，tablet是kudu表的水平分区，类似于hbase的region。每个tablet存储着一定连续range的数据（key），且tablet两两间的range不会重叠。一张表的所有tablet包含了这张表的所有key空间。")]),t._v(" "),a("p",[t._v("Tablet会冗余存储。放置到多个tablet server上，并且在任意给定的时间点，其中一个副本被认为是leader tablet，其余被认之为follower tablet。每个tablet都可以进行数据的读请求，但只有leader tablet负责写数据请求。")]),t._v(" "),a("h2",{attrs:{id:"tablet-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablet-server"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Tablet Server")])]),t._v(" "),a("p",[t._v("tablet server集群中的小弟，负责数据存储，并提供数据读写服务。")]),t._v(" "),a("p",[t._v("一个tablet server存储table表的tablet，向kudu client客户端提供读取数据服务。对于给定的tablet，一个tablet server充当leader，其他tablet server充当该tablet的fllower副本。只有leader服务写请求，leader和followers可以为每个服务提供读请求。一个tablet server可以服务多个tablet，并且一个tablet可以被多个tablet severs服务着。")]),t._v(" "),a("h2",{attrs:{id:"master-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-server"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Master Server")])]),t._v(" "),a("p",[t._v("集群中老大，负责集群管理、元数据管理等功能。")]),t._v(" "),a("h2",{attrs:{id:"特点-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特点")])]),t._v(" "),a("p",[t._v("1、主从架构")]),t._v(" "),a("p",[t._v("主为master，从为 tablet server，通常为三主多从。")]),t._v(" "),a("p",[t._v("2、高可用性")]),t._v(" "),a("p",[t._v("Tablet server和Master使用 Raft Consensus Algorithm 来保证节点的高可用，确保只要有一半以上的副本可用，该 tablet 便可用于读写。例如，如果3个副本中有2个或5个副本中的3个可用，则该tablet可用。即使在 leader tablet 出现故障的情况下，读取功能也可以通过 read-only（只读的）follower tablets来进行服务，或者是leader宕掉的情况下，会根据raft机制重新选举leader。")]),t._v(" "),a("p",[t._v("3、水平可扩展")]),t._v(" "),a("p",[t._v("4、OLAP 工作的快速处理")]),t._v(" "),a("p",[t._v("5、与 MapReduce，Spark ，Impala和其他 Hadoop 生态系统组件集成")]),t._v(" "),a("p",[t._v("6、使用 Cloudera Manager 轻松维护和管理")]),t._v(" "),a("p",[t._v("7、底层存储完全是列式结构，每一列都可以自定义压缩")]),t._v(" "),a("p",[t._v("8、查询出来的数据是结构化模型，支持sql操作")]),t._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" "),a("strong",[t._v("应用场景")])]),t._v(" "),a("p",[t._v("1、适用于那些既有随机访问，也有批量数据扫描的复合场景。")]),t._v(" "),a("p",[t._v("2、高计算量的场景。")]),t._v(" "),a("p",[t._v("3、使用了高性能的存储设备，包括使用更多的内存。")]),t._v(" "),a("p",[t._v("4、支持数据更新，避免数据反复迁移。")]),t._v(" "),a("p",[t._v("5、支持跨地域的实时数据备份和查询。")]),t._v(" "),a("h1",{attrs:{id:"列式数据库对比图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列式数据库对比图"}},[t._v("#")]),t._v(" "),a("strong",[t._v("列式数据库对比图")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("维度/名称")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Cassandra")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("HBase")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Hypertable")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Hypertable已于2016年3月停止进一步开发，并已从DB-Engines排名中删除。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("基于BigTable和DynamoDB的思想的宽列存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("基于Apache Hadoop和BigTable概念的大列存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("基于分布式文件系统（例如Hadoop）的开源BigTable实现")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("主数据库模型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("宽列存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("宽列存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("宽列存储")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/ranking",target:"_blank",rel:"noopener noreferrer"}},[t._v("DB引擎排名"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://db-engines.com/info.png",alt:""}})]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.004.png",alt:"排名趋势"}})])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/ranking_trend/system/Cassandra%3BHBase%3BHypertable",target:"_blank",rel:"noopener noreferrer"}},[t._v("趋势图"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("秩")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("＃11")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("＃1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("秩")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("＃23")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("＃2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("网站")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("技术文档")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("开发者")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("初始发行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("当前的版本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开源")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("仅基于云")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DBaaS产品（赞助商链接）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("实施语言")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器操作系统")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("数据方案")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("预定义数据类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("XML支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("二级索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SQL支持")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("API和其他访问方法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("支持的编程语言")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器端脚本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("触发器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("是否分片")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("备份方式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MapReduce api")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("一致性概念")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("外键")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("事务性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("并发性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("持久性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("内存支持选项")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("用户访问控制")])])])]),t._v(" "),a("h1",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" "),a("strong",[t._v("参考文献")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://cassandra.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cassandra.apache.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hbase.apache.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.hypertable.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.hypertable.com/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("https://kudu.apache.org/")]),t._v(" "),a("p",[t._v("https://db-engines.com/en/system/Cassandra%3BHBase%3BHypertable")])])}),[],!1,null,null,null);e.default=s.exports}}]);